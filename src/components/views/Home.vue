<template>
	<div class="page home">
		<v-fullpage class="v-center t-center">
			<div class="section">
				<canvas id="bg"></canvas>
				<div class="container container-sm">
					<div v-on:mouseover="onProjectLink = true" v-on:mouseout="onProjectLink = false" class="home-title">
						<div class="title">
							<v-scroll animation="scale">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 420.5 360.2" style="enable-background:new 0 0 420.5 360.2;" xml:space="preserve" width="200"><path fill="#333333" d="M152.9,360.2L0,0h152.4l57.8,136.2L268.1,0h37.7l-76.7,180.7l38.5,90.7L382.8,0h37.7L267.6,360.2l-57.4-135.2L152.9,360.2z
								 M52.4,34.7l100.5,236.7l38.5-90.7l-61.9-146H52.4z"></path></svg>
							</v-scroll>
							<v-scroll animation="fade">
								<h1>{{ $t('home.title') }}</h1>
							<v-scroll animation="fade">
								<span>{{ $t('home.subtitle') }}</span>
							</v-scroll>
						</div>
						<v-scroll animation="scale">
							<router-link :to="'/' + $route.params.lang + '/projects'" class="link">{{ $t('home.btn') }} <img :src="require('../../assets/img/icons/right-arrow.svg')" alt="Right arrow"></router-link>
						</v-scroll>
					</div>
				</div>
			</div>
			<div class="footer">
				
			</div>
		</v-fullpage>
	</div>
</template>

<script>

import Store from '../../store.js';
import TWEEN from 'tween.js';

export default {
	data() {
		return {
			onProjectLink: false,
			separation: 100,
			scale: 1,
			speed: 1,
			animationFrameId: 0
		}
	},
	mounted() {
		var width, height, canvas, ctx, points, target;

		var circleColor = "rgba(180,180,180,";
		var strokeColor = "rgba(222,222,222,";
		
		var nConnections = 5;
		var tweenFrequency = 2000;
		var tweenAmplitude = 20;
		var nPoints = 20;
		if(Store.state.width < 768) 
			nPoints = 8;

	    // Main
	    initHeader();
	    initAnimation();
	    addListeners();

	    function initHeader() {
	        width = window.innerWidth;
	        height = window.innerHeight;
	        target = {x: width/2, y: height/2};

	        canvas = document.getElementById('bg');
	        canvas.width = width;
	        canvas.height = height;
	        ctx = canvas.getContext('2d');

	        // create points
	        points = [];
	        for(var x = 0; x < width; x = x + width / nPoints) {
	            for(var y = 0; y < height; y = y + height / nPoints) {
	                var px = x + Math.random() * width / nPoints;
	                var py = y + Math.random() * height / nPoints;
	                var p = {x: px, originX: px, y: py, originY: py };
	                points.push(p);
	            }
	        }

	        // for each point find the 3 closest points
	        for(var i = 0; i < points.length; i++) {
	            var closest = [];
	            var p1 = points[i];
	            for(var j = 0; j < points.length; j++) {
	                var p2 = points[j]
	                if(!(p1 == p2)) {
	                    var placed = false;
	                    for(var k = 0; k < nConnections; k++) {
	                        if(!placed) {
	                            if(closest[k] == undefined) {
	                                closest[k] = p2;
	                                placed = true;
	                            }
	                        }
	                    }

	                    for(var k = 0; k < nConnections; k++) {
	                        if(!placed) {
	                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
	                                closest[k] = p2;
	                                placed = true;
	                            }
	                        }
	                    }
	                }
	            }
	            p1.closest = closest;
	        }

	        // assign a circle to each point
	        for(var i in points) {
	            var c = new Circle(points[i], 2 + Math.random() * 2, circleColor);
	            points[i].circle = c;
	        }
	    }

	    // Event handling
	    function addListeners() {
	       	if(!('ontouchstart' in window)) {
	            window.addEventListener('mousemove', mouseMove);
	        }
	        window.addEventListener('resize', resize);
	    }

	    function mouseMove(e) {
	        var posx = 0;
	        var posy = 0;
	        if (e.pageX || e.pageY) {
	            posx = e.pageX;
	            posy = e.pageY;
	        }
	        else if (e.clientX || e.clientY) {
	            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            	posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }
	        target.x = posx;
	        target.y = posy;
	    }

	    function resize() {
	        width = window.innerWidth;
	        height = window.innerHeight;
	        canvas.width = width;
	        canvas.height = height;
	    }

	    // animation
	    function initAnimation() {
	        animate();
	        for(var i in points) {
	            shiftPoint(points[i]);
	        }
	    }

	    function animate(time) {
            ctx.clearRect(0, 0, width, height);
            TWEEN.update();
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 10000) {
                    points[i].active = 0.4;
                    points[i].circle.active = 1;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.2;
                    points[i].circle.active = 0.9;
                } else if(Math.abs(getDistance(target, points[i])) < 400000) {
                    points[i].active = 0.08;
                    points[i].circle.active = 0.2;
                } else {
                    points[i].active = 0.06;
                    points[i].circle.active = 0.1;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
	        requestAnimationFrame(animate);
	    }

	    // Move points
	    function shiftPoint(p) {
	        new TWEEN.Tween(p)
	        .to({x: p.originX + Math.random() * tweenAmplitude, y: p.originY + Math.random() * tweenAmplitude}, tweenFrequency + 1000 * Math.random())
            .onComplete(function() {
            	shiftPoint(p);
            })
            .easing(TWEEN.Easing.Quartic.InOut)
            .start();
	    }

	    // Canvas manipulation
	    function drawLines(p) {
	        if(!p.active) return;
	        for(var i in p.closest) {
	            ctx.beginPath();
	            ctx.moveTo(p.x, p.y);
	            ctx.lineTo(p.closest[i].x, p.closest[i].y);
	            ctx.strokeStyle = strokeColor + p.active +')';
	            ctx.stroke();
	        }
	    }

	    function Circle(pos, rad, color) {
	        var _this = this;

	        // constructor
	        (function() {
	            _this.pos = pos || null;
	            _this.radius = rad || null;
	            _this.color = color || null;
	        })();

	        this.draw = function() {
	            if(!_this.active) return;
	            ctx.beginPath();
	            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
	            ctx.fillStyle = _this.color + _this.active+')';
	            ctx.fill();
	        };
	    }

	    // Util
	    function getDistance(p1, p2) {
	        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
	    }

	},
	destroyed() {
		
	}
}
</script>
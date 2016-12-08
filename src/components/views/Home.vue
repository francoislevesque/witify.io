<template>
	<div class="page home">
		<v-fullpage class="v-center t-center">
			<div id="vector">
	            <canvas id="vectors"></canvas>
	        </div>
			<div class="section">
				<div class="container container-sm">
					<v-scroll animation="fade">
						<div class="title">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								 viewBox="0 0 420.5 360.2" style="enable-background:new 0 0 420.5 360.2;" xml:space="preserve" width="200">
								<path fill="#fff" d="M152.9,360.2L0,0h152.4l57.8,136.2L268.1,0h37.7l-76.7,180.7l38.5,90.7L382.8,0h37.7L267.6,360.2l-57.4-135.2L152.9,360.2z
								 M52.4,34.7l100.5,236.7l38.5-90.7l-61.9-146H52.4z"/>
							</svg><br>
						</div>
					</v-scroll>
					<v-scroll animation="fade">
					<div class="title">
						<h1>Witify</h1>
						<span>{{ $t('about.subtitle') }}</span>
					</div>
					</v-scroll>
					<v-scroll animation="slideUp" delay="100">
					<router-link :to="'/' + $route.params.lang + '/projects'" exact class="btn btn-black">{{ $t("nav.projects") }}</router-link>
					</v-scroll>
				</div>
			</div>
		</v-fullpage>
	</div>
</template>

<script>

import { TweenLite, Circ } from 'gsap'

export default {
	mounted() {
		var vm = this;

	    var largeHeader, canvas, ctx, points, target, animateHeader = true;

	    var nConnections = 2;
	    var tweenFrequency = 5;
	    var tweenAmplitude = 20;
	    var circleColor = 'rgba(255,255,255,0.005)';
	    var nPoints = 25;

	    if(vm.$store.state.width < 900) {
	        nPoints = 10;
	        tweenFrequency = 1;
	        tweenAmplitude = 10;
	    }

	    // Main
	    initHeader();
	    initAnimation();
	    addListeners();

	    function initHeader() {
	        target = {x: vm.$store.state.width/2, y: vm.$store.state.height/2};

	        largeHeader = document.getElementById('vector');
	        largeHeader.style.height = vm.$store.state.height+'px';

	        canvas = document.getElementById('vectors');
	        canvas.width = vm.$store.state.width;
	        canvas.height = vm.$store.state.height;
	        ctx = canvas.getContext('2d');

	        // create points
	        points = [];
	        for(var x = 0; x < vm.$store.state.width; x = x + vm.$store.state.width/nPoints) {
	            for(var y = 0; y < vm.$store.state.height; y = y + vm.$store.state.height/nPoints) {
	                var px = x + Math.random()*vm.$store.state.width/nPoints;
	                var py = y + Math.random()*vm.$store.state.height/nPoints;
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
	            var c = new Circle(points[i], 2+Math.random()*2, circleColor);
	            points[i].circle = c;
	        }
	    }

	    // Event handling
	    function addListeners() {
	        if(!('ontouchstart' in window)) {
	            window.addEventListener('mousemove', mouseMove);
	        }
	        window.addEventListener('scroll', scrollCheck);
	        window.addEventListener('resize', resize);
	    }

	    function mouseMove(e) {
	        var posx = 0;
	        var posy = 0;
	        if (e.pageX || e.pageY) {
	            posx = e.pageX;
	            posy = e.pageY;
	        }
	        else if (e.clientX || e.clientY)    {
	            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }
	        target.x = posx;
	        target.y = posy;
	    }

	    function scrollCheck() {
	        if(document.body.scrollTop > vm.$store.state.height) animateHeader = false;
	        else animateHeader = true;
	    }

	    function resize() {
	        largeHeader.style.height = vm.$store.state.height+'px';
	        canvas.width = vm.$store.state.width;
	        canvas.height = vm.$store.state.height;
	    }

	    // animation
	    function initAnimation() {
	        animate();
	        for(var i in points) {
	            shiftPoint(points[i]);
	        }
	    }

	    function animate() {
	        if(animateHeader) {
	            ctx.clearRect(0,0,vm.$store.state.width,vm.$store.state.height);
	            for(var i in points) {
	                // detect points in range
	                if(Math.abs(getDistance(target, points[i])) < 5000) {
	                    points[i].active = 0.2;
	                    points[i].circle.active = 0.5;
	                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
	                    points[i].active = 0.03;
	                    points[i].circle.active = 0.3;
	                } else if(Math.abs(getDistance(target, points[i])) < 400000) {
	                    points[i].active = 0.02;
	                    points[i].circle.active = 0.02;
	                } else {
	                    points[i].active = 0.02;
	                    points[i].circle.active = 0.02;
	                }

	                drawLines(points[i]);
	                points[i].circle.draw();
	            }
	        }
	        requestAnimationFrame(animate);
	    }

	    // Move points
	    function shiftPoint(p) {
	        TweenLite.to(p, tweenFrequency+1*Math.random(), {x:p.originX+1+Math.random()*tweenAmplitude,
	            y: p.originY-50+Math.random()*tweenAmplitude, ease:Circ.easeInOut,
	            onComplete: function() {
	                shiftPoint(p);
	            }});
	    }

	    // Canvas manipulation
	    function drawLines(p) {
	        if(!p.active)
	        	p.active = 0.005
	        for(var i in p.closest) {
	            ctx.beginPath();
	            ctx.moveTo(p.x, p.y);
	            ctx.lineTo(p.closest[i].x, p.closest[i].y);
	            ctx.strokeStyle = 'rgba(255,255,255,' + p.active +')';
	            ctx.stroke();
	        }
	    }

	    function Circle(pos,rad,color) {
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
	            ctx.fillStyle = 'rgba(255,255,255,'+ _this.active+')';
	            ctx.fill();
	        };
	    }

	    // Util
	    function getDistance(p1, p2) {
	        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
	    }
	}
}
</script>
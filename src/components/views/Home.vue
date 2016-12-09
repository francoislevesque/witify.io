<template>
	<div class="page home">
		<v-fullpage class="v-center t-center">
			<div id="bg"></div>
			<div class="section">
				<div class="container container-sm">
					<router-link :to="'/' + $route.params.lang + '/projects'">
					<div v-on:mouseover="onProjectLink = true" v-on:mouseout="onProjectLink = false" class="home-title">
						<v-scroll animation="fade">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								 viewBox="0 0 420.5 360.2" style="enable-background:new 0 0 420.5 360.2;" xml:space="preserve" width="200">
								<path fill="#333333" d="M152.9,360.2L0,0h152.4l57.8,136.2L268.1,0h37.7l-76.7,180.7l38.5,90.7L382.8,0h37.7L267.6,360.2l-57.4-135.2L152.9,360.2z
								 M52.4,34.7l100.5,236.7l38.5-90.7l-61.9-146H52.4z"/>
							</svg><br>
						</v-scroll>
						<v-scroll animation="fade">
						<div class="title">
							<h1>Witify Studio</h1>
							<span>{{ $t('home.subtitle') }}</span>
						</div>
						</v-scroll>
					</div>
					</router-link>
				</div>
			</div>
		</v-fullpage>
	</div>
</template>

<script>

import * as THREE from 'three'
import SpriteCanvasMaterial from '../../renderers/CanvasRenderer.js'
import Projector from '../../renderers/Projector.js'

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
		console.log('in');
		var vm = this;
		var AMOUNTX = 70, AMOUNTY = 20;
			var container;
			var camera, scene, renderer;
			var particles, particle, count = 0;
			var mouseX = 0, mouseY = 0;
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			init();
			animate();
			function init() {
				container = document.getElementById('bg');
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;
				scene = new THREE.Scene();
				particles = new Array();
				var PI2 = Math.PI * 2;
				var material = new THREE.SpriteCanvasMaterial( {
					color: 0xd6d6d6,
					program: function ( context ) {
						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();
					}
				} );
				var i = 0;
				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
						var separation = vm.separation + Math.random()*10;
						particle = particles[ i ++ ] = new THREE.Sprite( material );
						particle.position.x = ix * separation - ( ( AMOUNTX * separation ) / 2 );
						particle.position.z = iy * separation - ( ( AMOUNTY * separation ) / 2 );
						scene.add( particle );
					}
				}
				renderer = new THREE.CanvasRenderer();
				renderer.setClearColor( 0xffffff );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );

				container.appendChild( renderer.domElement );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			//
			function onDocumentMouseMove( event ) {
				mouseX = (event.clientX - windowHalfX ) / 1;
				mouseY = (event.clientY - windowHalfY ) / 1;
			}
			function onDocumentTouchStart( event ) {
				if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseX = (event.touches[ 0 ].pageX - windowHalfX ) / 1;
					mouseY = (event.touches[ 0 ].pageY - windowHalfY ) / 1;
				}
			}
			function onDocumentTouchMove( event ) {
				if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseX = (event.touches[ 0 ].pageX - windowHalfX ) / 1;
					mouseY = (event.touches[ 0 ].pageY - windowHalfY ) / 1;
				}
			}
			function animate() {
				vm.animationFrameId = requestAnimationFrame( animate );
				render();
			}
			function render() {
				camera.position.x += ( mouseX - camera.position.x ) * .01;
				camera.position.y += ( - mouseY - camera.position.y ) * .01;
				vm.scale += (vm.onHoverScale - vm.scale) * 0.02;
				vm.speed += (vm.onHoverSpeed - vm.speed) * 0.02;
				camera.lookAt( scene.position );
				var i = 0;
				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
						particle = particles[ i++ ];
						particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 200 * vm.scale) +
							( Math.sin( ( iy + count ) * 0.5 ) * 100 );
						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 * vm.scale +
							( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4 * vm.scale;
					}
				}
				renderer.render(scene, camera);
				count += (0.05 * vm.speed);
			}
	},
	destroyed() {
		console.log('out')
		cancelAnimationFrame(this.animationFrameId);
		/*document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'touchstart', onDocumentTouchStart, false );
		document.removeEventListener( 'touchmove', onDocumentTouchMove, false );
		window.removeEventListener( 'resize', onWindowResize, false );*/
	},
	computed: {
		onHoverScale() {
			if(this.onProjectLink)
				return 1.5
			else
				return 1
		},
		onHoverSpeed() {
			if(this.onProjectLink)
				return 2.5
			else
				return 1
		}
	}
}
</script>
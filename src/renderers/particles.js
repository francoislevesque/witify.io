/*import Store from '../store.js'
import * as THREE from 'three'
import SpriteCanvasMaterial from './CanvasRenderer.js'
import Projector from './Projector.js'

export default class Particules {
	constructor() {
		this.separation = 100
		this.amountX = 70
		this.amountY = 20
		this.scale = 1
		this.speed = 1
		this.animationFrameId = 0
		this.container = 0
		this.camera = 0
		this.scene = 0
		this.renderer = 0
		this.particles = 0
		this.particle = 0
		this.count = 0
		this.mouseX = 0
		this.mouseY = 0
		this.windowHalfX = Store.state.width / 2
		this.windowHalfY = Store.state.height / 2
	}

	init() {
		var vm = this

		this.container = document.getElementById('bg')
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
		this.camera.position.z = 3000
		this.scene = new THREE.Scene()
		this.particles = new Array()

		var PI2 = Math.PI * 2
		var material = new THREE.SpriteCanvasMaterial({
			color: 0xd6d6d6,
			program(context) {
				context.beginPath()
				context.arc( 0, 0, 0.5, 0, PI2, true )
				context.fill()
			}
		})

		var i = 0;
		for(var ix = 0; ix < this.amountX; ix++) {
			for(var iy = 0; iy < this.amountY; iy++) {
				var separation = this.separation + Math.random()*10
				this.particle = this.particles[i++] = new THREE.Sprite(material)
				this.particle.position.x = ix * separation - ((this.amountX * separation) / 2)
				this.particle.position.z = iy * separation - ((this.amountY * separation) / 2)
				this.scene.add(vm.particle)
			}
		}

		this.renderer = new THREE.CanvasRenderer()
		this.renderer.setClearColor(0xffffff)
		this.renderer.setPixelRatio(window.devicePixelRatio)
		this.renderer.setSize(window.innerWidth, window.innerHeight)

		this.container.appendChild(vm.renderer.domElement)
		window.addEventListener('resize', vm.onWindowResize, false)
	}

	onWindowResize() {
		var vm = this
		this.camera.aspect = Store.state.width / Store.state.height
		this.camera.updateProjectionMatrix()
		this.renderer.setSize(vm.$store.state.width, vm.$store.state.height)
	}

	mouseMove(event) {
		this.mouseX = (event.clientX - this.windowHalfX) / 1
		this.mouseY = (event.clientY - this.windowHalfY) / 1
	}

	touchStart(event) {
		if (event.touches.length === 1) {
			event.preventDefault()
			this.mouseX = (event.touches[0].pageX - this.windowHalfX) / 1
			this.mouseY = (event.touches[0].pageY - this.windowHalfY) / 1
		}
	}

	touchMove(event) {
		if (event.touches.length === 1) {
			event.preventDefault()
			this.mouseX = (event.touches[0].pageX - this.windowHalfX) / 1
			this.mouseY = (event.touches[0].pageY - this.windowHalfY) / 1
		}
	}

	animate() {
		var vm = this
		this.animationFrameId = requestAnimationFrame(vm.animate)
		this.render()
	}

	render() {
		var vm = this
		this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.01
		this.camera.position.y += (- this.mouseY - this.camera.position.y) * 0.01
		this.scale += (this.onHoverScale - this.scale) * 0.02
		this.speed += (this.onHoverSpeed - this.speed) * 0.02
		this.camera.lookAt(vm.scene.position)
		var i = 0;
		for(var ix = 0; ix < this.amountX; ix++) {
			for(var iy = 0; iy < this.amountY; iy++) {
				this.particle = this.particles[i++]
				this.particle.position.y = (Math.sin((ix + vm.count) * 0.3) * 200 * this.scale) +
					(Math.sin((iy + vm.count) * 0.5) * 100)
				this.particle.scale.x = this.particle.scale.y = (Math.sin((ix + vm.count) * 0.3) + 1) * 4 * this.scale +
					(Math.sin((iy + vm.count) * 0.5) + 1) * 4 * this.scale
			}
		}
		this.renderer.render(vm.scene, vm.camera)
		this.count += (0.05 * this.speed)
	}
}*/
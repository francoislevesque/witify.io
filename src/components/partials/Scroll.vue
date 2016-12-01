<template>
	<div :class="[{'animated': timeSinceInViewPort > delay}, animation]" style="position: relative">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				elementOffset: 0,
				elementHeight: 0,
				firstLoad: false,
				timeSinceInViewPort: 0
			}
		},

		props: {
			'animation': {
				required: true
			},
			'delay': {
				default: 0
			}
		},

		mounted() {

			var vm = this

			// Get scroll position
			setTimeout(function() {
				vm.elementOffset = vm.$el.offsetTop + vm.$el.offsetParent.offsetTop
				vm.elementHeight = vm.$el.clientHeight
				vm.firstLoad = true
			}, 100)  // Timeout to animation on load
			
			// On resize
			window.onresize = function() {
				vm.elementOffset = vm.$el.offsetTop
				vm.elementHeight = vm.$el.clientHeight
			}

			setInterval(function() {
				if(vm.inViewPort())
					vm.timeSinceInViewPort += 100
				else
					vm.timeSinceInViewPort = 0
			}, 100)
		},
		
		methods: {
			// Check if is in viewport
			inViewPort() {
				return (
					this.firstLoad &&
					/*this.elementOffset + this.elementHeight >= this.$store.state.scrollTop &&*/
					this.elementOffset <= this.$store.state.scrollTop + this.$store.state.height
				)
			}
		},

	}
</script>
<template>
	<div :class="[{'animated': animated()}, animation]" style="position: relative">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				elementOffset: 0,
				elementHeight: 0,
				firstLoad: false
			}
		},

		props: ['animation', 'delay'],

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
		},
		
		methods: {
			// Check if is in viewport
			animated() {
				return (
					this.firstLoad &&
					this.elementOffset + this.elementHeight >= this.$store.state.scrollTop &&
					this.elementOffset <= this.$store.state.scrollTop + this.$store.state.height
				)
			}
		},

	}
</script>
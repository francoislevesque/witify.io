<template>
	<div :class="[{'animated': animated()}, animation]">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				elementOffset: 0,
				elementHeight: 0,
			}
		},

		props: ['animation', 'delay'],

		mounted() {

			var vm = this

			// Get scroll position Attribute from the parent element 
			setTimeout(function() {
				vm.elementOffset = vm.$el.offsetTop
				vm.elementHeight = vm.$el.clientHeight
			}, 100)
			
			// On resize
			window.onresize = function() {
				vm.elementOffset = vm.$el.offsetTop
				vm.elementHeight = vm.$el.clientHeight
			}
		},
		
		methods: {
			// Check if is in viewport
			animated() {
				return !(this.elementOffset + this.elementHeight <= this.$store.state.scrollTop ||
					this.elementOffset >= this.$store.state.scrollTop + this.$store.state.height)
			}
		},

	}
</script>
<template>
	<div id="transition-wrapper">
		<transition 
		name="scale"
		v-on:after-enter="pageReady"
		>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import PageControl from '../../front/pageControl'

	export default {
		methods: {
			pageReady() {
				PageControl.ready();
			}
		}
	}
</script>
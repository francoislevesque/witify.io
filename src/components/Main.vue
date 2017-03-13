<template>
	<transition
		mode="in-out"
		name="fade"
		v-on:before-enter="beforeEnter"
	>	
			<router-view></router-view>
	</transition>
</template>

<script>
import BeforeReady from '../events/beforeReady'

export default {
	methods: {
		beforeEnter(el) {
			BeforeReady()
		}
	}
}
</script>
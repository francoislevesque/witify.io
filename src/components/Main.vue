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
import $ from 'jquery'
import BeforeReady from '../events/beforeReady'

export default {
	methods: {
		beforeEnter(el) {
			BeforeReady()
		},
		enter(el, done) {
			this.$store.commit('animationState', 'enter')
			done()
		},
		afterEnter(el) {
			this.$store.commit('animationState', 'afterEnter')
		},
		enterCancelled(el) {
			this.$store.commit('animationState', 'enterCancelled')
		},
		beforeLeave(el) {
			this.$store.commit('animationState', 'beforeLeave')
		},
		leave(el, done) {
			this.$store.commit('animationState', 'leave')
			done()
		},
		afterLeave(el) {
			this.$store.commit('animationState', 'afterLeave')
		},
		leaveCancelled() {
			this.$store.commit('leaveCancelled', 'afterLeave')
		}
	}
}
</script>
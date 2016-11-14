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
import Velocity from 'velocity-animate'
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
			//Velocity(el, { opacity: '1' })
		},
		enterCancelled(el) {
			this.$store.commit('animationState', 'enterCancelled')
			//Velocity(el, { opacity: '0' })
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
			//Velocity(el, { opacity: '0' })
		},
		leaveCancelled() {
			this.$store.commit('leaveCancelled', 'afterLeave')
			//Velocity(el, { opacity: '1' })
		}
	}
}
</script>
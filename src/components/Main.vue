<template>
	<transition
		mode="in-out"
		name="scale"
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
			//Velocity(el, { opacity: '0' })
		},
		enter(el, done) {
			this.$store.commit('animationState', 'enter')
			//Velocity(el, { opacity: '0' }, { complete: done })
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
			//Velocity(el, { opacity: '1' })
		},
		leave(el, done) {
			this.$store.commit('animationState', 'leave')
			//Velocity(el, { opacity: '0' }, { complete: done })
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
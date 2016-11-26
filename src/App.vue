<template>
<transition name="fade">
	<div id="app" v-if="ready">
	
		<!-- Navigation Bar -->
		<v-nav></v-nav>
		
		<!-- Route Outlet -->
		<router-view></router-view>

		<!-- Loading --> 
		<v-loading></v-loading>
	</div>
</transition>
</template>

<script>

import Navigation from './components/partials/Navigation.vue'
import Footer from './components/partials/Footer.vue'
import Loading from './components/partials/Loading.vue'

export default {
	components: {
		'v-nav': Navigation,
		'v-footer': Footer,
		'v-loading': Loading
	},

	data() {
		return {
			ready: false
		}
	},

	mounted() {
		this.ready = true
	}
}
</script>
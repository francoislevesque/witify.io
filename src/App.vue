<template>
	<div id="app">
	
		<!-- Navigation Bar -->
		<v-nav></v-nav>
		
		<!-- Route Outlet -->
		<router-view></router-view>

		<!-- Loading --> 
		<v-loading></v-loading>
	</div>
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
	}
}
</script>
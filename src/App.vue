<template>
	<div id="app">
	
		<!-- Navigation Bar -->
		<v-nav></v-nav>
		
		<!-- Route Outlet -->
		<router-view></router-view>

	</div>
</template>

<script>

import Navigation from './components/partials/Navigation.vue'
import Footer from './components/partials/Footer.vue'

export default {
	components: {
		'v-nav': Navigation,
		'v-footer': Footer
	}
}
</script>
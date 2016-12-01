/** NPM Packages */
import JQuery from'jquery'
import Slick from 'slick-carousel'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource'

/** Vue Plugins */
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueResource);

/** Custom Plugins **/
import router from './route/router'
import store from './store'
import Config from './config'

import Resize from './events/resize'
import Ready from './events/ready'

/** Set Locales */
import locales from './lang/locales'
Object.keys(locales).forEach(function (lang) {
	Vue.locale(lang, locales[lang])
});


/** Global Components */
import VScroll from './components/partials/Scroll.vue'
import VFullpage from './components/partials/Fullpage.vue'
Vue.component('v-scroll', VScroll)
Vue.component('v-fullpage', VFullpage)

require('./assets/sass/main.scss')

/** Root App Component */
import App from './App.vue'

// Show all routes
// import routes from './route/list'

/** Main VueJs Instance */
new Vue({
	el: '#app',
	router,
	store,
	data() {
		return {
			config: Config
		}
	},
	mounted() {
		// On first load
		Ready(this.$route);

		// On resize
		window.onresize = function() {
			Resize()
		}

		// Show all routes
		//console.log(routes);
	},
	watch: {
		'$route': function (to, from) {
			// After page change
			Ready(to);
		}
	},
	render: h => h(App)
})
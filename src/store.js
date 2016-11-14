import Vue from 'vue'
import Vuex from 'vuex'
import Config from './config'
import Locales from './lang/locales'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		lang: Config.lang,
		height: window.innerHeight,
		width: window.innerWidth,
		animationState: 'enter',
		scrollTop: 0,
		scrollDirection: 'down',
		route: {
			name: 'home',
			title: 'Home'
		}
	},
	mutations: {
		lang(state, lang) {
			state.lang = lang
			Vue.config.lang = lang
			// Route change in store
			changeTitle(state, state.route.name)
		},
		route(state, routeName) {
			changeTitle(state, routeName)
		},
		animationState(state, animationState) {
			state.animationState = animationState
		},
		height(state, height) {
			state.height = height
		},
		width(state, width) {
			state.width = width
		},
		scrollTop(state, scrollTop) {
			state.scrollTop = scrollTop
		},
		scrollDirection(state, direction) {
			state.scrollDirection = direction
		}
	}
});

/**
 * Change the route attributes according to the language
 * 
 * @param  {Object} state
 * @param  {String} routeName
 * @return void
 */
function changeTitle(state, routeName) {
	state.route.name = routeName
	state.route.title = routeName
	if(routeName in Locales[state.lang]['nav'])
		state.route.title = Locales[state.lang]['nav'][routeName]
}

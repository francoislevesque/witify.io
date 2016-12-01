import store from '../store'

/** 
 * Actions to do on window resize
 */

var trigger = function() {
	store.commit('height', window.innerHeight)
	store.commit('width', window.innerWidth)
}

export default trigger
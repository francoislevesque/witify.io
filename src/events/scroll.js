import store from '../store'

/** 
 * Actions to do on scroll
 */

var trigger = function() {
	var st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > store.state.scrollTop)
		store.commit('scrollDirection', 'down')
	else
		store.commit('scrollDirection', 'up')

	store.commit('scrollTop', st)
}

export default trigger
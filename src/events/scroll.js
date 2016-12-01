import store from '../store'

/** 
 * Actions to do on scroll
 */

var trigger = function(scrollTop) {
	if (scrollTop > store.state.scrollTop)
		store.commit('scrollDirection', 'down')
	else
		store.commit('scrollDirection', 'up')

	store.commit('scrollTop', scrollTop)
}

export default trigger
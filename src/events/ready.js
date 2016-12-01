import LangSelector from '../lang/langSelector'
import Store from '../store'

/** 
 * Actions to do on page ready
 */

var trigger = function(route) {

	/** Check lang or redirect */
	new LangSelector(route)

	/** Force ScrollTop to 0 for scroll animations **/
	Store.commit('scrollTop', 0)

}


export default trigger
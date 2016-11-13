import LangSelector from '../lang/langSelector'

/** 
 * Actions to do on page ready
 */

var trigger = function(route) {

	/** Check lang or redirect */
	new LangSelector(route)

}


export default trigger
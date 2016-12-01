import Vue from 'vue/dist/vue.js'
import store from '../store'
import config from '../config'
import locales from './locales'
import database from '../database'

export default class langSelector {

	/**
	 * Validate the current Language. 
	 * This constructor is called on route change.
	 * 
	 * @param  {[type]} route [description]
	 * @return {[type]}       [description]
	 */
	constructor(route) {
		// If '/'
		if(route.params.lang === undefined) {
			window.location.href = '/' + config.lang
		} else {
			this.name = route.name
			this.params = route.params

			this.check()
		}
	}

	/**
	 * Validates the language 
	 * If success, returns the language,
	 * else, it redirects to a correct language
	 * 
	 * @param  {String} lang [language to check]
	 * @return {String}
	 */
	check() {
		if(this.hasLang()) {
	    	store.commit('lang', this.params.lang)
	    	
	    	// Check if project
	    	if(this.name == 'project')
		    	store.commit('route', database[this.params.project].name)
		    else
		    	store.commit('route', this.name)

	    	// Change Document title
	    	document.title = config.title + " | " + store.state.route.title
		}
	    else
	    	this.redirectToLang();
	}

	/**
	 * Check if the language exists in the locales
	 * 
	 * @param  {String} lang 
	 * @return {String}     
	 */
	hasLang() {
		for (var key in locales)
			if (locales.hasOwnProperty(key))
				if(key == this.params.lang)
					return true

		return false
	}

	/**
	 * Redirect to valid page with language
	 * 
	 * @return {[type]} [description]
	 */
	redirectToLang() {
		var browserLang = this.browser();
		if(browserLang)
			this.changeLangInUrl(browserLang);
		else
			this.changeLangInUrl(config.lang);
	}

	/**
	 * Check the Brower's language
	 * 
	 * @return {[type]} [description]
	 */
	browser() {
		if(this.hasLang(navigator.language || navigator.userLanguage))
			return navigator.language || navigator.userLanguage
		else
			return false;
	}

	/**
	 * Change the Language in the URL
	 * 
	 * @param  {[type]} lang [description]
	 * @return {[type]}      [description]
	 */
	changeLangInUrl(lang) {
		var newUrl = window.location.href + " "
		newUrl = newUrl.replace(this.params.lang, lang)
		window.location.href = newUrl
	}
}

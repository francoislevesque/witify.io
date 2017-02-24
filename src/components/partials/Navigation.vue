<template>
	<nav class="navigation">
		<transition name="slideUp">
			<div v-if="active" class="navigation-content">
	        	<div class="v-center t-center">
	        		<div class="container container-sm">
	        			<ul>
			                <!-- Nav Links -->
			                <li><router-link :to="'/' + $route.params.lang + '/projects'" exact>{{ $t("nav.projects") }}</router-link></li>
			                <li><router-link :to="'/' + $route.params.lang + '/about'" exact>{{ $t("nav.about") }}</router-link></li>
			                <li><router-link :to="'/' + $route.params.lang + '/careers'" exact>{{ $t("nav.career") }}</router-link></li>
			                <li><router-link :to="'/' + $route.params.lang + '/contact'" exact>{{ $t("nav.contact") }}</router-link></li>
							
							<!-- Lang Links -->
							<div class="lang" v-if="multiLang">
				                <li v-if="$route.params.lang == 'fr'"><router-link :to="{ path: pathTo('en') }">EN</router-link></li>
				                <li v-if="$route.params.lang == 'en'"><router-link :to="{ path: pathTo('fr') }">FR</router-link></li>
							</div>
			            </ul>
		        	</div>
	        	</div>
	        </div>
		</transition>
        <div class="navigation-header">
        	<div :class="{'inTransition' : inChange}" class="box title">
    			<div id="nav_title" class="v-center t-center">
    				<span class="content"> 
    					<router-link v-if="isProject" :to="'/' + $route.params.lang + '/projects'" exact>
    						<span class="nest">Projects</span>
    						<img :src="require('../../assets/img/icons/right-lg.svg')" alt="Right icon"> 
    					</router-link>
    					
						{{ title }}
    				</span>
    			</div>
    		</div>
    		<div class="menu box" @click="toggle()">
    			<div class="v-center t-center">
	        		<div class="menu-icon" :class="{'open': active}">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
    			</div>
    		</div><!--
    		--><transition name="fade">
    			<router-link :to="'/' + $route.params.lang + '/'"  class="logo box">
    			<div class="v-center t-center">
            		<img :src="require('../../assets/img/logo.svg')" alt="Witify Inc Logo">
    			</div>
            	</router-link>
            </transition>
        </div>
        
	</nav>
</template>

<script>
	import Config from '../../config'
	export default {
		data() {
			return {
				multiLang: Config.multiLang,
				active: false,
				inChange: false,
				title: '',
				isProject: false
			}
		},
		mounted() {
			this.title = this.$store.state.route.title
			if(this.$route.name == 'project') {
				this.isProject = true;
			}
		},
		methods: {
			toggle() {
				this.active = !this.active;
			},
			pathTo(lang) {
				var path = this.$route.path
				return '/' + lang + path.substring(path.substring(1).indexOf("/") + 1)
			}
		},
		watch: {
			// Listen for title changes
			'$store.state.route.title': function(to, from) {
				this.inChange = true
				this.active = false
				var vm = this
				setTimeout(function() {
					vm.inChange = false
					vm.title = to
					vm.isProject = vm.$route.name == 'project'
				}, 300)
			},
			// Listen for lang changes
			'$store.state.lang': function(to, from) {
				this.inChange = true
				this.active = false
				var vm = this
				setTimeout(function() {
					vm.inChange = false
					vm.title = vm.$store.state.route.title
					vm.isProject = vm.$route.name == 'project'
				}, 300)
			}
		}
	}
</script>
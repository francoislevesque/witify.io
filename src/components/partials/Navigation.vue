<template>
	<nav class="navigation">
		<transition name="slideUp">
			<div v-if="active" class="navigation-content">
	        	<div class="v-center t-center">
	        		<div class="container container-sm">
	        			<ul>
			                <!-- Nav Links -->
			                <li><router-link :to="'/' + $route.params.lang + '/'" exact>{{ $t("nav.home") }}</router-link></li>
			                <li><router-link :to="'/' + $route.params.lang + '/about'" exact>{{ $t("nav.about") }}</router-link></li>
			                <li><router-link :to="'/' + $route.params.lang + '/contact'" exact>{{ $t("nav.contact") }}</router-link></li>
							
							<!-- Lang Links -->
							<template v-if="multiLang">
				                <li v-if="$route.params.lang == 'fr'"><router-link :to="{ path: pathTo('en') }">EN</router-link></li>
				                <li v-if="$route.params.lang == 'en'"><router-link :to="{ path: pathTo('fr') }">FR</router-link></li>
							</template>
			            </ul>
		        	</div>
	        	</div>
	        </div>
		</transition>
        <div class="navigation-header">
    		<router-link :to="'/' + $route.params.lang + '/'"  class="logo box">
    			<div class="v-center t-center">
            		<img src="../../assets/img/logo.svg" alt="Witify Inc Logo">
    			</div>
            </router-link><!--
    		--><div class="menu box" @click="toggle()">
    			<div class="v-center t-center">
	        		<div class="menu-icon" :class="{'open': active}">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
    			</div>
    		</div>
        </div>
        
	</nav>
</template>

<script>
	import Config from '../../config'
	export default {
		data() {
			return {
				multiLang: Config.multiLang,
				active: false
			}
		},
		watch: {
			'$route': function (to, from) {
				this.active = false;
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
		}
	}
</script>
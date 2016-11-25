<template>
	<div class="lightbox">
		<div class="controls">
			<div class="prev" @click="prev()">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 284.935 284.936" style="enable-background:new 0 0 284.935 284.936;" xml:space="preserve">
				<g>
					<path d="M110.488,142.468L222.694,30.264c1.902-1.903,2.854-4.093,2.854-6.567c0-2.474-0.951-4.664-2.854-6.563L208.417,2.857   C206.513,0.955,204.324,0,201.856,0c-2.475,0-4.664,0.955-6.567,2.857L62.24,135.9c-1.903,1.903-2.852,4.093-2.852,6.567   c0,2.475,0.949,4.664,2.852,6.567l133.042,133.043c1.906,1.906,4.097,2.857,6.571,2.857c2.471,0,4.66-0.951,6.563-2.857   l14.277-14.267c1.902-1.903,2.851-4.094,2.851-6.57c0-2.472-0.948-4.661-2.851-6.564L110.488,142.468z" fill="#333333"/>
				</g>
				</svg>
			</div>
			<div class="next" @click="next()">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 284.935 284.936" style="enable-background:new 0 0 284.935 284.936;" xml:space="preserve">
				<g>
					<path d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133   c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677   c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854   c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z" fill="#333333"/>
				</g>
				</svg>
			</div>
			<div class="close" @click="close()">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
					<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   " fill="#ffffff"/>
				</svg>
			</div>
		</div>
		<div v-show="ready" class="container">
			<transition-group name="slideLeftRight" mode="out-in">
				<div v-if="index == $parent.slideNumber" :key="index" class="slide" v-for="(item, key, index) in items">
					<div class="scroll_content">
						<div class="img-container">
							<!-- Vimeo -->
							<div v-if="key == 'video'">
								<iframe class="video" :src="item.url + '?color=333333&title=0&byline=0&portrait=0'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
							</div>
							<!-- Images -->
							<div v-else>
								<img :src="require('../../assets/img/projects/' + 'elium' + '/' + item)" alt="elium">
							</div>
						</div>
					</div>
				</div>
			</transition-group>
		</div>
		<div class="close-zone" @click="close()"></div>
	</div>
</template>

<script>
	export default {
		props: ['items'],
		data() {
			return {
				ready: false
			}
		},
		mounted() {
			this.ready = true
        	var vm = this;
	        document.onkeydown = function(e) {
	            if(e.keyCode == '37')
	                vm.prev()
	            if(e.keyCode == '39')
	                vm.next()
	        }
		},
		methods: {
			prev() {
				if(this.$parent.slideNumber != 0)
					this.$parent.slideNumber--
			},
			next() {
				if(this.$parent.slideNumber != Object.keys(this.items).length - 1)
					this.$parent.slideNumber++
			},
			close() {
				this.$parent.active = false
				this.$parent.slideNumber = undefined
			}
		}
	}

</script>
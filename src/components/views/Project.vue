<template>
	<div class="page">
		<div class="project" :class="'color-' + $route.params.project">
			<v-fullpage>
				<div id="scroll_content" class="scroll_content" @scroll="scroll()">
					<div class="hero">
						<div class="bg" :class="name" :style="{opacity: bgOpacity()}"></div>
						<div class="v-center">
							<div class="content">
								<div class="container">
									<div class="title white container-xs" :class="{'d-center t-center': name == 'occ'}">
										<v-scroll animation="slideUp">
											<h1>{{ $t('projects.' + name + '.title') }}</h1>
											<span>{{ $t('projects.' + name + '.subtitle') }}</span>
										</v-scroll>
									</div>
								</div>
							</div>
						</div>
						<div class="scroll-down" @click="scrollTopDescription()">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve">
								<path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" fill="#FFFFFF"/>
							</svg>
						</div>
					</div>
					<div class="section" id="project-description">
						<div class="container">
							<div class="sub-section">
								<div class="row">
									<div class="col-md-8">
										<v-scroll animation="slideUp">
											<h2>{{ project.name }} - {{ $t('categories.' + project.category) }}</h2>
										</v-scroll>
										<v-scroll animation="slideUp" delay="100">
											<div v-html="$t('projects.' + name + '.description')"></div>
										</v-scroll>
										<v-scroll animation="slideUp" delay="200">
										<a :href="project.url" class="link tm-md">{{ $t('visit_website') }} <img :src="require('../../assets/img/icons/right-arrow.svg')" alt="Right arrow"></a>
										</v-scroll>
									</div>
								</div>
							</div>
							<div class="sub-section">
								<div class="row">
									<v-scroll animation="slideUp">
									<div class="col-sm-4">
										<h3>{{ $t('projects.client') }}</h3>
										<p>{{ project.client }}</p>
									</div>
									</v-scroll>
									<v-scroll animation="slideUp" delay="100">
									<div class="col-sm-4">
										<h3>{{ $t('projects.dev_time') }}</h3>
										<p>{{ project.dev_time }} {{ $t('projects.months') }}</p>
									</div>
									</v-scroll>
									<v-scroll animation="slideUp" delay="200">
									<div class="col-sm-4">
										<h3>{{ $t('projects.deliverables') }}</h3>
										<p>
											<span v-for="(deliverable, key) in project.deliverables">
											{{ $t('deliverables.' + deliverable) }} <br>
											</span>
										</p>
									</div>
									</v-scroll>
								</div>
							</div>
							<div class="sub-section">
								<v-scroll animation="slideUp">
									<h3>{{ $t('projects.technologies') }}</h3>
								</v-scroll>
								<v-scroll animation="slideUp" delay="100">
								<div class="technologies">
									<img v-for="technology in project.technologies" :src="require('../../assets/img/technologies/' + technology + '.svg')" :alt="technology + 'Logo'">
								</div>
								</v-scroll>
							</div>

							<div class="sub-section">
								<h3 class="">{{ $t('projects.gallery') }}</h3>
								<gallery :projectName="$route.params.project" :items="project.gallery"></gallery>
							</div>
						</div>
					</div>
				</div>
			</v-fullpage>
		</div>
	</div>
	
</template>

<script>
	import database from '../../database'
	import Scroll from '../../events/scroll'
	import Gallery from '../partials/Gallery.vue'
	import Velocity from 'velocity-animate'

	export default {
		components: {
			'gallery': Gallery
		},
		data() {
			return {
				scrollPosition: 0,
				name: this.$route.params.project,
				project: database[this.$route.params.project],
				currentOpacityValue: 1
			}
		},
		methods: {
			scroll() {
				Scroll(document.getElementById('scroll_content').scrollTop)
			},
			scrollTopDescription() {
				Velocity(document.getElementById('project-description'), "scroll", {offset: '1px', easing: "easeOutQuint", duration: "600", container: document.getElementById('scroll_content')});
			},
			bgOpacity() {/*
				var newOpacityValue = 1 - (this.$store.state.scrollTop / this.$store.state.height)
				if(Math.abs(this.currentOpacityValue - newOpacityValue) > 0.2)
					return newOpacityValue
				else
					return this.currentOpacityValue*/
				return 1
			}
		}
	}
</script>
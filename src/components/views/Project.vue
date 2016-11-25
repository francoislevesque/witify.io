<template>
	<div class="page">
		<div class="project" :class="'color-' + $route.params.project">
			<v-fullpage>
				<div id="scroll_content" class="scroll_content">
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
					</div>
					<div class="section">
						<div class="container">
							<div class="sub-section text">
								<v-scroll animation="slideUp">
								<h2>{{ project.name }} - {{ $t('categories.' + project.category) }}</h2>
								<div v-html="$t('projects.' + name + '.description')"></div>
								</v-scroll>
							</div>
							<div class="sub-section">
								<div class="row">
									<v-scroll animation="slideUp">
									<div class="col-sm-4">
										<h3>{{ $t('projects.client') }}</h3>
										<p>{{ project.client }}</p>
									</div>
									</v-scroll>
									<v-scroll animation="slideUp">
									<div class="col-sm-4">
										<h3>{{ $t('projects.dev_time') }}</h3>
										<p>{{ project.dev_time }} {{ $t('projects.months') }}</p>
									</div>
									</v-scroll>
									<v-scroll animation="slideUp">
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
								<div class="technologies">
									<img v-for="technology in project.technologies" :src="require('../../assets/img/technologies/' + technology + '.svg')" :alt="technology + 'Logo'">
								</div>
								</v-scroll>
							</div>

							<div class="sub-section">
								<h3 class="">{{ $t('projects.gallery') }}</h3>
								<gallery :items="project.gallery"></gallery>
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
		mounted() {
			document.getElementById('scroll_content').addEventListener('scroll', this.scroll)
		},
		remove() {
			document.getElementById('scroll_content').removeEventListener('scroll', this.scroll)
			$off()
		},
		methods: {
			scroll() {
				Scroll(document.getElementById('scroll_content').scrollTop)
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
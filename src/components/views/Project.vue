<template>
	<div class="page">
		<div class="project" :class="'color-' + $route.params.project">
			<v-fullpage>
				<div id="scroll_content" class="scroll_content" v-on:scroll="scroll">
					<div class="hero">
						<div class="bg" 
						:style="{
                            backgroundImage: 'url(/src/assets/img/projects/' + name + '/bg.jpg)'
                        }"></div>
						<div class="v-center">
							<div class="content">
								<div class="container">
									<div class="title white container-xs" :class="{'d-center t-center': name == 'occ'}">
										<v-scroll animation="slideUp">
											<h1>{{ $t('projects.' + name + '.title') }}</h1>
										</v-scroll>
										<v-scroll animation="slideUp">
											<span>{{ $t('projects.' + name + '.subtitle') }}</span>
										</v-scroll>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section">
						<div class="container">
							<div class="sub-section">
								<h2>{{ project.name }} - {{ $t('categories.' + project.category) }}</h2>
								<p>{{ $t('projects.' + name + '.description') }}</p>
							</div>
							<div class="sub-section">
								<div class="row">
									<div class="col-sm-4">
										<h3>{{ $t('projects.client') }}</h3>
										<p>{{ project.client }}</p>
									</div>
									<div class="col-sm-4">
										<h3>{{ $t('projects.dev_time') }}</h3>
										<p>{{ project.dev_time }} {{ $t('projects.months') }}</p>
									</div>
									<div class="col-sm-4">
										<h3>{{ $t('projects.deliverables') }}</h3>
										<p>
											<span v-for="(deliverable, key) in project.deliverables">
											{{ $t('deliverables.' + deliverable) }} <br>
											</span>
										</p>
									</div>
								</div>
							</div>
							<div class="sub-section">
								<h3>{{ $t('projects.technologies') }}</h3>
								<div class="technologies">
									<img v-for="technology in project.technologies" :src="require('../../assets/img/technologies/' + technology + '.svg')" :alt="technology + 'Logo'">
								</div>
							</div>

							<div class="sub-section">
								<h3 class="">{{ $t('projects.gallery') }}</h3>
								<div v-for="picture in project.gallery" class="sub-section">
									<img :src="require('../../assets/img/projects/' + name + '/' + picture)" :alt="name">
								</div>
								<div class="sub-section">
									<div class="video-container">
										<iframe class="video" src="https://player.vimeo.com/video/184901788?color=333333&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
									</div>
								</div>
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
	export default {
		data() {
			return {
				scrollPosition: 0,
				name: this.$route.params.project,
				project: database[this.$route.params.project]
			}
		},
		methods: {
			scroll() {
				if(document.getElementById('scroll_content').scrollTop > this.scrollPosition + 200 
				|| document.getElementById('scroll_content').scrollTop < this.scrollPosition - 200 )
					this.scrollPosition = document.getElementById('scroll_content').scrollTop
			}
		}
	}
</script>
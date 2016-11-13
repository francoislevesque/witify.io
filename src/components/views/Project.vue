<template>
	<div class="page">
		<div class="project" :class="'color-' + $route.params.project">
			<v-fullpage>
				<div id="scroll_content" class="scroll_content" v-on:scroll="scroll">
					<div class="hero">
						<div class="bg" :class="'bg-' + $route.params.project"></div>
						<div class="v-center">
							<div class="content">
								<div class="container">
									<div class="title white container-xs" :class="{'d-center t-center': $route.params.project == 2}">
										<v-scroll animation="slideUp">
											<h1>Elium {{ $route.params.project }}</h1>
										</v-scroll>
										<v-scroll animation="slideUp">
											<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
										</v-scroll>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section">
						<div class="container">
							<div class="sub-section">
								<h2>Elium Web application</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolores, expedita culpa sit voluptates dolorum quidem nemo qui laudantium, dolorem saepe voluptatum? Deserunt quidem et, nisi exercitationem qui quasi nihil? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores magnam, ullam, distinctio commodi officiis impedit. Fuga ab illum accusamus omnis, consequatur eligendi laboriosam ullam, eaque dignissimos expedita libero. Minus, sequi.</p>
							</div>
							<div class="sub-section">
								<div class="row">
									<div class="col-sm-4">
										<h3>Client</h3>
										<p>Elium Inc</p>
									</div>
									<div class="col-sm-4">
										<h3>Deliverable</h3>
										<p>Web application</p>
									</div>
									<div class="col-sm-4">
										<h3>Development time</h3>
										<p>4 weeks</p>
									</div>
								</div>
							</div>
							<div class="sub-section">
								<h3>Used technologies</h3>
								<div class="technologies">
									<img :src="require('../../assets/img/technologies/laravel.svg')" alt="Laravel Logo">
									<img :src="require('../../assets/img/technologies/vue.svg')" alt="Vue Logo">
									<img :src="require('../../assets/img/technologies/stripe.svg')" alt="Vue Logo">
									<img :src="require('../../assets/img/technologies/nodejs.svg')" alt="Node Logo">
									<img :src="require('../../assets/img/technologies/webpack.svg')" alt="Webpack Logo">
									<img :src="require('../../assets/img/technologies/sass.svg')" alt="Sass Logo">
									<img :src="require('../../assets/img/technologies/git.svg')" alt="Git Logo">
									<img :src="require('../../assets/img/technologies/digitalocean.svg')" alt="Digital Ocean Logo">
								</div>
							</div>

							<div class="sub-section">
								<h3 class="">Gallery</h3>
								<div class="sub-section">
									<img src="../../assets/img/projects/elium/branding.png" alt="Elium Branding">
								</div>
								<div class="sub-section">
									<div class="video-container">
										<iframe class="video" src="https://player.vimeo.com/video/184901788?color=333333&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
									</div>
								</div>
								<div class="sub-section">
									<img src="../../assets/img/projects/elium/page_1.png" alt="Elium First Page Website">
								</div>
								<div class="sub-section">
									<img src="../../assets/img/projects/elium/page_2.png" alt="Elium Client dashboard Page Website">
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
	export default {
		data() {
			return {
				scrollPosition: 0
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
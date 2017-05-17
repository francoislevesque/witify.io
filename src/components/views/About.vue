<template>
	<div class="page about">
		<v-fullpage>
			<div id="scroll_content" class="scroll_content" @scroll="scroll()">
				<div class="section dark big" style="background-image: url('/src/assets/img/about/banner.jpg')" alt="Witify desk">
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<v-scroll animation="slideRight">
								<h1>{{ $t('about.title') }}</h1>
								<p class="main">{{ $t('about.subtitle') }}</p>
								</v-scroll>
							</div>
						</div>
					</div>
				</div>
				<div class="section clients">
					<div class="container">
						<div>
							<div class="client">
								<img :src="require('../../assets/img/clients/jussaume.png')" alt="Mobilier Jussaume">
							</div><!--
							--><div class="client">
								<img :src="require('../../assets/img/clients/poly.png')" alt="Polytechnique Montréal">
							</div><!--
							--><div class="client">
								<img :src="require('../../assets/img/clients/mcc.png')" alt="Ministre de la culture">
							</div><!--
							--><div class="client">
								<img :src="require('../../assets/img/clients/brio.png')" alt="Brioconcept Inc">
							</div><!--
							--><div class="client">
								<img :src="require('../../assets/img/clients/bromont.png')" alt="Municipalité de Bromont">
							</div>
						</div>
					</div>
				</div>
				<div class="section no-padding">
					<div class="container">
						<div class="sub-section">
							<div class="text-image">
								<div class="text">
									<v-scroll animation="slideUp">
									<h2>{{ $t('about.experience.title') }}</h2>
									<p>{{ $t('about.experience.subtitle') }}</p>
									</v-scroll>
								</div>
								<div class="image">
									<v-scroll :style="{'height': '600px'}" animation="scale">
									<img :src="require('../../assets/img/about/experience.png')" alt="user experience">
									</v-scroll>
								</div>
							</div>
						</div>
						<div class="sub-section">
							<v-scroll animation="slideRight">
							<div class="container-sm">
								<h2>{{ $t('about.speed.title') }}</h2>
								<p>{{ $t('about.speed.subtitle') }}</p>
								<div class="stat">
									<span class="label">Temps de développement moyen</span>
									<span class="info">Entre 3 et 8 semaines</span>
								</div>
							</div>
							</v-scroll>
						</div>
						<div class="sub-section">
							<div class="text-image">
								<div class="text">
									<v-scroll animation="slideUp">
									<h2>{{ $t('about.marketing.title') }}</h2>
									<p>{{ $t('about.marketing.subtitle') }}</p>
									</v-scroll>
								</div>
								<div class="image">
									<v-scroll :style="{'height': '600px'}" animation="scale">
									<img :src="require('../../assets/img/about/marketing.png')" alt="marketing">
									</v-scroll>
								</div>
							</div>
						</div>
						<div class="sub-section">
							<div class="text-image">
								<div class="text">
									<v-scroll animation="slideUp">
									<h2>{{ $t('about.communication.title') }}</h2>
									<p>{{ $t('about.communication.subtitle') }}</p>
									</v-scroll>
								</div>
								<div class="image">
									<v-scroll :style="{'height': '600px'}" animation="scale">
									<img :src="require('../../assets/img/about/communications.png')" alt="Communication">
									</v-scroll>
								</div>
							</div>
						</div>
						<div class="sub-section">
							<div class="text-image">
								<div class="text">
									<v-scroll animation="slideUp">
									<h2>{{ $t('about.technologies.title') }}</h2>
									<p>{{ $t('about.technologies.subtitle') }}</p>
									</v-scroll>
								</div>
								<div class="image">
									<v-scroll :style="{'height': '600px'}" animation="scale">
									<img :src="require('../../assets/img/about/techs.png')" alt="Technologies">
									</v-scroll>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="section dark">
					<div class="container">
						<div class="container-sm">
							<v-scroll animation="slideUp">
							<div class="title">
								<h2>{{ $t('about.cta.title') }}</h2>
							</div>
							<p>{{ $t('about.cta.subtitle') }}</p>
							</v-scroll>
							<v-scroll animation="slideUp" delay="100">
		                	<router-link :to="'/' + $route.params.lang + '/contact'" class="btn btn-primary">{{ $t("about.cta.link") }}</router-link>
							</v-scroll>
						</div>
					</div>
				</div>
			</div>
		</v-fullpage>
	</div>
</template>

<script>
	import Scroll from '../../events/scroll'
	export default {
		methods: {
			scroll() {
				Scroll(document.getElementById('scroll_content').scrollTop)
			},
		}
	}
</script>
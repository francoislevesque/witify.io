<template>
	<div class="page career-page">
		<v-fullpage>
			<div id="scroll_content" class="scroll_content" @scroll="scroll()">
				<div class="section container">
					<div class="row">
						<div class="col-md-6">
							<v-scroll animation="slideRight">
								<h1>{{ career.title }}</h1>
								<p class="main">{{ career.subtitle }}</p>
							</v-scroll>

							<v-scroll animation="slideLeft">
								<p>{{ career.opening }}</p>
							</v-scroll>
						</div>
					</div>
				</div>
				<div class="section">
					<div class="container">
						<div class="row">
							<div class="col-md-6 sub-section">
								<v-scroll animation="slideLeft">
								<div class="title">
									<h2>Votre Mission</h2>
								</div>
								</v-scroll>
								<v-scroll animation="slideUp">
								<ul>
									<li v-for="mission in career.content.mission">{{ mission }}</li>
								</ul>
								</v-scroll>
							</div>
							<div class="col-md-6 sub-section">
								<v-scroll animation="slideLeft">
								<div class="title">
									<h2>Compétences requises</h2>
								</div>
								</v-scroll>
								<v-scroll animation="slideUp">
								<ul>
									<li v-for="skill in career.content.skills">{{ skill }}</li>
								</ul>
								</v-scroll>
							</div>
							<div class="clearfix"></div>
							<div class="col-md-6 sub-section">
								<v-scroll animation="slideLeft">
								<div class="title">
									<h2>Atouts</h2>
								</div>
								</v-scroll>
								<v-scroll animation="slideUp">
								<ul>
									<li v-for="asset in career.content.assets">{{ asset }}</li>
								</ul>
								</v-scroll>
							</div>
						</div>
					</div>
				</div>
				<div class="section container">
					<div class="container-sm">
						<div class="title">
							<h2>Comment appliquer</h2>
						</div>
						<p>Présentez nous votre portfolio mis à jour et votre CV et envoyez-nous le tout à {{ config.emails[0] }}. À bientôt!</p>
					</div>
				</div>
				<div class="section"></div>
			</div>
		</v-fullpage>
	</div>
</template>

<script>

import careers from '../../careers.js'
import config from '../../config.js'
import Scroll from '../../events/scroll'

export default {
	data() {
		return {
			career: careers[this.$route.params.career],
			config: config
		}
	},
	methods: {
		scroll() {
			Scroll(document.getElementById('scroll_content').scrollTop)
		},
	}
}
</script>
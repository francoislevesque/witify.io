<template>
	<div class="page home">
		<v-fullpage class="v-center t-center">
			<div id="bg"></div>
			<div class="section">
				<div class="container container-sm">
					<router-link :to="'/' + $route.params.lang + '/projects'" class="project-link">
					<div v-on:mouseover="onProjectLink = true" v-on:mouseout="onProjectLink = false" class="home-title">
						<v-scroll animation="fade">
						<div class="title">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 420.5 360.2" style="enable-background:new 0 0 420.5 360.2;" xml:space="preserve" width="200"><path fill="#333333" d="M152.9,360.2L0,0h152.4l57.8,136.2L268.1,0h37.7l-76.7,180.7l38.5,90.7L382.8,0h37.7L267.6,360.2l-57.4-135.2L152.9,360.2z
							 M52.4,34.7l100.5,236.7l38.5-90.7l-61.9-146H52.4z"></path></svg>
							<h1>{{ $t('home.title') }}</h1>
							<span>{{ $t('home.subtitle') }}</span>
						</div>
						<div class="text">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae velit amet iste veritatis nihil ex explicabo, a sunt odit nostrum, modi quis ipsum, et sit commodi, reiciendis labore qui architecto.</p>
						</div>
						<router-link :to="'/' + $route.params.lang + '/projects'" class="project-link">Visit projects</router-link>
						</v-scroll>
					</div>
					</router-link>
				</div>
			</div>
			<div class="footer">
				
			</div>
		</v-fullpage>
	</div>
</template>

<script>

export default {
	data() {
		return {
			onProjectLink: false,
			separation: 100,
			scale: 1,
			speed: 1,
			animationFrameId: 0
		}
	},
	mounted() {
		
	},
	destroyed() {
		
	}
}
</script>
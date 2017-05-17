<template>
	<div class="page home">
		<v-fullpage class="v-center t-center">
			<canvas id="bg"></canvas>
			<div class="container container-sm">
				<div v-on:mouseover="onProjectLink = true" v-on:mouseout="onProjectLink = false" class="home-title">
					<div class="title">
						<v-scroll animation="scale">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 420.5 360.2" style="enable-background:new 0 0 420.5 360.2;" xml:space="preserve" width="200"><path fill="#333333" d="M152.9,360.2L0,0h152.4l57.8,136.2L268.1,0h37.7l-76.7,180.7l38.5,90.7L382.8,0h37.7L267.6,360.2l-57.4-135.2L152.9,360.2z
							 M52.4,34.7l100.5,236.7l38.5-90.7l-61.9-146H52.4z"></path></svg>
						</v-scroll>
						<v-scroll animation="fade">
							<h1>{{ $t('home.title') }}</h1>
							<span>{{ $t('home.subtitle') }}</span>
						</v-scroll>
					</div>
					<v-scroll animation="scale">
						<router-link :to="'/' + $route.params.lang + '/projects'" class="link">{{ $t('home.btn') }} <img :src="require('../../assets/img/icons/right-arrow.svg')" alt="Right arrow"></router-link>
					</v-scroll>
				</div>
			</div>
		</v-fullpage>
	</div>
</template>

<script>

import Store from '../../store.js';
import TWEEN from 'tween.js';

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
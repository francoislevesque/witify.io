<template>
	<div class="page home">
		<v-fullpage class="v-center t-center">
			<div class="section">
				<div class="container container-sm">
					<v-scroll animation="fade">
						<div class="title">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								 viewBox="0 0 420.5 360.2" style="enable-background:new 0 0 420.5 360.2;" xml:space="preserve" width="200">
								<path fill="#444444" d="M152.9,360.2L0,0h152.4l57.8,136.2L268.1,0h37.7l-76.7,180.7l38.5,90.7L382.8,0h37.7L267.6,360.2l-57.4-135.2L152.9,360.2z
								 M52.4,34.7l100.5,236.7l38.5-90.7l-61.9-146H52.4z"/>
							</svg><br>
						</div>
					</v-scroll>
					<v-scroll animation="fade">
					<div class="title">
						<h1>Witify</h1>
						<span>{{ $t('about.subtitle') }}</span>
					</div>
					</v-scroll>
					<v-scroll animation="slideUp" delay="100">
					<router-link :to="'/' + $route.params.lang + '/projects'" exact class="btn">{{ $t("nav.projects") }}</router-link>
					</v-scroll>
					<v-scroll animation="slideUp" delay="200">
					<router-link :to="'/' + $route.params.lang + '/contact'" exact class="btn btn-black">{{ $t("nav.contact") }}</router-link>
					</v-scroll>
				</div>
			</div>
		</v-fullpage>
	</div>
</template>

<script>
export default {

}
</script>
<template>
	<div class="page home">
		<v-fullpage class="v-center t-center">
			<v-scroll animation="slideUp">
				<div class="title">
					<h1>Witify Studio</h1>
					<span>Les artisans du web</span>
				</div>
			</v-scroll>
			<router-link :to="'/' + $route.params.lang + '/projects'" exact class="btn">{{ $t("nav.projects") }}</router-link>
		</v-fullpage>
	</div>
</template>

<script>
export default {

}
</script>
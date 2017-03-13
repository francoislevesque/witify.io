<template>
	<div class="page">
		<v-fullpage>
			<div id="scroll_content" class="scroll_content" @scroll="scroll()">
				<div class="section">
					<div class="container">
						<div class="container-sm">
							<v-scroll animation="slideRight">
							<div class="title">
								<h1>{{ $t('careers.title') }}</h1>
								<span class="main">{{ $t('careers.subtitle') }}</span>
							</div>
							</v-scroll>
							
							<v-scroll animation="slideUp">
							<div class="careers">
								<template v-for="(career, key) in careers">
									<router-link :to="'/' + $route.params.lang + '/career/' + key" class="career">
										<span class="title">{{ career.title }}</span>
									</router-link>
								</template>
							</div>
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
import careers from '../../careers'

export default {
	data() {
		return {
			careers: careers,
			Scroll: Scroll
		}
	},
	methods: {
		scroll() {
			Scroll(document.getElementById('scroll_content').scrollTop)
		},
	}
}
</script>
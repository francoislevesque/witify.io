<template>
	<transition name="fade">
		<div v-show="!pageLoaded">
			<div id="loading">
				<div class="spinner">
			        <div class="dot1"></div>
			        <div class="dot2"></div>
			    </div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				pageLoaded: false
			}
		},
		mounted() {
			this.pageLoaded = true;
		}
	}
</script>

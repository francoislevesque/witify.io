<template>
	<div class="fullpage" :style="{'height': this.$store.state.height + 'px'}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navHeight: 60,
			}
		}
	}
</script>
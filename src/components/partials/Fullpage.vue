<template>
	<div class="fullpage">
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
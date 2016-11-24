<template>
	<div class="lightbox">
		<div class="controls">
			<div class="prev" @click="prev()">Prev</div>
			<div class="prev" @click="next()">Next</div>
			<div class="prev" @click="close()">Close</div>
		</div>
		<div v-show="ready" class="container">
			<transition-group name="slideLeftRight" mode="out-in">
				<div v-if="key == $parent.slideNumber" :key="key" class="slide" v-for="(item, key) in items">
					<div class="slide-content">
						<img :src="require('../../assets/img/projects/' + 'elium' + '/' + item)" alt="elium">
					</div>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['items'],
		data() {
			return {
				ready: false
			}
		},
		mounted() {
			this.ready = true
		},
		methods: {
			prev() {
				if(this.$parent.slideNumber != 0)
					this.$parent.slideNumber--
			},
			next() {
				if(this.$parent.slideNumber != Object.keys(this.items).length - 1)
					this.$parent.slideNumber++
			},
			close() {
				this.$parent.active = false
				this.$parent.slideNumber = undefined
			}
		}
	}

</script>
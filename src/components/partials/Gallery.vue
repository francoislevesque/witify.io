<template>
	<div>
		<transition name="fade">
			<lightbox v-show="active" :active="active" :items="items" :slideNumber="slideNumber"></lightbox>
		</transition>
		<div class="gallery">
			<div class="content">
				<div 
				v-for="(item, key) in items" 
				class="item" 
				@click="showItem(key)">
					<div class="item-content">
						<img :src="require('../../assets/img/projects/' + 'elium' + '/' + item)" alt="elium">
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
import Lightbox from './Lightbox.vue'

export default {
	props: ['items'],
	components: {
		'lightbox': Lightbox
	},
	data() {
		return {
			slideNumber: undefined,
			active: false,
		}
	},
	mounted() {
	},
	methods: {
		showItem(itemIndex) {
			this.slideNumber = itemIndex
			this.active = true
		}
	}
}
</script>
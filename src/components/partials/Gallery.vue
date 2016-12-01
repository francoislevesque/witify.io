<template>
	<div>
		<transition name="fade">
			<lightbox v-show="active" :projectName="projectName" :active="active" :items="items" :slideNumber="slideNumber"></lightbox>
		</transition>
		<div class="gallery">
			<div class="content">
				<div 
				v-for="(item, key, index) in items" 
				class="item" 
				@click="showItem(index)">
					<div class="item-content">
						<!-- Vimeo -->
						<div v-if="key == 'video'">
							<img :src="require('../../assets/img/projects/' + projectName + '/' + item.poster)" alt="elium">
						</div>
						<!-- Images -->
						<div v-else>
							<img :src="require('../../assets/img/projects/' + projectName + '/' + item)" alt="elium">
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
import Lightbox from './Lightbox.vue'

export default {
	props: ['projectName', 'items'],
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
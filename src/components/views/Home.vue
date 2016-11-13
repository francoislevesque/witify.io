<template>
    <div class="page">
        <div class="project-carousel">
            <v-fullpage>
                <div id="projects" :style="{width: 4*($store.state.width/3) + $store.state.width + 'px', transform: 'translateX(' + translation() + 'px)'}" :class="{'leave': onLeave}">
                    <div class="project" 
                        v-for="n in 4"  
                        @click="goToProjectPage(n)"
                        :id="'project-' + n"
                        :style="{width: projectWidth(n) + 'px'}"
                        :class="'color-' + n">
                        <div class="bg" :class="'bg-' + n"></div>
                        <div class="content">
                            <v-scroll animation="slideUp">
                            <h2>Stimuler les ventes {{ n }}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit laudantium vero.</p>
                            <span>Maison Neue</span>
                            </v-scroll>
                        </div>
                    </div>
                </div>
                <div class="left" @click="previous()">
                    <img :src="require('../../assets/img/icons/left.svg')" alt="Left Button">
                </div>
                <div class="right" @click="next()">
                    <img :src="require('../../assets/img/icons/right.svg')" alt="Right Button">
                </div>
            </v-fullpage>
        </div>
    </div>
</template>

<script>

import Velocity from 'velocity-animate'

export default {
    mounted() {
        var vm = this;
        document.onkeydown = function(e) {
            if(e.keyCode == '37')
                vm.previous()
            if(e.keyCode == '39')
                vm.next()
        }
    },
    data() {
        return {
            firstSlide: 1,
            onLeave: 0,
        }
    },
    methods: {
        goToProjectPage(project_id) {
            
            var time = 300
            if(this.firstSlide == project_id - 1)
                time = 0
            
            this.firstSlide = project_id - 1

            var vm = this;
            setTimeout(function() {
                vm.onLeave = 1
            }, time)

            this.onLeave = 1
            setTimeout(function() {
                vm.changeRoute(project_id)
            }, time)
        },
        changeRoute(project_id) {
            this.$router.push({
                name: 'project',
                params: {
                    lang: this.$store.state.lang, 
                    project: project_id
                } 
            })
        },
        next() {
            if(this.firstSlide != 4 - 2)
                this.firstSlide = this.firstSlide + 1
        },
        previous() {
            if(this.firstSlide != 1)
                this.firstSlide = this.firstSlide - 1
        },
        translation() {
            return - this.$store.state.width/3 * (this.firstSlide - 1)
        },
        projectWidth(project_id) {
            return this.$store.state.width/3
        }
    }
}
</script>
<template>
    <div class="page">
        <div class="project-carousel">
            <v-fullpage>
                <div id="projects" 
                    :class="{'leave': onLeave}"
                    :style="{
                        width: nProjects*($store.state.width/3) + $store.state.width + 'px',
                        transform: 'translateX(' + translation() + 'px)'
                    }">
                    <div class="project" 
                        v-for="(project, key, index) in projects"  
                        @click="goToProjectPage(index, key)"
                        :id="'project-' + key"
                        :style="{
                            width: projectWidth(key) + 'px'
                        }">
                        <div class="bg" 
                            :style="{
                                backgroundImage: 'url(~../../src/assets/img/projects/' + key + '/bg.jpg)'
                            }"></div>
                        <div class="content">
                            <v-scroll animation="slideUp">
                            <h2>{{ $t('projects.' + key + '.title') }}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit laudantium vero.</p>
                            <span>{{ project.name }}</span>
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
import database from '../../database'

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
            firstSlide: 0,
            onLeave: 0,
            nProjects: Object.keys(database).length,
            projects: database
        }
    },
    methods: {
        goToProjectPage(index, project_name) {
            
            var time = 300
            if(this.firstSlide == index - 1)
                time = 0
            
            this.firstSlide = index - 1

            var vm = this;
            setTimeout(function() {
                vm.onLeave = 1
            }, time)

            this.onLeave = 1
            setTimeout(function() {
                vm.changeRoute(project_name)
            }, time)
        },
        changeRoute(project_name) {
            this.$router.push({
                name: 'project',
                params: {
                    lang: this.$store.state.lang, 
                    project: project_name
                } 
            })
        },
        next() {
            if(this.firstSlide != this.nProjects - 3)
                this.firstSlide = this.firstSlide + 1
        },
        previous() {
            if(this.firstSlide != 0)
                this.firstSlide = this.firstSlide - 1
        },
        translation() {
            return - this.$store.state.width/3 * (this.firstSlide)
        },
        projectWidth(project_id) {
            return this.$store.state.width/3
        }
    }
}
</script>
<template>
    <div id="page" class="page" @scroll="scroll()" @mousemove="mouseMove">
        <div class="project-carousel">
            <v-fullpage>
                <div id="projects" 
                    :class="{'leave': onLeave}"
                    :style="{
                        transform: 'translateX(' + translation() + 'px)',
                    }">
                    <div class="project" 
                        v-for="(project, key, index) in projects"  
                        :class="{'leaving': onLeave && index != firstSlide + 1}"
                        @click="goToProjectPage(index, key)"
                        :id="'project-' + key"
                        :style="{
                            left: (index * 33.333) + '%'
                        }"
                        >
                        <div class="bg" :class="key"></div>
                        <div class="content">
                            <v-scroll animation="slideUp">
                            <h2>{{ $t('projects.' + key + '.title') }}</h2>
                            <p style="max-width: 300px">{{ $t('projects.' + key + '.subtitle') }}</p>
                            <span>{{ project.client }}</span>
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
                <div class="left-area" @click="previous()"></div>
                <div class="right-area" @click="next()"></div>
            </v-fullpage>
        </div>
    </div>
</template>

<script>

import Scroll from '../../events/scroll'
import database from '../../database'
import store from '../../store'

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
            projects: database,
            cursorX: 0,
            cursorY: 0,
            padding: 0
        }
    },
    methods: {
        goToProjectPage(index, project_name) {
            
            if(this.$store.state.width > 768) {
                var time = 300
                if(this.firstSlide == index - 1)
                    time = 0
                
                this.firstSlide = index - 1

                var vm = this;
                setTimeout(function() {
                    vm.onLeave = 1
                }, time)

                this.onLeave = 1
                this.padding = 0;
                
                setTimeout(function() {
                    vm.changeRoute(project_name)
                }, time)
            } else {
                this.changeRoute(project_name)
            }
            
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
            this.padding = 0;
            if(this.firstSlide != this.nProjects - 3)
                this.firstSlide = this.firstSlide + 1
        },
        previous() {
            this.padding = 0;
            if(this.firstSlide != 0)
                this.firstSlide = this.firstSlide - 1
        },
        translation() {
            return - this.$store.state.width/3 * (this.firstSlide) + this.padding
        },
        projectWidth(project_id) {
            return this.$store.state.width/3
        },
        scroll() {
            Scroll(document.getElementById('page').scrollTop)
        },
        mouseMove(e) {
            if (this.$store.state.width > 992) {
                this.cursorX = e.clientX
                this.cursorY = e.clientY
                if(!this.onLeave) {
                    if(this.cursorX + 100 > store.state.width && this.firstSlide != this.nProjects - 3) {
                        this.padding = -100;
                    } else if(this.cursorX - 100 < 0 && this.firstSlide != 0) {
                        this.padding = 100;
                    } else {
                        this.padding = 0;
                    }
                }
            }
        },
    }
}
</script>
<template>
    <div class="page contact">
        <div id="scroll_content" class="scroll_content" @scroll="scroll()">
            <div class="wrapper">
                <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="title">
                                <v-scroll animation="slideRight">
                                    <h1>{{ $t("contact.title") }}</h1>
                                </v-scroll>
                            </div>
                            
                            <v-scroll animation="slideLeft">
                            <div class="container-sm">
                                <form @submit.prevent="sendEmail()">
                                    <div class="form-group">
                                        <label for="name" class="label-control">{{ $t('contact.form.name') }}*</label>
                                        <input v-model="data.name" type="text" class="form-control" required >
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="label-control">{{ $t('contact.form.email') }}*</label>
                                        <input v-model="data.email" type="email" class="form-control" required >
                                    </div>
                                    <div class="form-group">
                                        <label for="phone" class="label-control">{{ $t('contact.form.phone') }}*</label>
                                        <input v-model="data.phone" type="phone" class="form-control" required >
                                    </div>
                                    <div class="form-group">
                                        <label for="message" class="label-control">{{ $t('contact.form.message') }}*</label>
                                        <textarea v-model="data.message" cols="30" rows="10" class="form-control" required ></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3>{{ $t('contact.form.type') }}</h3>
                                            <div v-for="type in types" class="radio" @click="data.type = $t('type.' + type)" :class="{'active': $t('type.' + type) == data.type}">{{ $t('type.' + type) }}</div>
                                        </div>
                                        <div class="col-md-6">
                                            <h3>{{ $t('contact.form.service') }}</h3>
                                            <div v-for="service in services" class="radio" @click="data.service = $t('service.' + service)" :class="{'active': $t('service.' + service) == data.service}">{{ $t('service.' + service) }}</div>
                                        </div>
                                    </div>
                                    
                                    <input type="submit" class="btn" :value="$t('contact.form.send')">
                                    <br>
                                    <br>

                                    <transition name="scale">
                                        <span v-if="error" class="after-mail error">{{ $t('contact.error') }}</span>
                                        <span v-if="success" class="after-mail success">{{ $t('contact.success') }}</span>
                                    </transition>
                                    
                                </form>
                            </div>
                            </v-scroll>
                        </div>
                        <v-scroll animation="slideRight">
                        <div class="col-md-6 coordinates">
                            <h2>{{ $t("contact.coordinates") }}</h2>
                            <h3>{{ $t("contact.email") }}</h3>
                            <span>hello@witify.io</span>
                            <h3>{{ $t("contact.phone") }}</h3>
                            <span>(438) 403-9972</span>
                            <span>(514) 916-3026</span>
                            <h3>{{ $t("contact.address") }}</h3>
                            <span>333 Sherbrooke E, 705</span>
                            <span>Montréal (Québec) H2X 4E3</span>
                            <span>Canada</span>
                        </div>
                        </v-scroll>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Scroll from '../../events/scroll'

export default {
    data() {
        return {
            error: false,
            success: false,
            data: {
                name: '',
                email: '',
                phone: '',
                message: '',
                type: '',
                service: '',
            },
            types: [
                'web',
                'ios',
                'android'
            ],
            services: [
                'prototype',
                'mvp',
                'complete',
                'update',
            ]
        }
    },

	methods: {
        sendEmail() {
            var vm = this

            this.error = false
            this.success = false
            
            this.$http.post('//formspree.io/hello@witify.io', {
                name: vm.data.name,
                email: vm.data.email,
                phone: vm.data.phone,
                message: vm.data.message,
                type: vm.data.type,
                service: vm.data.service,
            })
            .then((response) => {
                this.success = true
                this.data = {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    type: '',
                    service: '',
                }
            })
            .catch((response) => {
                this.error = true
            })
        },
        scroll() {
            Scroll(document.getElementById('scroll_content').scrollTop)
        }
    }
}
</script>
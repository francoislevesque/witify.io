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
                            <span>info@witify.io</span>
                            <h3>{{ $t("contact.phone") }}</h3>
                            <span>(438) 403-9972</span>
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
            var text =  "<h2>Nouveau lead sur witify.io</h2>" +
                        "<p><strong>Nom: </strong>" + this.data.name + "</p>" +
                        "<p><strong>Email: </strong>" + this.data.email + "</p>" +
                        "<p><strong>Phone: </strong>" + this.data.phone + "</p>" +
                        "<p><strong>Message: </strong></br>" + this.data.message + "</p>" +
                        "<p><strong>Type: </strong>" + this.data.type + "</p>" +
                        "<p><strong>Service: </strong>" + this.data.service + "</p>"

            this.error = false
            this.success = false
            
            this.$http.post('https://api.mailgun.net/v3/sandboxdb694e2bfd8c42b8a87c4d56d4ce3e36.mailgun.org', {
                responseType: "json",
                auth: {
                    username: 'api',
                    password: 'key-a2a5836cbd50de3b9723a41633b97294'
                },
                message: {
                    from_email: vm.data.email,
                    to: [{
                        email: "info@witify.io",
                        name: "Witify Inc",
                        type: "to"
                    }],
                    autotext: "true",
                    subject: "Nouveau lead sur witify.io",
                    html: text
                }
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
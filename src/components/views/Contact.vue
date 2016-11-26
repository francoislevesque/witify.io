<template>
    <div class="page">
        <div class="scroll_content">
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
                                        <label for="name" class="label-control">Name*</label>
                                        <input v-model="data.name" type="text" class="form-control" required >
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="label-control">Email*</label>
                                        <input v-model="data.email" type="email" class="form-control" required >
                                    </div>
                                    <div class="form-group">
                                        <label for="phone" class="label-control">Phone*</label>
                                        <input v-model="data.phone" type="phone" class="form-control" required >
                                    </div>
                                    <div class="form-group">
                                        <label for="message" class="label-control">Message*</label>
                                        <textarea v-model="data.message" cols="30" rows="10" class="form-control" required ></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3>Project type</h3>
                                            <div v-for="type in types" class="radio" @click="data.type = type" :class="{'active': type == data.type}">{{ $t('type.' + type) }}</div>
                                        </div>
                                        <div class="col-md-6">
                                            <h3>Service</h3>
                                            <div v-for="service in services" class="radio" @click="data.service = service" :class="{'active': service == data.service}">{{ $t('service.' + service) }}</div>
                                        </div>
                                    </div>
                                    
                                    <input type="submit" class="btn" value="Send">
                                </form>
                            </div>
                            </v-scroll>
                        </div>
                        <v-scroll animation="slideRight">
                        <div class="col-md-6 coordinates">
                            <h2>Coordonnées</h2>
                            <h3>Email</h3>
                            <span>info@witify.io</span>
                            <h3>Telephone</h3>
                            <span>(438) 403-9972</span>
                            <h3>Address</h3>
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
export default {
    data() {
        return {
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
            this.$http.post('/contact.php', this.data).then((response) => {
                console.log('success')
            }, (response) => {
                console.log('fail')
            })
        }
    }
}
</script>
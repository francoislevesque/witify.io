<template>
    <div class="page">
        <div class="wrapper">
            <div class="section">
                <div class="container container-sm">
                    <div class="title t-center">
                        <v-scroll animation="slideRight">
                            <h1>{{ $t("nav.contact") }}</h1>
                        </v-scroll>
                        <v-scroll animation="slideLeft">
                            <p>Lorem ipsum dolor ipom</p>
                        </v-scroll>
                    </div>
                    
                    <v-scroll animation="slideLeft">
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
                        <div class="form-group">
                            <span class="btn btn-default btn-file btn-icon dripicons-browser-upload">
                                File Upload 
                                <input type="file" name="file">
                            </span>
                        </div>
                        
                        <input type="submit" class="btn btn-primary" value="Send">

                    </form>
                    </v-scroll>
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
            }
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
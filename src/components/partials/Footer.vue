<template>
    <footer>
        <div class="container">
            <div class="top">
                <div class="row">
                    <div class="col-md-6">
                        <div class="about">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="menu">
                                    <h3>Lorem Ipsum</h3>
                                    <a href="/">Lorem Ipsum</a>
                                    <a href="/applications">Lorem Ipsum</a>
                                    <a href="/technology">Lorem Ipsum</a>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="menu">
                                    <h3>Lorem Ipsum</h3>
                                    <a v-bind:href="'mailto:' + emails[0]">Send email</a>
                                    <a href="/contact">Lorem Ipsum</a>
                                    <a href="/about">Lorem Ipsum</a>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="menu">
                                    <h3>Lorem Ipsum</h3>
                                    <a href="/terms">Lorem Ipsum</a>
                                    <a href="/privacy">Lorem Ipsum</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="rights">
                    © {{ date }} {{ title }}
                </div>
                <div class="author">
                    <a href="http://witify.io">{{ $t('footer.proudly') }}</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Config from '../../config'

    export default {
        data() {
            return {
                emails: Config.emails,
                title: Config.title,
                date: ''
            }
        },
        mounted() {
            this.date = new Date()
            this.date = this.date.getFullYear()
        }
    }
</script>
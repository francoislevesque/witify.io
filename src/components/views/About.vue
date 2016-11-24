<template>
	<div class="page">
		<v-fullpage>
			<div class="scroll_content">
				<div class="wrapper">
					<div class="section">
						<div class="container">
							<h1>{{ $t('about.title') }}</h1>
							<p class="main">{{ $t('about.subtitle') }}</p>
						</div>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<h2>{{ $t('about.speed.title') }}</h2>
								<p>{{ $t('about.speed.subtitle') }}</p>
							</div>
							<div class="col-md-6">
								<h2>{{ $t('about.experience.title') }}</h2>
								<p>{{ $t('about.experience.subtitle') }}</p>
							</div>
							<div class="col-md-6">
								<h2>{{ $t('about.marketing.title') }}</h2>
								<p>{{ $t('about.marketing.subtitle') }}</p>
							</div>
							<div class="col-md-6">
								<h2>{{ $t('about.communication.title') }}</h2>
								<p>{{ $t('about.communication.subtitle') }}</p>
							</div>
							<div class="col-md-6">
								<h2>{{ $t('about.technologies.title') }}</h2>
								<p>{{ $t('about.technologies.subtitle') }}</p>
								<div class="technologies">
									<img :src="require('../../assets/img/technologies/laravel.svg')" alt="Laravel Logo">
									<img :src="require('../../assets/img/technologies/meteor.svg')" alt="Meteor Logo">
									<img :src="require('../../assets/img/technologies/socket.io.svg')" alt="Socket.io Logo">
									<img :src="require('../../assets/img/technologies/vue.svg')" alt="Vue Logo">
									<img :src="require('../../assets/img/technologies/react.svg')" alt="React Logo">
									<img :src="require('../../assets/img/technologies/jquery.svg')" alt="JQuery Logo">
									<img :src="require('../../assets/img/technologies/sass.svg')" alt="Sass Logo">
									<img :src="require('../../assets/img/technologies/webpack.svg')" alt="Webpack Logo">
									<img :src="require('../../assets/img/technologies/browserify.svg')" alt="Browserify Logo">
									<img :src="require('../../assets/img/technologies/html-5.svg')" alt="HTML5 Logo">
									<img :src="require('../../assets/img/technologies/css-3.svg')" alt="CSS3 Logo">
									<img :src="require('../../assets/img/technologies/javascript.svg')" alt="Javascript Logo">
									<img :src="require('../../assets/img/technologies/c++.svg')" alt="C++ Logo">
									<img :src="require('../../assets/img/technologies/php.svg')" alt="C++ Logo">
									<img :src="require('../../assets/img/technologies/nodejs.svg')" alt="Node Logo">
									<img :src="require('../../assets/img/technologies/auth0.svg')" alt="Auth0 Logo">
									<img :src="require('../../assets/img/technologies/stripe.svg')" alt="Stripe Logo">
									<img :src="require('../../assets/img/technologies/git.svg')" alt="Git Logo">
									<img :src="require('../../assets/img/technologies/nginx.svg')" alt="NGINX Logo">
									<img :src="require('../../assets/img/technologies/apache.svg')" alt="Apache Logo">
									<img :src="require('../../assets/img/technologies/digitalocean.svg')" alt="Digital Ocean Logo">
									<img :src="require('../../assets/img/technologies/cloudflare.svg')" alt="Cloudflare Logo">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</v-fullpage>
	</div>
</template>

<script>
	
</script>
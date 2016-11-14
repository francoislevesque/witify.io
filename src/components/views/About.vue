<template>
	<div class="page">
		<v-fullpage>
			<div class="scroll_content">
				<div class="wrapper">
					<div class="section">
						<div class="container container">
							<h1>{{ $t('about.title') }}</h1>
							<p class="main">{{ $t('about.subtitle') }}</p>
						</div>
					</div>
					<div class="section">
						<div class="container">
							<h2>Démarche</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolorum perspiciatis tempore fugit quos accusamus excepturi ducimus recusandae laudantium consequuntur fuga omnis odit dicta tempora alias culpa, quae minus. Iusto.</p>
						</div>
					</div>
					<div class="section">
						<div class="container">
							<h2>{{ $t('about.services.title') }}</h2>
							<p>{{ $t('about.services.subtitle') }}</p>
						</div>
					</div>
					<div class="section">
						<div class="container">
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
		</v-fullpage>
	</div>
</template>

<script>
	
</script>
<template>
  <div class="page about">
		<v-fullpage>
			<div id="scroll_content" class="scroll_content" @scroll="scroll()">
				<div class="section dark big" style="background-image: url('/src/assets/img/boursify/banner.jpg')" alt="Witify desk">
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<v-scroll animation="slideRight">
								<h1>Boursify</h1>
								<p class="main">Simulation boursière Grasset-Marianopolis</p>
								</v-scroll>
							</div>
						</div>
					</div>
				</div>
				<div class="section no-padding">
					<div class="container">
						<div class="sub-section">
							<div class="text-image">
								<div class="text">
									<v-scroll animation="slideUp">
									<h2>Résultats de la simulation</h2>
                  <a href="/pdf/individuals.pdf" class="btn btn-black">Résultats par joueur</a>
                  <a href="/pdf/teams.pdf" class="btn btn-black">Résultats par équipe</a>
									</v-scroll>
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
  export default {

  }
</script>

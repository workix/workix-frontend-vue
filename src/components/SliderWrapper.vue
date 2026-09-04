<template>
  <!-- ============ SLIDES START ============ -->

		<div id="slider" class="sl-slider-wrapper">

			<div class="sl-slider">
			
				<div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
					<div class="sl-slide-inner">
						<div class="bg-img bg-img-1"></div>
						<div class="tint"></div>
						<div class="slide-content">
							<h2>Procurando uma oportunidade?</h2>
							<h3>Participar é e sempre será gratuito</h3>
							<p><a href="#/vagas" class="btn btn-lg btn-default">Encontre Vagas</a></p>
						</div>
					</div>
				</div>
			
				<div class="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
					<div class="sl-slide-inner">
						<div class="bg-img bg-img-2"></div>
						<div class="tint"></div>
						<div class="slide-content">
							<h2>Precisa contratar?</h2>
							<h3>Publique sua vaga sem taxa de publicação</h3>
							<p><a href="#/cadastrar_vaga" class="btn btn-lg btn-default">Publicar uma Vaga</a></p>
						</div>
					</div>
				</div>
			
				<div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
					<div class="sl-slide-inner">
						<div class="bg-img bg-img-3"></div>
						<div class="tint"></div>
						<div class="slide-content">
							<h2>Evoluindo sua carreira?</h2>
							<h3>Busque vagas sempre presentes no resultado orgânico</h3>
							<p><a href="#/vagas" class="btn btn-lg btn-default">Procurar Vagas</a></p>
						</div>
					</div>
				</div>
			
				<div class="sl-slide" data-orientation="vertical" data-slice1-rotation="-5" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1">
					<div class="sl-slide-inner">
						<div class="bg-img bg-img-4"></div>
						<div class="tint"></div>
						<div class="slide-content">
							<h2>Estendendo sua equipe?</h2>
							<h3>Busque candidatos e negocie direto, sem comissão</h3>
							<p><a href="#/candidatos" class="btn btn-lg btn-default">Buscar Candidatos</a></p>
						</div>
					</div>
				</div>

			</div>

			<nav id="nav-arrows" class="nav-arrows">
				<span class="nav-arrow-prev">Anterior</span>
				<span class="nav-arrow-next">Próximo</span>
			</nav>

			<nav id="nav-dots" class="nav-dots">
				<span class="nav-dot-current"></span>
				<span></span>
				<span></span>
				<span></span>
			</nav>

		</div>

		<!-- ============ SLIDES END ============ -->
</template>

<script>
export default {

}
</script>

<style>

</style>
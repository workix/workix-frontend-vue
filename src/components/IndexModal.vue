<template>
  <!-- Modal -->
	<div id="index-modal" class="modal fade" role="dialog" style="z-index: 1000000000">
		
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">x</button>
					<h4 class="modal-title">Bem-vindo(a) à Workix</h4>
				</div>

				<div class="modal-body" style="margin: 0 auto; text-align: center">

                    <img src="resources/images/under-construction.png" alt="Workix em construção" class="img-responsive" style="margin: 0 auto;" />

					<p>Imagine uma plataforma de empregos...</p>

					<p>...disponível na web e no celular, sempre gratuita para quem procura uma vaga.</p>

					<ul class="list-group">

						<li class="list-group-item active">Onde você não paga para
							publicar seu currículo <span class="badge">1</span>
						</li>

						<li class="list-group-item">Onde você é avisado sempre que
							visualizarem seu currículo <span class="badge">2</span>
						</li>

						<li class="list-group-item active">Onde você pode receber
							mensagens do recrutador direto no celular <span class="badge">3</span>
						</li>

						<li class="list-group-item">Onde você acompanha
							cada etapa do processo seletivo <span class="badge">4</span>
						</li>

					</ul>
					<div class="alert alert-success">
						<p><strong>Essa é a Workix: participar é e sempre será gratuito.
						O projeto se sustenta com ferramentas de recrutamento para
						empresas e visibilidade adicional opcional, dos dois lados,
						sempre identificada como tal.</strong></p>
					</div>

					<div class="alert alert-danger">
						<p><strong>Atenção: os valores, vagas e empresas exibidos aqui fazem parte de uma demonstração.</strong></p>
					</div>

					<div class="alert alert-warning">
						<p><strong>Projeto em fase de testes e desenvolvimento contínuo.</strong></p>
					</div>

					<div class="alert alert-info">
						<p><strong>Ainda não está 100% pronto — eventuais falhas ou bugs podem ocorrer.</strong></p>
					</div>

					<a href="#/sobre_nos" class="btn btn-primary btn-sm"> Saiba
						Mais </a> <br /> <br /> <a href="https://workix.github.io/java-docs/" class="btn btn-primary btn-sm" target="_blank"> Ver Documentação </a>

				</div>


				<div class="modal-footer" style="margin: 0 auto; text-align: center">
					<p>
						<b>Um projeto em constante evolução — obrigado por conferir</b>
					</p>
				</div>
			</div>

		</div>
	</div>
</template>

<script>

export default {

}
</script>

<style>

</style>
<template>
  <!-- ============ NAVBAR START ============ -->

		<div class="fm-container">
			<!-- Menu -->
			<div class="menu">
				<div class="button-close text-right">
					<a class="fm-button"><i class="fa fa-close fa-2x"></i></a>
				</div>
				<ul class="nav">
					<li class="active"><a href="/" @click="navigate('/')">Início</a></li>
					<li><a href="/sobre_nos" @click="navigate('/sobre_nos')">Sobre nós</a></li>
					<li><a href="#">Candidatos</a>
						<ul>
							<li><a href="/cadastrar_curriculo" @click="navigate('/cadastrar_curriculo')">Cadastrar Currículo</a></li>
							<li><a href="/curriculo" @click="navigate('/curriculo')">Visualizar Currículo</a></li>
							<li><a href="/vagas"  @click="navigate('/vagas')">Vagas</a></li>
							<li><a href="/vagas2"  @click="navigate('/vagas2')">Vagas (sem filtros)</a></li>
						</ul>
					</li>
					<li><a href="#">Recrutadores</a>
						<ul>
							<li><a href="/empresa" @click="navigate('/empresa')">Empresa</a></li>
							<li><a href="/cadastrar_vaga" @click="navigate('/cadastrar_vaga')">Cadastrar Vaga</a></li>
							<li><a href="/candidatos" @click="navigate('/candidatos')">Candidatos</a></li>
							<li><a href="/candidatos2" @click="navigate('/candidatos2')">Candidatos (sem filtros)</a></li>
						</ul>
					</li>
					<li><a href="/blog" @click="navigate('/blog')">Blog</a></li>
					<li><a class="link-register">Registrar</a></li>
					<li><a class="link-login">Login</a></li>
					
					<li><a href="/depoimentos" @click="navigate('/depoimentos')">Depoimentos</a></li>
					<li><a href="/opcoes" @click="navigate('/opcoes')">Opções</a></li>
					
					<li><a href="#">Páginas</a>
						<ul>
							<li><a href="/detalhes_vaga" @click="navigate('/detalhes_vaga')">Detalhes da Vaga</a></li>						
							<li><a href="/postagem" @click="navigate('/postagem')">Postagem</a></li>							
						</ul>
					</li>
					<li><a href="/perfil" @click="navigate('/perfil')">Perfil</a></li>
					
				</ul>		
			</div>
			<!-- end Menu -->
		</div>

	<!-- ============ NAVBAR END ============ -->
</template>

<script>
export default {
	methods: {
		navigate(link){
			// this.$router.go({path: link, force: true });
			// this.$router.push(link)
			console.log(link)
		}
	}
}
</script>

<style>

</style>
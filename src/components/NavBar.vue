<template>
  <!-- ============ NAVBAR START ============ -->

		<div class="fm-container">
			<!-- Menu -->
			<div class="menu">
				<div class="button-close text-right">
					<a class="fm-button"><i class="fa fa-close fa-2x"></i></a>
				</div>
				<ul class="nav">
					<li class="active"><router-link to="/">Início</router-link></li>
					<li><router-link to="/vagas">Vagas</router-link></li>
					<li><router-link to="/cadastrar_vaga">Cadastrar Vaga</router-link></li>
					<li><a href="candidates.html">Candidatos</a></li>
					<li><a href="post-a-resume.html">Cadastrar Currículo</a></li>
					<li><a href="#">Páginas</a>
						<ul>
							<li><a href="job-details.html">Detalhes da Vaga</a></li>
							<li><a href="resume.html">Currículo</a></li>
							<li><a href="company.html">Empresa</a></li>
							<li><a href="blog.html">Blog</a></li>
							<li><a href="post.html">Postagem</a></li>
							<li><router-link to="/sobre_nos">Sobre nós</router-link></li>
							<li><a href="testimonials.html">Depoimentos</a></li>
							<li><a href="options.html">Opções</a></li>
						</ul>
					</li>
					<li><a class="link-register">Register</a></li>
					<li><a class="link-login">Login</a></li>
				</ul>		
			</div>
			<!-- end Menu -->
		</div>

	<!-- ============ NAVBAR END ============ -->
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div id="">
      <PageLoader />
      <NavBar />
      <HeaderBar />
    <!-- ============ RESUME START ============ -->
		<section id="resume">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Cadastrar Currículo</h1>
						<h4>Encontre a vaga perfeita para você</h4>
													
						<HaveAnAccount />
						
					</div>
				</div>

				<form>

					<!-- Resume Details Start -->
					<div class="row">
						<div class="col-sm-6">
							<h2>Detalhes do Currículo</h2>
						</div>
						<div class="col-sm-6 text-right">
							<a class="btn btn-primary"><i class="fa fa-linkedin-square"></i> Importar do LinkedIn</a>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-name-group">
								<label for="resume-name">Nome</label>
								<input type="text" class="form-control" id="resume-name" placeholder="ex.: Maria da Silva">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-photo-group">
								<label for="resume-photo">Foto (Opcional)</label>
								<input type="file" id="resume-photo">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-title-group">
								<label for="resume-title">Cargo Pretendido</label>
								<input type="text" class="form-control" id="resume-title" placeholder="ex.: Designer UX/UI">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-video-group">
								<label for="resume-video">Vídeo (Opcional)</label>
								<input type="text" class="form-control" id="resume-video" placeholder="URL do vídeo">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-email-group">
								<label for="resume-email">Email</label>
								<input type="email" class="form-control" id="resume-email" placeholder="voce@exemplo.com">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-category-group">
								<label for="resume-category">Área de Interesse</label>
								<select  class="form-control" id="resume-category">
									<option>Escolha uma área</option>
									<option>Tecnologia da Informação</option>
									<option>Construção Civil</option>
									<option>Saúde</option>
									<option>Educação</option>
									<option>Logística</option>
									<option>Design & Marketing</option>
								</select>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-location-group">
								<label for="resume-location">Cidade</label>
								<input type="text" class="form-control" id="resume-location" placeholder="ex.: São Paulo">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-skills-group">
								<label for="resume-skills">Habilidades</label>
								<input type="text" class="form-control" id="resume-skills" placeholder="ex.: Figma, Comunicação, Inglês">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="form-group" id="resume-content-group">
								<label for="resume-content">Resumo Profissional</label>
								<div class="textarea form-control" id="resume-content"></div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<hr class="dashed">
						</div>
					</div>
					<div class="row social-network">
						<div class="col-sm-6">
							<div class="form-group" id="resume-social-network-group">
								<label for="resume-social-network">Rede Social</label>
								<select  class="form-control" id="resume-social-network">
									<option>Escolha uma rede social</option>
									<option>Facebook</option>
									<option>Twitter</option>
									<option>Instagram</option>
									<option>LinkedIn</option>
									<option>GitHub</option>
									<option>Outra</option>
								</select>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-social-network-url-group">
								<label for="resume-social-network-url">URL</label>
								<input type="text" class="form-control" id="resume-social-network-url" placeholder="http://">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<hr class="dashed">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<p><a id="add-social-network">+ Adicionar Rede Social</a></p>
							<hr>
						</div>
					</div>
					<!-- Resume Details End -->

					<!-- Experience Start -->
					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Experiência Profissional</h2>
						</div>
					</div>
					<div class="row experience">
						<div class="col-sm-6">
							<div class="form-group" id="resume-employer-group">
								<label for="resume-employer">Empregador</label>
								<input type="text" class="form-control" id="resume-employer" placeholder="Nome da empresa">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-experience-dates-group">
								<label for="resume-experience-dates">Data de Início/Fim</label>
								<input type="text" class="form-control" id="resume-experience-dates" placeholder="ex.: Abril 2020 - Junho 2023">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-job-title-group">
								<label for="resume-job-title">Cargo</label>
								<input type="text" class="form-control" id="resume-job-title" placeholder="ex.: Analista de Marketing">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-responsibilities-group">
								<label for="resume-responsibilities">Responsabilidades (Opcional)</label>
								<input type="text" class="form-control" id="resume-responsibilities" placeholder="ex.: Gestão de campanhas digitais">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<hr class="dashed">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<p><a id="add-experience">+ Adicionar Experiência</a></p>
							<hr>
						</div>
					</div>
					<!-- Experience Start -->

					<!-- Education Start -->
					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Formação Acadêmica</h2>
						</div>
					</div>
					<div class="row education">
						<div class="col-sm-6">
							<div class="form-group" id="resume-school-group">
								<label for="resume-school">Instituição de Ensino</label>
								<input type="text" class="form-control" id="resume-school" placeholder="Nome da instituição e cidade">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-education-dates-group">
								<label for="resume-education-dates">Data de Início/Fim</label>
								<input type="text" class="form-control" id="resume-education-dates" placeholder="ex.: Fevereiro 2018 - Dezembro 2022">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-qualifications-group">
								<label for="resume-qualifications">Qualificação</label>
								<input type="text" class="form-control" id="resume-qualifications" placeholder="ex.: Bacharelado em Engenharia">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-notes-group">
								<label for="resume-notes">Observações (Opcional)</label>
								<input type="text" class="form-control" id="resume-notes" placeholder="Alguma conquista ou destaque">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<hr class="dashed">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<p><a id="add-education">+ Adicionar Formação</a></p>
							<hr>
						</div>
					</div>
					<!-- Education Start -->

					<!-- Resume File Start -->
					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Arquivo do Currículo</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="form-group" id="resume-file-group">
								<label for="resume-file">Enviar Currículo em PDF (Opcional)</label>
								<input type="file" id="resume-file">
								<p class="help-block">Opcionalmente, envie seu currículo em PDF para as empresas visualizarem. Tamanho máx.: 64 MB.</p>
							</div>
						</div>
					</div>
					<!-- Resume File Start -->

					<div class="row text-center">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<a href="#" class="btn btn-primary btn-lg">Visualizar <i class="fa fa-arrow-right"></i></a>
						</div>
					</div>

				</form>

			</div>
		</section>
		<!-- ============ RESUME END ============ -->
        <ContactsWrapper />
        <FooterWrapper />
        <LoginPopup />
        <RegisterPopup />
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import HaveAnAccount from '@/components/HaveAnAccount.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from '@/components/RegisterPopup.vue'
export default {
    components:{
        PageLoader,
        NavBar,
        HeaderBar,
        HaveAnAccount,
        ContactsWrapper,
        FooterWrapper,
        LoginPopup,
        RegisterPopup
    },
	created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);
  }
}
</script>

<style>

</style>
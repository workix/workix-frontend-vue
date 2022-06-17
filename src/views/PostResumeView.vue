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
						<h1>Post a Resume</h1>
						<h4>Find your perfect job</h4>
													
						<HaveAnAccount />
						
					</div>
				</div>

				<form v-if="candidate">

					<!-- Resume Details Start -->
					<div class="row">
						<div class="col-sm-6">
							<h2>Detalhes do Currículo</h2>
						</div>
						<div class="col-sm-6 text-right">
							<a class="btn btn-primary"><i class="fa fa-linkedin-square"></i> Importar dados do Linkedin</a>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-name-group">
								<label for="resume-name">Nome</label>
								<input type="text" v-model="candidate.name" class="form-control" id="resume-name" placeholder="Seu Nome" readonly data-toggle="tooltip" data-placement="top" title="Para Alterar o Nome acesse a guia Perfil">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-photo-group">
								<label for="resume-photo">Photo (Optional)</label>
								<input type="file" id="resume-photo">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-title-group">
								<label for="resume-title">Objetivo ou Cargo</label>
								<input type="text" v-model="objective" class="form-control" id="resume-title" placeholder="por exemplo Web Designer">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-video-group">
								<label for="resume-video">Video (Optional)</label>
								<input type="text" class="form-control" id="resume-video" placeholder="Video URL">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-email-group">
								<label for="resume-email">Email</label>
								<input type="email" v-model="candidate.user.email" class="form-control" id="resume-email" placeholder="Seu Email" readonly data-toggle="tooltip" data-placement="top" title="Para Alterar o Email acesse a guia Perfil">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-carrerlevel-group">
								<label for="resume-carrerlevel">Nivel de Experiência</label>
								<select v-model="carrerLevel" class="form-control" id="resume-carrerlevel">
									<option>Escolha um nível</option>
									<option>Junior</option>
									<option>Middle</option>
									<option>Senior</option>
									<option>Expert</option>									
								</select>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-location-group">
								<label for="resume-location">Location</label>
								<input type="text" v-model="location" class="form-control" id="resume-location" placeholder="Seu Endereço" readonly data-toggle="tooltip" data-placement="top" title="Para Alterar informações de Endereço acesse a guia Perfil">
							</div>
						</div>
						<div class="col-sm-6">							 
							<div class="form-group" id="resume-presence-group">
								<label for="resume-presence">Forma de Trabalho</label>
								<select v-model="presence" class="form-control" id="resume-presence">
									<option>Escolha uma forma</option>
									<option>REMOTE</option>
									<option>OFFICE</option>
									<option>RELOCATION</option>
									<option>TRAVEL_A_LOT</option>									
								</select>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">		
												
							<div class="form-group" id="resume-content-group">
								<label for="resume-content">Conteúdo</label>								
								<QuillEditor toolbar="full" theme="snow" v-model="content" id="resume-content" />
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
								<label for="resume-social-network">Choose Social Network</label>
								<select  class="form-control" id="resume-social-network">
									<option>Choose social network</option>
									<option>Facebook</option>
									<option>Twitter</option>
									<option>Google+</option>
									<option>LinkedIn</option>
									<option>YouTube</option>
									<option>Vimeo</option>
									<option>Github</option>
									<option>Flickr</option>
									<option>YouTube</option>
									<option>DeviantArt</option>
									<option>ThemeForest</option>
									<option>CodeCanyon</option>
									<option>VideoHive</option>
									<option>AudioJungle</option>
									<option>GraphicRiver</option>
									<option>PhotoDune</option>
									<option>3dOcean</option>
									<option>ActiveDen</option>
									<option>Other</option>
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
							<p><a id="add-social-network">+ Add Social Network</a></p>
							<hr>
						</div>
					</div>
					<!-- Resume Details End -->

					<!-- Experience Start -->
					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Experience</h2>
						</div>
					</div>
					<div class="row experience">
						<div class="col-sm-6">
							<div class="form-group" id="resume-employer-group">
								<label for="resume-employer">Employer</label>
								<input type="text" class="form-control" id="resume-employer" placeholder="Company name">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-experience-dates-group">
								<label for="resume-experience-dates">Start/End Date</label>
								<input type="text" class="form-control" id="resume-experience-dates" placeholder="e.g. April 2010 - June 2013">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-job-title-group">
								<label for="resume-job-title">Job Title</label>
								<input type="text" class="form-control" id="resume-job-title" placeholder="e.g. Web Designer">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-responsibilities-group">
								<label for="resume-responsibilities">Responsibilities (Optional)</label>
								<input type="text" class="form-control" id="resume-responsibilities" placeholder="e.g. Developing new websites">
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
							<p><a id="add-experience">+ Add Experience</a></p>
							<hr>
						</div>
					</div>
					<!-- Experience Start -->

					<!-- Education Start -->
					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Education</h2>
						</div>
					</div>
					<div class="row education">
						<div class="col-sm-6">
							<div class="form-group" id="resume-school-group">
								<label for="resume-school">School Name</label>
								<input type="text" class="form-control" id="resume-school" placeholder="School name, city and country">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-education-dates-group">
								<label for="resume-education-dates">Start/End Date</label>
								<input type="text" class="form-control" id="resume-education-dates" placeholder="e.g. April 2010 - June 2013">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-qualifications-group">
								<label for="resume-qualifications">Qualifications</label>
								<input type="text" class="form-control" id="resume-qualifications" placeholder="e.g. Master Engineer">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-notes-group">
								<label for="resume-notes">Notes (Optional)</label>
								<input type="text" class="form-control" id="resume-notes" placeholder="Any achievements">
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
							<p><a id="add-education">+ Add Education</a></p>
							<hr>
						</div>
					</div>
					<!-- Education Start -->

					<!-- Resume File Start -->
					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Resume File</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="form-group" id="resume-file-group">
								<label for="resume-file">Upload Your Resume (Optional)</label>
								<input type="file" id="resume-file">
								<p class="help-block">Optionally upload your resume for employers to view. Max. file size: 64 MB.</p>
							</div>
						</div>
					</div>
					<!-- Resume File Start -->

					<div class="row text-center">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<a href="#" class="btn btn-primary btn-lg">Preview <i class="fa fa-arrow-right"></i></a>
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
	data(){
		return{
			candidate: null,
			objective: "",
			location: "",
			content: "",
			carrerLevel: 0,
			presence:0
		}
	},
	async created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);

	const token = localStorage.getItem("jwt")
	const {data} = await this.aboutMe(token)
	this.candidate = data.owner
	this.location = `${this.candidate.locale.city} - ${this.candidate.locale.estate} - ${this.candidate.locale.neighborhood} - ${this.candidate.locale.street} - ${this.candidate.locale.number} - ${this.candidate.locale.zipCode}` 
  },
  methods:{
	async aboutMe(token){
		let config = { headers: { "Authorization": `Bearer ${token}` } }
		return this.$http.get("http://localhost:8080/workix/services/v1/auth/me", config )
	},
  }
}
</script>

<style>

</style>
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

				<form v-if="candidate" @submit.prevent="null">

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

					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Habilidades</h2>
							<button style="margin-right:10px;" class="btn btn-primary" @click="addSkill">Adicionar Habilidade</button>
							<button style="margin-right:10px;" class="btn btn-secondary" @click="clearSkills">Apagar Habilidades</button>
							<br />
							<br />
							<br />
						</div>
					</div>					

				<template v-for="(s,i) in skills" :key="i">
					<div class="row social-network">
						<div class="col-sm-6">
							<div class="form-group" id="resume-skill-group">
								<label for="resume-skill-name">Habilidade {{i + 1}}</label>
								<input type="text" v-model="s.skillName" class="form-control" id="resume-skill-name" placeholder="Digite a Habilidade">
							</div>
						</div>
						<div class="col-sm-6">
							<label for="resume-skill-months">Meses de Experiência (Opcional)</label>
							<input type="number" v-model="s.months" class="form-control" id="resume-skill-months" placeholder="Digite a Quantidade de Meses de Experiência">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<hr class="dashed">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<p v-if="skills.length == i+1"><a @click="addSkill">+ Adicionar Habilidade</a></p>
							<p><a @click="removeSkill(i)">+ Remover Habilidade {{i + 1}} - {{s.skillName}}</a></p>
							<hr>
						</div>
					</div>
				</template>
					<!-- Resume Details End -->

					<!-- Experience Start -->
					<div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Experiência Profissional</h2>
							<button style="margin-right:10px;" class="btn btn-primary" @click="addExperience">Adicionar Exp. Profissional</button>
							<button style="margin-right:10px;" class="btn btn-secondary" @click="clearExperiences">Apagar Exp. Profissionals</button>
							<br />
							<br />
							<br />
						</div>
					</div>

				<template v-for="(e,i) in experiences" :key="i">
					<div class="row experience">
						<div class="col-sm-6">
							<div class="form-group" id="resume-employer-group">
								<label for="resume-employer">Empregador</label>
								<input type="text" v-model="e.employer" class="form-control" id="resume-employer" placeholder="Nome do Empregador">
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group" id="resume-experience-dates-group">
								<label for="resume-experience-dateStart">Data de Início</label>
								<input type="text" v-model="e.startDate" class="form-control" id="resume-experience-dateStart" placeholder="Selecione uma Data">
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group" id="resume-experience-dates-group">
								<label for="resume-experience-dateEnd">Data de Saída</label>
								<input type="text" v-model="e.endDate" class="form-control" id="resume-experience-dateEnd" placeholder="Selecione uma Data">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-job-title-group">
								<label for="resume-job-title">Título</label>
								<input type="text" v-model="e.jobTitle" class="form-control" id="resume-job-title" placeholder="exemplo: Web Designer">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group" id="resume-responsibilities-group">
								<label for="resume-responsibilities">Responsabilidades (Opcional)</label>
								<input type="text" v-model="e.responsibilities" class="form-control" id="resume-responsibilities" placeholder="exemplo Desenvolvimento de novos Sites">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="form-group" id="resume-exp-description-group">
								<label for="resume-exp-description">Descrição</label>
								<textarea id="resume-exp-description" class="form-control" rows="3">

								</textarea>
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
							<p v-if="experiences.length == i+1"><a @click="addExperience">+ Adicionar Experiência</a></p>
							<p><a @click="removeExperience(i)">+ Remover Experiência {{i + 1}} - {{e.employer}}</a></p>
							<hr>
						</div>
					</div>
				</template>
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
			presence:0,
			skills: [],
			experiences: []
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
	addSkill()  {
		this.skills.push({skillName: "", months: 0})
	},
	addExperience(){
		this.experiences.push({employerName: "", jobTitle: "", startDate: "", endDate: "", responsibilities: "", description: ""})
	},
	removeSkill(index){
		this.skills.splice(index, 1)
	},
	removeExperience(index){
		this.experiences.splice(index, 1)
	},
	clearSkills(){
		this.skills = []
	},
	clearExperiences(){
		this.experiences = []
	},
	async aboutMe(token){
		let config = { headers: { "Authorization": `Bearer ${token}` } }
		return this.$http.get("http://localhost:8080/workix/services/v1/auth/me", config )
	},
  }
}
</script>

<style>

</style>
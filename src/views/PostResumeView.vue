<template>
  <div id="">
      
    <!-- ============ RESUME START ============ -->
		<section id="resume">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Publique seu Currículo</h1>
						<h4>Encontre o Trabalho Perfeito</h4>
													
						<HaveAnAccount />
						
					</div>
				</div>

				<form v-if="candidate" @submit.stop.prevent="createOrUpdateResume">

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
									<option value="0">Junior</option>
									<option value="1">Middle</option>
									<option value="2">Senior</option>
									<option value="3">Expert</option>									
								</select>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-location-group">
								<label for="resume-location">Localização</label>
								<input type="text" v-model="location" class="form-control" id="resume-location" placeholder="Seu Endereço" readonly data-toggle="tooltip" data-placement="top" title="Para Alterar informações de Endereço acesse a guia Perfil">
							</div>
						</div>
						<div class="col-sm-6">							 
							<div class="form-group" id="resume-presence-group">
								<label for="resume-presence">Forma de Trabalho</label>
								<select v-model="presence" class="form-control" id="resume-presence">
									<option>Escolha uma forma de trabalho</option>
									<option value="0">REMOTE</option>
									<option value="1">OFFICE</option>
									<option value="2">RELOCATION</option>
									<option value="3">TRAVEL_A_LOT</option>									
								</select>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">		
												
							<div class="form-group" id="resume-content-group">
								<label for="resume-content">Conteúdo</label>								
								<QuillEditor  :content="content" :contentType="'html'" v-model:content="content"  toolbar="full" theme="snow" v-model="content" id="resume-content" />
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
							<button type="button" style="margin-right:10px;" class="btn btn-primary" @click="addSkill">Adicionar Habilidade</button>
							<button type="button" style="margin-right:10px;" class="btn btn-secondary" @click="clearSkills">Apagar Habilidades</button>
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
							<button type="button" style="margin-right:10px;" class="btn btn-primary" @click="addExperience">Adicionar Exp. Profissional</button>
							<button type="button" style="margin-right:10px;" class="btn btn-secondary" @click="clearExperiences">Apagar Exp. Profissionals</button>
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
								<input type="text" v-model="e.employerName" class="form-control" id="resume-employer" placeholder="Nome do Empregador">
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group" id="resume-experience-dates-group">
								<label for="resume-experience-dateStart">Data de Início</label>
								<!--<input type="text" v-model="e.startDate" class="form-control" id="resume-experience-dateStart" placeholder="Selecione uma Data">-->
								<Datepicker locale="pt-BR" autoApply placeholder="Selecione uma Data" required :enableTimePicker="false" v-model="e.startDate" class="form-control"/>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group" id="resume-experience-dates-group">
								<label for="resume-experience-dateEnd">Data de Saída</label>
								<!--<input type="text" v-model="e.endDate" class="form-control" id="resume-experience-dateEnd" placeholder="Selecione uma Data">-->
								<Datepicker locale="pt-BR" autoApply placeholder="Selecione uma Data" required :enableTimePicker="false" v-model="e.endDate" class="form-control"/>
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
								<textarea id="resume-exp-description" v-model="e.description" class="form-control" rows="3"></textarea>
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
							<h2>Formação Acadêmica</h2>
							<button type="button" style="margin-right:10px;" class="btn btn-primary" @click="addEducation">Adicionar Formação Acadêmica</button>
							<button type="button" style="margin-right:10px;" class="btn btn-secondary" @click="clearEducations">Apagar Formação Acadêmica</button>
							<br />
							<br />
							<br />
						</div>
					</div>
				<template v-for="(edu,i) in educations" :key="i">
					<div class="row education">
						<div class="col-sm-6">
							<div class="form-group" id="resume-school-group">
								<label for="resume-school">Nome Instituição</label>
								<input type="text" v-model="edu.schoolName" class="form-control" id="resume-school" placeholder="Digite o nome da Instituição">
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group" id="resume-education-dates-group-date-start">
								<label for="resume-education-date-start">Data de Início</label>
								<!--<input type="text" v-model="edu.startDate" class="form-control" id="resume-education-date-start" placeholder="Selecione uma Data">-->
								<Datepicker locale="pt-BR" autoApply placeholder="Selecione uma Data" required :enableTimePicker="false" v-model="edu.startDate" class="form-control"/>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group" id="resume-education-dates-group-date-end">
								<label for="resume-education-date-end">Data de Término</label>
								<!--<input type="text" v-model="edu.endDate" class="form-control" id="resume-education-date-end" placeholder="Selecione uma Data">-->
								<Datepicker locale="pt-BR" autoApply placeholder="Selecione uma Data" required :enableTimePicker="false" v-model="edu.endDate" class="form-control"/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group" id="resume-qualification-group">
								<label for="resume-qualification">Qualificação</label>
								<input type="text" v-model="edu.qualification" class="form-control" id="resume-qualification" placeholder="exemplo Engenharia">
							</div>
						</div>
						<div class="col-sm-6">
							
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="form-group" id="resume-description-group">
								<label for="resume-edu-description">Descrição</label>
								<textarea id="resume-edu-description" v-model="edu.description" class="form-control" rows="3" placeholder="Descrição do Curso"></textarea>
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
							<p v-if="educations.length == i+1"><a @click="addEducation">+ Adicionar Formação Acadêmica</a></p>
							<p><a @click="removeEducation(i)">+ Remover Formação Acadêmica {{i + 1}} - {{edu.schoolName}}</a></p>
							<hr>
						</div>
					</div>
				</template>	
					<!-- Education Start -->

				<template v-if="false">
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
				</template>	

					<div class="row text-center">
						<div class="col-sm-12">
							<p>&nbsp;</p>							
							<button class="btn btn-primary btn-lg btn-block" type="submit">Salvar</button>
						</div>
					</div>

				</form>

			</div>
		</section>
		<!-- ============ RESUME END ============ -->
        <ContactsWrapper />
       
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import Datepicker from '@vuepic/vue-datepicker';
import HaveAnAccount from '@/components/HaveAnAccount.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
export default {
	setup(){
		const toast = useToast();
		return {toast}
	},
    components:{
		Datepicker,        
        HaveAnAccount,
        ContactsWrapper	
    },
	data(){
		return{
			candidate: null,
			resume: null,
			objective: "",
			location: "",
			content: "",
			carrerLevel: 0,
			presence:0,
			skills: [],
			experiences: [],
			educations: []
		}
	},
	async created(){	

	const token = localStorage.getItem("jwt")
	const {data} = await this.aboutMe(token)
	this.candidate = data.owner
	this.resume = data.resume

	if(this.resume){
		this.populateResume(this.resume)
	}else {
		this.location = `${this.candidate.locale.city} - ${this.candidate.locale.estate} - ${this.candidate.locale.neighborhood} - ${this.candidate.locale.street} - ${this.candidate.locale.number} - ${this.candidate.locale.zipCode}` 
	}
	
  },
  methods:{
	addSkill()  {
		this.skills.push({skillName: "", months: 0})
	},
	addExperience(){
		this.experiences.push({employerName: "", jobTitle: "", startDate: "", endDate: "", responsibilities: "", description: ""})
	},
	addEducation(){
		this.educations.push({description: "", qualification: "", schoolName: "", startDate: "", endDate: ""})
	},
	removeSkill(index){
		this.skills.splice(index, 1)
	},
	removeExperience(index){
		this.experiences.splice(index, 1)
	},
	removeEducation(index){
		this.educations.splice(index, 1)
	},
	clearSkills(){
		this.skills = []
	},
	clearExperiences(){
		this.experiences = []
	},
	clearEducations(){
		this.educations = []
	},
	populateResume(resume){

		const carrerLevels = {
			JUNIOR: 0,
			MIDDLE: 1,
			SENIOR: 2,
			EXPERT: 3
		}

		const presence = {
			REMOTE: 0,
			OFFICE: 1,
			RELOCATION: 2,
			TRAVEL_A_LOT: 3
		}

		this.resume = resume
		this.objective = resume.objective;
		this.location = `${resume.candidate.locale.city} - ${resume.candidate.locale.estate} - ${resume.candidate.locale.neighborhood} - ${resume.candidate.locale.street} - ${resume.candidate.locale.number} - ${resume.candidate.locale.zipCode}` 
		this.content = resume.content
		this.carrerLevel = carrerLevels[resume.carrerLevel] 
		this.presence = presence[resume.presence]
		this.skills = resume.skills
		this.experiences = resume.experiences
		this.educations = resume.educations			
	},
	async aboutMe(token){
		let config = { headers: { "Authorization": `Bearer ${token}` } }
		return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/auth/me`, config )
	},
	async createOrUpdateResume(){
		let payload = {
			carrerLevel: this.carrerLevel,
			presence: this.presence,
			candidate: this.resume.candidate,
			educations: this.educations,
			experiences: this.experiences,
			skills: this.skills,
			objective: this.objective,
			content: this.content
		}
		if (this.resume.id){
			payload.id = this.resume.id
		}
		const token = localStorage.getItem("jwt")
		let config = { headers: { "Authorization": `Bearer ${token}` } }
		
		try {
			await this.$http.post(`${process.env.VUE_APP_BACKEND_SERVER}/vue/create_or_update_resume_by_token`, payload, config)	
			this.toast.success("Dados atualizados com Sucesso!", {timeout: 2000})
			this.$router.go({path: this.$router.currentRoute, force: true})
		} catch (error) {
			console.error(error)
			this.toast.error("Ocorreu um erro ao atualizar os dados", {timeout: 2000})
		}
		

	}
  }
}
</script>

<style>

</style>
<template>
  <div id="">

    <!-- ============ JOBS START ============ -->
		<section id="jobs">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Cadastrar Vaga</h1>
						<h4>Encontre um Candidato certo</h4>
						<HaveAnAccount />
						<br />
						<br />
						<br />
					</div>
				</div>

				<form @submit.prevent="send">
					<div class="row">
						<div class="col-sm-6">
							<h2>Detalhes da Vaga</h2>
							<JobDetailsForm :job="job" v-if="job" />
						</div>
						<div class="col-sm-6">
							<h2>Detalhes da Empresa</h2>
							<CompanyDetailsForm :company="company" v-if="company" />
						</div>
					</div>
					<div class="row text-center">
						<p>&nbsp;</p>						
						<button class="btn btn-primary btn-lg btn-block">Salvar <i class="fa fa-arrow-right"></i></button>
					</div>
				</form>

			</div>
		</section>
    <!-- ============ JOBS END ============ -->
  </div>
</template>

<script>
const _ = require('lodash');
import { useToast } from "vue-toastification";
import HaveAnAccount from '@/components/HaveAnAccount.vue'
import JobDetailsForm from '@/components/post_jobs/JobDetailsForm.vue'
import CompanyDetailsForm from '@/components/post_jobs/CompanyDetailsForm.vue'
export default {
	setup(){
		const toast = useToast();
		return {toast}
	},
    components: {        
        HaveAnAccount,
        JobDetailsForm,
        CompanyDetailsForm,
    },
	methods:{
	timeout(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	},
	async aboutMe(token){
		let config = { headers: { "Authorization": `Bearer ${token}` } }
		return this.$http.get("http://localhost:8080/workix/services/v1/auth/me", config )
	},
	async getJob(id){
		return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/${id}`)
	},
	async createOrUpdateJob(token, job){
		let config = { headers: { "Authorization": `Bearer ${token}` } }
		return this.$http.post("http://localhost:8080/workix/services/v1/vue/create_or_update_job_by_token", job, config)
	},
	async send(){
		
		const payload = _.clone(this.job)
		delete payload.createdAt;
		delete payload.updatedAt
		console.log("JOB", payload)

		try {
			const token = localStorage.getItem("jwt")
			const {data} = await this.createOrUpdateJob(token, payload)
			this.toast.success("Vaga criada/atualizada com sucesso!", {timeout: 2000})
			await this.timeout(1000)
			const path = `/cadastrar_vaga?id=${data.id}`			
			
			// this.$router.go({path, force: true})
			window.location.href = `${path}`;
		} catch (error) {
			console.error(error)
			this.toast.error("Ocorreu um erro ao atualizar os dados", {timeout: 2000})
		}
	}
	},
	data(){
		return {job: null, company: null}
	},
	async created(){

		const token = localStorage.getItem("jwt")

		if (token){
			const {data} = await this.aboutMe(token)
			this.company = data.owner
		} else{
			throw new Error("FORBBIDEN ACCESS")
		}

		const id = this.$route.query.id

		if(id){
			const {data} = await this.getJob(id)
			this.job = data			
		}else {
			this.job = {    
				active: false,
				feature: false,
				company: this.company,    
				jobCategory: "",
				jobType: "",
				minPayment: 0,
				maxPayment: 0,
				title: "",
				description: "",
				requirement: "",
				benefits: ""
			}
		}
	}
}
</script>

<style>

</style>
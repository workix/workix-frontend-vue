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

import HaveAnAccount from '@/components/HaveAnAccount.vue'
import JobDetailsForm from '@/components/post_jobs/JobDetailsForm.vue'
import CompanyDetailsForm from '@/components/post_jobs/CompanyDetailsForm.vue'
export default {
    components: {        
        HaveAnAccount,
        JobDetailsForm,
        CompanyDetailsForm,
    },
	methods:{
		getJob(id){
			return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/${id}`)
		},
		send(){
			console.log("JOB", this.job)
		}
	},
	data(){
		return {job: null, company: null}
	},
	async created(){
		const id = this.$route.query.id

		if(id){
			const {data} = await this.getJob(id)
			this.job = data
			this.company = data.company
		}
	}
}
</script>

<style>

</style>
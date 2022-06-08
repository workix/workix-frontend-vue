<template>  
		<!-- ============ STATS START ============ -->
		<section id="stats" class="parallax text-center">
			<div class="tint"></div>
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h1>Estatísticas Workix</h1>
						<h4>Quantas Pessoas Estamos Ajudando</h4>
					</div>
				</div>
				<div class="row" id="counter" v-if="this.members > 0 || this.jobs > 0 || this.resumes > 0 || this.companies > 0">
					
					<div class="counter">
						<div class="number">{{this.members}}</div>
						<div class="description">Candidatos</div>
					</div>
				
					<div class="counter">
						<div class="number">{{this.jobs}}</div>
						<div class="description">Vagas</div>
					</div>
				
					<div class="counter">
						<div class="number">{{this.resumes}}</div>
						<div class="description">Currículos</div>
					</div>
				
					<div class="counter">
						<div class="number">{{this.companies}}</div>
						<div class="description">Empresas</div>
					</div>

				</div>
				<div class="row">
					<div class="col-sm-12">
						<p><a class="link-register btn btn-primary">Junte-se a nós</a></p>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ STATS END ============ -->
</template>

<script>
export default {
	data() {
		return {
			members: 0,
			jobs: 0,
			resumes: 0,
			companies: 0
		}
	},
	methods: {
		async getStatistics(){
			const {data} = await this.$http.get("http://localhost:8080/workix/services/v1/statistics")
			
			this.members = data.members
			this.jobs = data.jobs
			this.resumes = data.resumes
			this.companies = data.companies			
		}
	},
	async created(){
		await this.getStatistics()
	}
}
</script>

<style>

</style>
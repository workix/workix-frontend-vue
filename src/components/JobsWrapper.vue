<template>
    <!-- ============ JOBS START ============ -->

		<section id="jobs">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">
						<h2>Vagas Recentes</h2>
						<!-- JOBS -->
						<div class="jobs"> 
							<div v-for="(j,i) in defaultJobs" :key="i"><DefaultJob :job="j"/></div>
							
						</div>
						<!-- JOBS END -->

						<a class="btn btn-primary" id="more-jobs">
							<span class="more">Mostrar mais Vagas <i class="fa fa-arrow-down"></i></span>
							<span class="less">Mostrar menos Vagas <i class="fa fa-arrow-up"></i></span>
						</a>

					</div>
					<div class="col-sm-4">
						<h2>Vagas em Destaque</h2>
							<FeaturedJob :job="featuredJob" v-if="featuredJob"/>
					</div>
				</div>
			</div>
		</section>

	<!-- ============ JOBS END ============ -->
</template>

<script>
import DefaultJob from '@/components/jobs/DefaultJob.vue'
import FeaturedJob from '@/components/jobs/FeaturedJob.vue'
export default {
	components: {
		DefaultJob,
		FeaturedJob
	},
	data(){
		return{
			baseUrl: window.location.origin,
			defaultJobs: [],
			featuredJob: null
		}
	},
	methods:{
		getJobs(featured) {
			return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/jobs/feature?start=0&max=10&feature=${featured}`)
		},
		getRandomFeaturedJob(){
			return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/jobs/random_featured`)
		}
	},
	async created(){
		const defaults = await this.getJobs(false)
		const featureds = await this.getRandomFeaturedJob()

		this.defaultJobs = defaults.data
		this.featuredJob = featureds.data
	}
}
</script>

<style>
	.jobs a {
		margin: 0 !important;	
		display: "inline-block" !important	
	}
</style>
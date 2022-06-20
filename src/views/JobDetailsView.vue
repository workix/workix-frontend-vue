<template>
  <div id="">    

    <!-- ============ TITLE START ============ -->
		<section id="title" v-if="jobId != null && jobId > 0 && job != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>{{job.title}}</h1>
						<h4>
							<span><i class="fa fa-map-marker"></i>{{job.company.locale.city}}</span>
							<span><i class="fa fa-clock-o"></i>{{job.jobType}}</span>
							<span><i class="fa fa-dollar"></i>R$ {{job.minPayment.toFixed(2)}} - {{job.maxPayment.toFixed(2)}}</span>
						</h4>
					</div>
				</div>
			</div>
		</section>
    <!-- ============ TITLE END ============ -->

		<section v-else>
			<h1> Job Id is not Defined</h1>
		</section>	


    <!-- ============ CONTENT START ============ -->
		<section id="jobs" v-if="jobId != null && jobId > 0 && job != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">
						<article>
							<h2>Detalhes da Vaga</h2>
							<p>{{job.description}}</p>							

							<h3>Requisitos</h3>
								<template v-if="job.requirement">{{job.requirement}}</template>
							<ul v-else>
								<li>Aliquam rhoncus justo eget tellus scelerisque, at mollis mi aliquam.</li>
								<li>Quisque pretium convallis pulvinar.</li>
								<li>Nulla rutrum nisi mi, iaculis commodo nibh lobortis sed.</li>
								<li>Sed pulvinar, nunc vitae molestie dapibus, lacus dolor dignissim sapien.</li>
								<li>Pellentesque ipsum ex, imperdiet quis consequat sed, consectetur ut ante.</li>
								<li>Aliquam libero felis, mollis vitae elementum vel, bibendum eu tortor.</li>
								<li>Morbi rhoncus luctus interdum.</li>
							</ul>
							<h3>Benefícios</h3>
								<template v-if="job.benefits">{{job.benefits}}</template>
							<ul v-else>								
								<li>Aliquam rhoncus justo eget tellus scelerisque, at mollis mi aliquam.</li>
								<li>Quisque pretium convallis pulvinar.</li>
								<li>Nulla rutrum nisi mi, iaculis commodo nibh lobortis sed.</li>
								<li>Sed pulvinar, nunc vitae molestie dapibus, lacus dolor dignissim sapien.</li>
								<li>Pellentesque ipsum ex, imperdiet quis consequat sed, consectetur ut ante.</li>
								<li>Aliquam libero felis, mollis vitae elementum vel, bibendum eu tortor.</li>
								<li>Morbi rhoncus luctus interdum.</li>
							</ul>
							<h3>Como se Candidatar</h3>
							<p>Vivamus pulvinar <a :href="`mailto:${job.company.user.email}`">{{job.company.user.email}}</a> lobortis placerat. Cras non est nibh. In a quam id justo aliquam elementum. In cursus urna ac sem tincidunt aliquet. Vivamus a aliquet purus, luctus tincidunt orci.</p>
							<p>
								<a v-if="accountType == 'Candidate'" href="#" class="btn btn-primary btn-lg" @click="subscribe">Candidatar Aqui</a>
								&nbsp;
								<a v-if="accountType == 'Candidate'" href="#" class="btn btn-default btn-lg">Candidatar via LinkedIn</a>
							</p>
						</article>
					</div>
					<div class="col-sm-4" id="sidebar">
						<div class="sidebar-widget" id="share">
							<h2>Compartilhe essa Vaga</h2>
							<ul>
								<li><a href="https://www.facebook.com/sharer/sharer.php?u=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-facebook"></i></a></li>
								<li><a href="https://twitter.com/home?status=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-twitter"></i></a></li>
								<li><a href="https://plus.google.com/share?url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html&amp;title=Jobseek%20-%20Job%20Board%20Responsive%20HTML%20Template&amp;summary=&amp;source="><i class="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
						<hr>
						<div class="sidebar-widget" id="company">
							<h2>Sobre essa Empresa</h2>
							<p><img :src="`${baseUrl}/resources/placeholder/300x109.gif`" alt="" class="img-responsive"></p>							
							<div v-html="job.company.description"></div>
							<p><a :href="`/empresa?id=${job.company.id}`" class="btn btn-primary">Leia mais</a></p>
						</div>
						<hr>
						<div class="sidebar-widget" id="company-jobs">
							<h2>Mais vagas desta Empresa</h2>
							<ul>
								<li v-for="(j,i) in jobs" :key="i"><a :href="`/detalhes_vaga?id=${j.id}`">{{j.title}}</a></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ CONTENT END ============ -->
      <ContactsWrapper />      
      
  </div>
</template>

<script>
import ContactsWrapper from "@/components/ContactsWrapper.vue"
import {computed} from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
export default {
	setup(){
		const store = useStore()
		const toast = useToast()
		const accountType = computed(()=> store.state.accountType)
		const candidateId = computed(() => store.state.owner.id)
		return {accountType, candidateId, toast}
	},
    components: {        
        ContactsWrapper        
    },
	data(){
		return{
			baseUrl: window.location.origin,
			jobId:0,
			job: null,
			jobs: []
		}
	},
	methods: {
		getJob(){
			return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/jobs/${this.jobId}`)
		},
		getJobsFromCompany(){
			return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/jobs/company/${this.job.company.id}`)
		},
		subscribeInJob(candidateId, jobId){
			return this.$http.post(`${process.env.VUE_APP_BACKEND_SERVER}/jobs/subscribe`, {candidateId, jobId})
		},
		async subscribe(){
			try {
				await this.subscribeInJob(this.candidateId, this.jobId)
				this.toast.success("Incrito com sucesso", {timeout: 2000})
			} catch (error) {
				console.error(error)
				this.toast.danger("Ocorreu algum erro na sua inscrição", {timeout: 2000})
			}
		}
	},
	async created(){	
	
	this.jobId = this.$route.query.id
	const {data} = await this.getJob()
	this.job = data

	const resp = await this.getJobsFromCompany()
	this.jobs = resp.data.filter(i => i.id != this.job.id)
  },
  async mounted(){
	
  }
}
</script>

<style>

</style>
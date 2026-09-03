<template>
  <div id="">
    <PageLoader />
    <NavBar />
    <HeaderBar />

    <!-- ============ TITLE START ============ -->
		<section id="title" v-if="jobId != null && jobId > 0 && job != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>{{job.title}}</h1>
						<h4>
							<span><i class="fa fa-map-marker"></i>{{job.company.locale.city}}</span>
							<span><i class="fa fa-clock-o"></i>{{job.jobType}}</span>
							<span><i class="fa fa-dollar"></i>{{$currency(job.minPayment)}} - {{$currency(job.maxPayment)}}</span>
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
							<p>Envie seu currículo diretamente para <a :href="`mailto:${job.company.user.email}`">{{job.company.user.email}}</a> ou use os botões abaixo para se candidatar pela Workix.</p>
							<p>
								<a href="#" class="btn btn-primary btn-lg">Candidatar Aqui</a>
								&nbsp;
								<a href="#" class="btn btn-default btn-lg">Candidatar via LinkedIn</a>
							</p>
						</article>
					</div>
					<div class="col-sm-4" id="sidebar">
						<div class="sidebar-widget" id="share">
							<h2>Compartilhe essa Vaga</h2>
							<ul>
								<li><a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a></li>
								<li><a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(job.title)}`" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a></li>
								<li><a :href="`https://api.whatsapp.com/send?text=${encodeURIComponent(job.title + ' - ' + shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i></a></li>
								<li><a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
						<hr>
						<div class="sidebar-widget" id="company">
							<h2>Sobre essa Empresa</h2>
							<p><img :src="`${baseUrl}/resources/placeholder/300x109.gif`" alt="" class="img-responsive"></p>
							<p>{{job.company.description}}</p>
							<p><a :href="`#/empresa?id=${job.company.id}`" class="btn btn-primary">Leia mais</a></p>
						</div>
						<hr>
						<div class="sidebar-widget" id="company-jobs">
							<h2>Mais vagas desta Empresa</h2>
							<ul>
								<li v-for="(j,i) in jobs" :key="i"><a :href="`#/detalhes_vaga?id=${j.id}`">{{j.title}}</a></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ CONTENT END ============ -->
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
import ContactsWrapper from "@/components/ContactsWrapper.vue"
import FooterWrapper from "@/components/FooterWrapper.vue"
import LoginPopup from "@/components/LoginPopup.vue"
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar,
        ContactsWrapper,
        FooterWrapper,
        LoginPopup,
        RegisterPopup
    },
	data(){
		return{
			baseUrl: process.env.BASE_URL.replace(/\/$/, ''),
			shareUrl: window.location.href,
			jobId:0,
			job: null,
			jobs: []
		}
	},
	methods: {
		getJob(){
			return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/${this.jobId}`)
		},
		getJobsFromCompany(){
			return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/company/${this.job.company.id}`)
		}
	},
	async created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);
	
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
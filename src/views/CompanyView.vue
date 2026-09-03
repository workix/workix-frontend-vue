<template>
  <div id="">
      <PageLoader />
      <NavBar />
      <HeaderBar />

		<!-- ============ TITLE START ============ -->
		<section id="title" v-if="companyId != null || companyId > 0">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<img :src="`${baseUrl}/resources/placeholder/332x120.gif`" class="img-responsive" alt="" />
					</div>
				</div>
			</div>
		</section>
		<!-- ============ TITLE END ============ -->

		<section v-else>
			<h1> Company Id is not Defined</h1>
		</section>	

        <!-- ============ CONTENT START ============ -->
		<section id="jobs" v-if="companyId != null && companyId > 0 && company != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">
						<article>
							<h2>Sobre {{company.name}}</h2>
							<p>{{company.description}}</p>

							<hr>
							<h2>Vagas</h2>

							<div class="jobs">
								
								<!-- Job offer -->
								<template v-for="(j,i) in jobs" :key="i">
								<a :href="`#/vagas?id=${j.id}`">
									<div class="featured"></div>
									<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle img-responsive" />
									<div class="title">
										<h5>{{j.title}}</h5>
										<p>{{j.company.name}}</p>
									</div>
									<div class="data">
										<span class="city"><i class="fa fa-map-marker"></i> {{j.company.locale.city}}</span>
										<span class="type full-time"><i class="fa fa-clock-o"></i> {{j.jobType}}</span>
										<span class="sallary"><i class="fa fa-dollar"></i> {{$currency(j.maxPayment)}}</span>
									</div>
								</a>	
								</template>							

							</div>

						</article>
					</div>
					<div class="col-sm-4" id="sidebar">
						<div class="sidebar-widget" id="share">
							<h2>Redes Sociais</h2>
							<ul v-if="company.medias.length == 0">
								<li><a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a></li>
								<li><a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(company.name)}`" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a></li>
								<li><a :href="`https://api.whatsapp.com/send?text=${encodeURIComponent(company.name + ' - ' + shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i></a></li>
								<li><a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a></li>
							</ul>
							<ul v-else>
								<template v-for="(m,i) in company.medias" :key="i">
								<li><a :href="m.url"><i :class="getClass(m.media)"></i></a></li>
								</template>
							</ul>
						</div>
						<hr>
						<div class="sidebar-widget" id="widget-contact">
							<h2>Contato</h2>
							<ul>
								<li><i class="fa fa-building"></i>{{company.segment}}</li>
								<li><i class="fa fa-map-marker"></i>{{company.locale.street}}</li>
								<li><i class="fa"></i>{{company.locale.city}} - {{company.locale.estate}}, CEP {{$cep(company.locale.zipCode)}}</li>
								<li><i class="fa fa-phone"></i>{{$phone(company.contact.mobilePhone)}}</li>
								<li><i class="fa fa-envelope"></i><a :href="`mailto:${company.user.email}`">Enviar Email</a></li>
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
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
    components:{
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
			companyId: 0,
			company: null,
			jobs: []
		}
	},
    methods: {
		getCompany() {
			return this.$http.get(`http://localhost:8080/workix/services/v1/companies/${this.companyId}`)
		},
		getJobsFromCompany(){
			return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/company/${this.companyId}`)
		},
		getClass(media){
			switch (media) {
				case "Facebook":					
					return "fa fa-facebook"
				case "Twitter":
					return "fa fa-twitter"		
				case "Linkedin":
					return "fa fa-linkedin"
				case "instagram":
					return "fa fa-instagram"	
				case "GitHub":
					return "fa fa-github"
				default:
					break;
			}
		}
    },
	async created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);

	this.companyId = this.$route.query.id
	const {data} = await this.getCompany()
	this.company = data
	const resp = await this.getJobsFromCompany()
	this.jobs = resp.data
  }
}
</script>

<style>
 .jobs a {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin: 10px 0;
}
.jobs a .title{
    margin: 10px;
}
.jobs a .data {
    display: flex;
    flex-wrap: wrap;
}
.jobs a .data span{
    margin: 10px;
}
</style>
<template>
  <div id="">
      <PageLoader />
      <NavBar />
      <HeaderBar />
    <!-- ============ TITLE START ============ -->
		<section id="title" v-if="resumeId != null && resumeId > 0 && resume != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>{{resume.candidate.name}}</h1>
						<h4>{{resume.objective}}</h4>
					</div>
				</div>
			</div>
		</section>
    <!-- ============ TITLE END ============ -->

		<section v-else>
			<h1> Resume Id is not Defined</h1>
		</section>	


    <!-- ============ CONTENT START ============ -->
		<section id="jobs" v-if="resumeId != null && resumeId > 0 && resume != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">
						<article>
							<h2>Detalhes</h2>
							<img :src="`${baseUrl}/resources/placeholder/220x273.jpg`" alt="" class="img-responsive pull-left" />
							<p>{{resume.content}}</p>
							
							<h3>Habilidades</h3>
							<ul>
								<template v-for="(s,i) in resume.skills" :key="i">
								<li>{{s.skillName}}</li>
								</template>
							</ul>
							<h3>Experiência Profissional</h3>
							<template v-for="(exp,i) in resume.experiences" :key="i">
								<div class="row work-experience">
									
									<div class="col-sm-2">
										<div class="img-circle">
											<i class="fa fa-briefcase"></i>
										</div>
									</div>
									<div class="col-sm-10">
										<h4>{{exp.startDate.toLocaleDateString("pt-BR")}} - {{exp.endDate ? exp.endDate.toLocaleDateString("pt-BR") : "Atual"}}</h4>
										<h5>{{exp.employerName}} - {{exp.jobTitle}}</h5>
										<p>{{exp.description}}</p>
									</div>								
								</div>
							</template>
							
							<h3>Formação Acadêmica</h3>
							<template v-for="(edu, i) in resume.educations" :key="i">
							<div class="row work-experience">
								<div class="col-sm-2">
									<div class="img-circle">
										<i class="fa fa-graduation-cap"></i>
									</div>
								</div>
								<div class="col-sm-10">
									<h4>{{edu.startDate.toLocaleDateString("pt-BR")}} - {{edu.endDate ? edu.endDate.toLocaleDateString("pt-BR") : "Atual"}}</h4>
										<h5>{{edu.schoolName}} - {{edu.qualification}}</h5>
										<p>{{edu.description}}</p>
								</div>
							</div>
							</template>
						
							<p>&nbsp;</p>
							<p><a href="#" class="btn btn-primary btn-lg"><i class="fa fa-arrow-down"></i> Download Currículo</a></p>
						</article>
					</div>
					<div class="col-sm-4" id="sidebar">
						<div class="sidebar-widget" id="share">
							<h2>Compartilhar currículo</h2>
							<ul>
								<li><a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a></li>
								<li><a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(resume.candidate.name)}`" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a></li>
								<li><a :href="`https://api.whatsapp.com/send?text=${encodeURIComponent(resume.candidate.name + ' - ' + shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i></a></li>
								<li><a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
						<hr>
						<div class="sidebar-widget" id="widget-contact">
							<h2>Contato</h2>
							<ul>
								<li><i class="fa fa-user"></i>{{resume.candidate.name}}</li>
								<li><i class="fa fa-briefcase"></i>{{resume.objective}}</li>
								<li><i class="fa fa-birthday-cake"></i>{{resume.candidate.birthDate.toLocaleDateString("pt-BR")}}</li>
								<li><i class="fa fa-map-marker"></i>{{resume.candidate.locale.city}}</li>
								<li><i class="fa fa-phone"></i>{{$phone(resume.candidate.contact.mobilePhone)}}</li>
								<!-- Trigger the modal with a button -->
								<li><i class="fa fa-envelope"></i><a href="#" data-toggle="modal" data-target="#message-modal-mail">Enviar Email</a></li>
								<!-- Trigger the modal with a button -->
								<li><i class="fa fa-mobile fa-2x"></i><a href="#" data-toggle="modal" data-target="#message-modal-push">Enviar Mensagem Celular</a></li>
							</ul>
						</div>
						<hr>
						<div class="sidebar-widget" id="skills">
							<h2>Principais Habilidades</h2>
							<template v-for="(s,i) in resume.skills" :key="i">
							<a class="badge">{{s.skillName}}</a>
							</template>
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
	<MessageModalPush :user="resume.candidate.user" v-if="resume != null"/>
	<MessageModalMail :user="resume.candidate.user" v-if="resume != null" />
  </div>
</template>

<script>
import MessageModalPush from '@/components/MessageModalPush.vue'
import MessageModalMail from "@/components/MessageModalMail.vue"
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
    components:{
		MessageModalPush,
		MessageModalMail,
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
			resumeId: 0,
			resume: null,			
		}
	},
	async created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);

	this.resumeId = this.$route.query.id

	const resp = await this.getResume()
	this.resume = resp.data
  },
  methods: {
	getResume(){
		return this.$http.get(`http://localhost:8080/workix/services/v1/resumes/${this.resumeId}`)
	}
  }
}
</script>

<style>

</style>
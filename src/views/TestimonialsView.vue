<template>
  <div id="">
      <PageLoader />
      <NavBar />
      <HeaderBar />

      <!-- ============ TITLE START ============ -->

		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Depoimentos</h1>
						<h4>Histórias reais de quem já contratou ou foi contratado pela Workix</h4>
					</div>
				</div>
			</div>
		</section>

		<!-- ============ TITLE END ============ -->

    <!-- ============ TESTIMONIALS START ============ -->
		<section id="testimonials-long">
			<div class="container">

				<!-- Testimonial 1 -->
				<div class="row">
					<div class="col-sm-3 col-md-2">
						<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-circle img-responsive" alt="testimonial" />
					</div>
					<div class="col-sm-9 col-md-10">
						<blockquote>
							<p>Encontrei minha vaga atual em menos de duas semanas usando a Workix. A busca é direta, sem enrolação, e recebi retorno da empresa em poucos dias.</p>
							<footer>
								Ana Beatriz Souza
								<cite title="Desenvolvedora Full Stack">Desenvolvedora Full Stack</cite>
							</footer>
						</blockquote>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-12">
						<hr>
					</div>
				</div>

				<!-- Testimonial 2 -->
				<div class="row">
					<div class="col-sm-3 col-md-2">
						<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-circle img-responsive" alt="testimonial" />
					</div>
					<div class="col-sm-9 col-md-10">
						<blockquote>
							<p>Como recrutadora, consigo publicar vagas e encontrar candidatos qualificados muito mais rápido do que em outras plataformas — e sem pagar nada por isso.</p>
							<footer>
								Gabriela Ramos Duarte
								<cite title="Analista de RH, EduPlus Cursos Online">Analista de RH, EduPlus Cursos Online</cite>
							</footer>
						</blockquote>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-12">
						<hr>
					</div>
				</div>

				<!-- Testimonial 3 -->
				<div class="row">
					<div class="col-sm-3 col-md-2">
						<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-circle img-responsive" alt="testimonial" />
					</div>
					<div class="col-sm-9 col-md-10">
						<blockquote>
							<p>Já contratamos três pessoas pela Workix este ano. A qualidade dos currículos é sempre muito boa e o processo de contato com o candidato é simples.</p>
							<footer>
								Marcelo Vieira Costa
								<cite title="Consultor Jurídico, Construtora Horizonte">Consultor Jurídico, Construtora Horizonte</cite>
							</footer>
						</blockquote>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-12">
						<hr>
					</div>
				</div>

				<!-- Testimonial 4 -->
				<div class="row">
					<div class="col-sm-3 col-md-2">
						<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-circle img-responsive" alt="testimonial" />
					</div>
					<div class="col-sm-9 col-md-10">
						<blockquote>
							<p>Gostei muito da possibilidade de filtrar vagas remotas. Consegui uma posição sem precisar sair da minha cidade.</p>
							<footer>
								Camila Ferreira Rocha
								<cite title="Designer UX/UI">Designer UX/UI</cite>
							</footer>
						</blockquote>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-12">
						<hr>
					</div>
				</div>

				<!-- Testimonial 5 -->
				<div class="row">
					<div class="col-sm-3 col-md-2">
						<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-circle img-responsive" alt="testimonial" />
					</div>
					<div class="col-sm-9 col-md-10">
						<blockquote>
							<p>O cadastro do currículo é rápido e o suporte respondeu todas as minhas dúvidas no mesmo dia. Recomendo para quem está começando a carreira.</p>
							<footer>
								Diego Martins Alves
								<cite title="Engenheiro Civil">Engenheiro Civil</cite>
							</footer>
						</blockquote>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-12">
						<hr>
					</div>
				</div>

				<!-- Testimonial 6 -->
				<div class="row">
					<div class="col-sm-3 col-md-2">
						<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-circle img-responsive" alt="testimonial" />
					</div>
					<div class="col-sm-9 col-md-10">
						<blockquote>
							<p>Simples, rápido e sem burocracia. A Workix foi exatamente o que eu precisava para me recolocar no mercado depois de um período fora.</p>
							<footer>
								Otávio Pereira Nunes
								<cite title="Analista Financeiro">Analista Financeiro</cite>
							</footer>
						</blockquote>
					</div>
				</div>

			</div>
		</section>

		<!-- ============ TESTIMONIALS END ============ -->

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
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
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
			baseUrl: process.env.BASE_URL.replace(/\/$/, '')
		}
	},
	created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);
  }
}
</script>

<style>

</style>
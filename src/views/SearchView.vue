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
						<h1>Localizar</h1>
						<h4>Buscando por {{keyword}}</h4>
					</div>
				</div>
			</div>
		</section>

		<!-- ============ TITLE END ============ -->

        <section id="find">

        </section>

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
        return {
            keyword: ""
        }        
    },
    created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);
    this.keyword = this.$route.query.keyword
  }
}
</script>

<style>

</style>
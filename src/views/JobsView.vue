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
						<h1>Find a Job</h1>
						<h4>There is no better place to start</h4>
					</div>
				</div>
			</div>
		</section>
    <!-- ============ TITLE END ============ -->

    <JobsList />
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
import JobsList from '@/components/JobsList.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar,
        JobsList,
        ContactsWrapper,
        FooterWrapper,
        LoginPopup,
        RegisterPopup
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
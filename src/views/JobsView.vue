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
						<h1>Encontre um emprego</h1>
						<h4>Não há melhor lugar para começar</h4>
					</div>
				</div>
			</div>
		</section>
    <!-- ============ TITLE END ============ -->

    <JobsList :jobs="jobs" :paginator="paginator"/>
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
    data(){
      return {
        jobs: [],
        paginator: null
      }
    },
    methods:{        
      getJobs(page, limit){
        if (!page){
          page = 1
        }
        if(!limit){
          limit = 10
        }
        return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/paginated?page=${page}&limit=${limit}`)
      }
    },
    async created(){
      let ckeditor = document.createElement('script');  
      ckeditor.setAttribute('src',"js/settings.js");
      document.head.appendChild(ckeditor);

      let resp;	

      const page = this.$route.query.pagina
      const limit = this.$route.query.limite

      resp = await this.getJobs(page,limit)
      this.jobs = resp.data.rows
      this.paginator = resp.data	


  }
}
</script>

<style>

</style>
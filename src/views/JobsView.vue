<template>
  <div id="">        
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

  </div>
</template>

<script>
import JobsList from '@/components/JobsList.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
export default {
    components: {        
        JobsList,
        ContactsWrapper,        
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
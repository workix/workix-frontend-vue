<template>
  <div id="">    

    <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Candidatos</h1>
						<h4>Encontre o seu empregado perfeito</h4>
					</div>
				</div>
			</div>
		</section>
    <!-- ============ TITLE END ============ -->

    <CandidatesList :candidates="candidates" :paginator="paginator" />
    <ContactsWrapper />    
  </div>    
</template>

<script>

import CandidatesList from '@/components/CandidatesList.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
export default {
    components: {        
        CandidatesList,
        ContactsWrapper        
    },
    async created(){     

      let resp;	

      const page = this.$route.query.pagina
      const limit = this.$route.query.limite

      resp = await this.getCandidateResumePaginated(page,limit)
      this.candidates = resp.data.rows
      this.paginator = resp.data

      
  },
  data(){
    return {
      paginator: null,
      candidates: []
    }
  },
  methods:{
    getCandidateResumePaginated(page, limit){
         if (!page){
          page = 1
        }
        if(!limit){
          limit = 10
        }
      return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/resumes/list_with_candidates_short_paginated?page=${page}&limit=${limit}`)
    }
  }
}
</script>

<style>

</style>
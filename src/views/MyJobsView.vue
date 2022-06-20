<template>
  <div id="">      

    <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Vagas de {{companyName}}</h1>
						<h4>Todas as vagas criadas pela sua empresa</h4>
						<br/>
						<a href="/cadastrar_vaga" class="btn btn-primary btn-lg">Cadastrar uma nova Vaga</a>
						<br/>	
					</div>
				</div>
			</div>
		</section>

		<!-- ============ TITLE END ============ -->

        <!-- ============ JOBS START ============ -->
		<section id="jobs">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h2>Vagas</h2>

						<div class="jobs">
							
							<template v-for="(j,i) in jobs" :key="i">
								<!-- Job offer 1 -->
							<a :href="`/cadastrar_vaga?id=${j.id}`" class="">
								<div class="row">
									<div class="col-lg-1 col-md-1 hidden-sm hidden-xs">
										<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-responsive" />
									</div>
									<div class="col-lg-4 col-md-5 col-sm-6 col-xs-12 job-title">
										<h5>{{j.title}}</h5>
										<p><strong>{{j.description}}</strong> {{j.company.segment}}</p>
									</div>
									<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 job-location">
										<p><strong>{{j.company.locale.city}}, {{j.company.locale.estate}}, BRA</strong></p>
										<p class="hidden-xs">126.3 miles away</p>
									</div>
									<div class="col-lg-2 col-md-2 col-sm-2 hidden-xs job-type text-center">
										<p class="job-salary"><strong>R$ {{j.minPayment.toFixed(2)}} - {{j.maxPayment.toFixed(2)}}</strong></p>
										<p class="badge full-time">{{j.jobType}}</p>
									</div>
									<div class="col-lg-2 job-dates ">
										<p class="job-posted"><strong>Postada em  {{j.createdAt.toLocaleString("pt-BR").replace("T", " as ")}}</strong></p>
										<p class="job-closes">Closes Nov 16, 2015</p>
									</div>
								</div>
							</a>
														

							</template>							

						</div>

						<nav v-if="false">
							<ul class="pagination">
								<li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
								<li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#">5</a></li>
								<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
							</ul>
						</nav>

					</div>
				</div>
			</div>
		</section>

		<!-- ============ JOBS END ============ -->

      <ContactsWrapper />           
  </div>
</template>

<script>

import ContactsWrapper from '@/components/ContactsWrapper.vue'
import { useStore } from 'vuex'
import {computed} from 'vue'
export default {
	setup(){
		const store = useStore()
		const companyName = computed(()=> store.state.owner.name)
		
		return {companyName}
	},
    components: {        
        ContactsWrapper        
    },
	data(){
		return{
			baseUrl: window.location.origin,
			jobs: []
		}
	},
	async created(){

	const token = localStorage.getItem("jwt");

	if(token){
		const {data} = await this.getMyJobs(token)
		this.jobs = data
	}
	
  },
  methods: {
	getMyJobs(token){
		let config = { headers: { "Authorization": `Bearer ${token}` }}
		return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/jobs/my_jobs`, config)
	}
  }
}
</script>

<style>

</style>
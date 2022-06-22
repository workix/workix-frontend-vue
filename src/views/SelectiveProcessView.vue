<template>
  <div id="">
        
    <!-- ============ TITLE START ============ -->
        <section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Processos Seletivos</h1>
						<h4>Não há melhor lugar para começar</h4>
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

						<div class="jobs">
						<template v-for="(sp,i) in sps" :key="i">
							<!-- Job offer -->
							<a href="#">
								<div class="row">
									<div class="col-lg-1 col-md-1 hidden-sm hidden-xs">
										<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-responsive" />
									</div>
									
									<div class="col-lg-2 col-md-2 hidden-sm hidden-xs">
                                        <p>Ativo <span class="badge badge-pill badge-primary">{{sp.active ? "Sim": "Não"}}</span></p>									
									</div>

                                    <div class="col-lg-2 col-md-2 hidden-sm hidden-xs">
                                        <p>Qtd Candidatos <span class="badge badge-pill badge-primary">{{sp.candidates.length}} / {{sp.maxCandidates}}</span></p>
                                    </div> 
									<div class="col-lg-4 col-md-5 col-sm-6 col-xs-12 job-title">
										<h5>{{sp.job.title}}</h5>
										<p><strong>{{sp.job.company.name}}</strong> {{sp.job.company.segment}}</p>
									</div>
									<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 job-location">
										<p><strong>{{sp.job.company.locale.city}}, {{sp.job.company.locale.estate}}, BRA</strong></p>
										<p class="hidden-xs">1168.7 miles away</p>
									</div>
									<div class="col-lg-2 col-md-2 col-sm-2 hidden-xs job-type text-center">
										<p class="job-salary"><strong>R$ {{sp.job.minPayment.toFixed(2)}} - {{sp.job.maxPayment.toFixed(2)}}</strong></p>
										<p class="badge internship">{{sp.job.jobType}}</p>
									</div>
									<div class="col-lg-2 job-dates visible-lg-block">
										<p class="job-posted"><strong>Criada em {{sp.start.toLocaleString("pt-BR").replace("T", " as ")}}</strong></p>
										<p class="job-closes">Encerra em {{sp.expire.toLocaleString("pt-BR").replace("T", " as ")}}</p>
									</div>
								</div>
							</a>						

						</template>

						</div>

						<nav>
						<!-- PAGINATION START -->
						<ul class="pagination" data-scroll-reveal v-if="paginator">
							<li v-if="paginator.currentPage > 1"><a :href="`/processos_seletivos?pagina=${paginator.currentPage-1}&limite=${paginator.limitRows}`">Anterior &nbsp; <i class="fa fa-angle-left"></i></a></li>
							<li class="active"><a :href="`/processos_seletivos?pagina=${paginator.currentPage}&limite=${paginator.limitRows}`">{{paginator.currentPage}}</a></li>
							<!--<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>-->
							<li v-if="paginator.currentPage < paginator.totalPages"><a :href="`/processos_seletivos?pagina=${paginator.currentPage+1}&limite=${paginator.limitRows}`">Próxima &nbsp; <i class="fa fa-angle-right"></i></a></li>
						</ul>
						<!-- PAGINATION END -->
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
export default {
    components:{        
        ContactsWrapper       
    },
	data(){
		return{
			baseUrl: window.location.origin,
			sps: [],
			paginator: null
		}
	},
	methods:{
		getSelectiveProcessPaginated(page, limit){
			if (!page){
				page = 1
			}
			if (!limit){
				limit = 10
			}
			return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/selectiveprocesses/paginated?page=${page}&limit=${limit}`)
		}
	},
	async created(){
		const page = this.$route.query.pagina
		const limit = this.$route.query.limite

		const resp = await this.getSelectiveProcessPaginated(page,limit)
		this.sps = resp.data.rows
		this.paginator = resp.data		

	}
}
</script>

<style>

</style>
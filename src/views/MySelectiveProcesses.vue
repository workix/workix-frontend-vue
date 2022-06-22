<template>
      <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Processos Seletivos de {{companyName}}</h1>
						<h4>Todas os processos seletivos criadas pela sua empresa</h4>
						<br/>
						<a href="/cadastrar_processo_seletivo" class="btn btn-primary btn-lg">Criar novo Processo Seletivo</a>
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
						<h2>Processos Seletivos</h2>

						<div class="jobs">
							
							<template v-for="(sp,i) in sps" :key="i">
								<!-- Job offer -->
							<a :href="`/cadastrar_processo_seletivo?id=${sp.id}`" class="">
								<div class="row">
									<div class="col-lg-2 col-md-2 hidden-sm hidden-xs">
                                        <p>Ativo <span class="badge badge-pill badge-primary">{{sp.active ? "Sim": "Não"}}</span></p>
										<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-responsive" />
									</div>

                                    <div class="col-lg-2 col-md-2 hidden-sm hidden-xs">
                                        <p>Qtd Candidatos <span class="badge badge-pill badge-primary">{{sp.candidates.length}} / {{sp.maxCandidates}}</span></p>
                                    </div>                                    
									<div class="col-lg-4 col-md-5 col-sm-6 col-xs-12 job-title">
										<h5>{{sp.job.title}}</h5>
										<p><strong>{{sp.job.description}}</strong></p>
									</div>
									<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 job-location">
										<p><strong>{{sp.job.company.locale.city}}, {{sp.job.company.locale.estate}}, BRA</strong></p>
										<p class="hidden-xs">126.3 miles away</p>
									</div>
									<div class="col-lg-2 col-md-2 col-sm-2 hidden-xs job-type text-center">
										<p class="job-salary"><strong>R$ {{sp.job.minPayment.toFixed(2)}} - {{sp.job.maxPayment.toFixed(2)}}</strong></p>
										<p class="badge full-time">{{sp.job.jobType}}</p>
									</div>
									<div class="col-lg-2 job-dates ">
										<p class="job-posted"><strong>Criada em {{sp.start.toLocaleString("pt-BR").replace("T", " as ")}}</strong></p>
										<p class="job-closes">Expira em {{sp.expire.toLocaleString("pt-BR").replace("T", " as ")}}</p>
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
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue'
export default {
    setup(){
		const store = useStore()
		const companyName = computed(()=> store.state.owner.name)
		
		return {companyName}
	},
    data(){
        return {
            sps: []
        }
    },
    methods:{
        getSelectiveProcesses(token){
            let config = { headers: { "Authorization": `Bearer ${token}` }}
            return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/selectiveprocesses/my_selective_processes`, config)
        }
    },
    async created(){
    const token = localStorage.getItem("jwt");

	if(token){
		const {data} = await this.getSelectiveProcesses(token)
		this.sps = data
	}
	
    }
}
</script>

<style>

</style>
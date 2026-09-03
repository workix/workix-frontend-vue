<template>
      <!-- ============ JOBS START ============ -->
		<section id="jobs">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">

						<div class="jobs">						
							
							<!-- Job offer -->
							<template v-for="(j,i) in jobs" :key="i">
							<a :href="`#/detalhes_vaga?id=${j.id}`">
								<div class="row">
									<div class="col-md-1 hidden-sm hidden-xs">
										<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-responsive" />
									</div>
									<div class="col-lg-5 col-md-5 col-sm-7 col-xs-12 job-title">
										<h5>{{j.title}}</h5>
										<p><strong>{{j.company.name}}</strong> {{j.company.segment}}</p>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-5 col-xs-12 job-location">
										<p><strong>{{j.company.locale.city}}, {{j.company.locale.estate}}, BR</strong></p>
									</div>
									<div class="col-lg-2 col-md-2 col-xs-12 job-type text-center">
										<p class="job-salary"><strong>{{$currency(j.maxPayment)}}</strong></p>
										<p :class="getBadge(j.jobType)">{{j.jobType}}</p>
									</div>
								</div>
							</a>
							</template>

							<!-- JOB A CLASSES -->
							<!-- featured applied
							featured
							applied or EMPTY -->

						</div>

						<nav>
						<!-- PAGINATION START -->
						<ul class="pagination" data-scroll-reveal v-if="paginator">
							<li v-if="paginator.currentPage > 1"><a :href="`#/vagas?pagina=${paginator.currentPage-1}&limite=${paginator.limitRows}`">Anterior &nbsp; <i class="fa fa-angle-left"></i></a></li>
							<li class="active"><a :href="`#/vagas?pagina=${paginator.currentPage}&limite=${paginator.limitRows}`">{{paginator.currentPage}}</a></li>
							<!--<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>-->
							<li v-if="paginator.currentPage < paginator.totalPages"><a :href="`#/vagas?pagina=${paginator.currentPage+1}&limite=${paginator.limitRows}`">Próxima &nbsp; <i class="fa fa-angle-right"></i></a></li>
						</ul>
						<!-- PAGINATION END -->
						</nav>

					</div>
					<div class="col-sm-4" id="sidebar">

						<!-- Featured Jobs Start -->
						<div class="sidebar-widget" v-if="featuredJob">
							<h2>Vaga Destaque</h2>
							<a :href="`#/detalhes_vaga?id=${featuredJob.id}`">
								<img :src="`${baseUrl}/resources/placeholder/400x265.jpg`" alt="Featured Job" class="img-responsive" />
								<div class="featured-job">
									<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle pull-left" />
									<div class="title">
										<h5>{{featuredJob.title}}</h5>
										<p>{{featuredJob.company.name}}</p>
									</div>
									<div class="data">
										<span class="city"><i class="fa fa-map-marker"></i>{{featuredJob.company.locale.city}}</span>
										<span class="type full-time"><i class="fa fa-clock-o"></i>{{featuredJob.jobType}}</span>
										<span class="sallary"><i class="fa fa-dollar"></i>{{$currency(featuredJob.minPayment)}} - {{$currency(featuredJob.maxPayment)}}</span>
									</div>
									<div class="description">{{featuredJob.description}}</div>
								</div>
							</a>
						</div>
						<!-- Featured Jobs End -->

						<!-- Find a Job Start -->
						<div class="sidebar-widget" id="jobsearch">
							<h2>Buscar Vaga</h2>
							<form>
								<div class="row">
									<div class="col-xs-12">
										<div class="form-group" id="job-search-group">
											<label for="job-search" class="sr-only">Buscar</label>
											<input type="text" class="form-control" id="job-search" placeholder="Digite e pressione Enter">
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<hr>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-6">
										<h5>Nível de Carreira</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Todos os Níveis
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Júnior
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Pleno
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Sênior
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Especialista
											</label>
										</div>
									</div>
									<div class="col-xs-6">
										<h5>Modelo de Trabalho</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Todos
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Remoto
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Presencial
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Híbrido
											</label>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<hr>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-6">
										<h5>Tipo de Vaga</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Todos os Tipos
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Freelance
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Meio Período
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Tempo Integral
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Estágio
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Temporário
											</label>
										</div>
									</div>
									<div class="col-xs-6">
										<h5>Localização</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Todas as Cidades
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> São Paulo
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Rio de Janeiro
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Curitiba
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Belo Horizonte
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Florianópolis
											</label>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<hr>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<h5>Salário</h5>
										<div class="form-slider" id="salary"></div>
										<p>De <b><span id="salary-field-lower"></span></b> até <b><span id="salary-field-upper"></span></b></p>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<hr>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<a class="btn btn-primary">Limpar Filtros</a>
									</div>
								</div>
							</form>
						</div>
						<!-- Find a Job End -->

					</div>
				</div>
			</div>
		</section>
    <!-- ============ JOBS END ============ -->
</template>

<script>
export default {
	props:{
		jobs: Array,
		paginator: Object
	},
	data(){
		return {
			baseUrl: process.env.BASE_URL.replace(/\/$/, ''),
			featuredJob: null
		}
	},
	methods:{
		getBadge(jobType){
            switch (jobType) {
                case "FULLTIME":
                    return "badge full-time"               
                case "PARTTIME":
                    return "badge part-time"
                case "FREELANCE":
                    return "badge freelance"
                case "TEMPORARY":
                    return "badge temporary"    
                case "INTERNSHIP":
                    return "badge internship"        
                default:
                    return
            }
        },
		getRandomFeaturedJob() {
			return this.$http.get(`http://localhost:8080/workix/services/v1/jobs/random_featured`)
		},
	},
	async created(){
		const {data} = await this.getRandomFeaturedJob()
		this.featuredJob = data
	}
}
</script>

<style>

</style>
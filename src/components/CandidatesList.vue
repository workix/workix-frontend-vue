<template>
    <!-- ============ JOBS START ============ -->
		<section id="jobs">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">
						<h2>Candidatos</h2>

						<div class="jobs">
							
							<!-- Candidate -->
							<!-- possible class to a : featured -->
							<template v-for="(c,i) in candidates" :key="i">
								<a :href="`#/curriculo?id=${c.id}`">
									<div class="row">
										<div class="col-xs-3 col-sm-2 col-lg-1">
											<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle img-responsive" />
										</div>
										<div class="col-xs-9 col-sm-4 col-md-5 col-lg-4 candidate-name">
											<h5>{{c.name}}</h5>
											<p><strong>{{c.objective}}</strong></p>
										</div>
										<div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 candidate-location">
											<p><strong>{{c.city}}, {{c.estate}}, BRA</strong></p>
										</div>
										<div class="col-lg-3">
											<p class="candidate-tags">
												<span class="badge">{{c.carrerLevel}}</span> &nbsp;&nbsp;
												<span class="badge">{{c.presence}}</span>
											</p>
										</div>
									</div>
								</a>
							</template>

						</div>

						<nav>
						<!-- PAGINATION START -->
						<ul class="pagination" data-scroll-reveal v-if="paginator">
							<li v-if="paginator.currentPage > 1"><a :href="`#/candidatos?pagina=${paginator.currentPage-1}&limite=${paginator.limitRows}`">Anterior &nbsp; <i class="fa fa-angle-left"></i></a></li>
							<li class="active"><a :href="`#/candidatos?pagina=${paginator.currentPage}&limite=${paginator.limitRows}`">{{paginator.currentPage}}</a></li>
							<!--<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>-->
							<li v-if="paginator.currentPage < paginator.totalPages"><a :href="`#/candidatos?pagina=${paginator.currentPage+1}&limite=${paginator.limitRows}`">Próxima &nbsp; <i class="fa fa-angle-right"></i></a></li>
						</ul>
						<!-- PAGINATION END -->
						</nav>


					</div>
					<div class="col-sm-4" id="sidebar">

						<!-- Featured Candidate Start -->
						<div class="sidebar-widget" v-if="featuredCandidate">
							<h2>Candidato em Destaque</h2>
							<a :href="`#/curriculo?id=${featuredCandidate.id}`">
								<img :src="`${baseUrl}/resources/placeholder/400x260.jpg`" alt="Candidato em Destaque" class="img-responsive" />
								<div class="featured-job">
									<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle pull-left" />
									<div class="title">
										<h5>{{featuredCandidate.name}}</h5>
										<p>{{featuredCandidate.objective}}</p>
									</div>
									<div class="data">
										<span class="city"><i class="fa fa-map-marker"></i>{{featuredCandidate.city}}, {{featuredCandidate.estate}}</span>
										<span class="experience"><i class="fa fa-trophy"></i>{{featuredCandidate.carrerLevel}}</span>
										<span class="sallary"><i class="fa fa-globe"></i>{{featuredCandidate.presence}}</span>
									</div>
									<div class="description">Currículo completo cadastrado na Workix, disponível para novas oportunidades.</div>
								</div>
							</a>
						</div>
						<!-- Featured Candidate End -->

						<!-- Find a Candidate Start -->
						<div class="sidebar-widget" id="jobsearch">
							<h2>Buscar Candidato</h2>
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
										<h5>Tipo de Vaga Desejado</h5>
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
										<a class="btn btn-primary">Limpar Filtros</a>
									</div>
								</div>
							</form>
						</div>
						<!-- Find a Candidate End -->

					</div>
				</div>
			</div>
		</section>
		<!-- ============ JOBS END ============ -->
</template>

<script>
export default {
	props: {
		candidates: Array,
		paginator: Object
	},
	data(){
		return{
			baseUrl: process.env.BASE_URL.replace(/\/$/, '')
		}
	},
	computed: {
		featuredCandidate(){
			return this.candidates && this.candidates.length ? this.candidates[0] : null
		}
	}
}
</script>

<style>

</style>
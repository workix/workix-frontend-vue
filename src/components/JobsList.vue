<template>
      <!-- ============ JOBS START ============ -->
		<section id="jobs">
			<div class="container">
				<div class="row">
					<div class="col-sm-8">

						<div class="jobs">						
							
							<!-- Job offer -->
							<template v-for="(j,i) in jobs" :key="i">
							<a :href="`/detalhes_vaga?id=${j.id}`">
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
										<p class="hidden-xs">1168.7 miles away</p>
									</div>
									<div class="col-lg-2 col-md-2 hidden-sm hidden-xs job-type text-center">
										<!-- <p class="job-salary"><strong>R$ {{j.minPayment.toFixed(2)}} - {{j.maxPayment.toFixed(2)}}</strong></p>-->
										<p class="job-salary"><strong>R$ {{j.maxPayment.toFixed(2)}}</strong></p>
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
							<li v-if="paginator.currentPage > 1"><a :href="`/vagas?pagina=${paginator.currentPage-1}&limite=${paginator.limitRows}`">Anterior &nbsp; <i class="fa fa-angle-left"></i></a></li>
							<li class="active"><a :href="`/vagas?pagina=${paginator.currentPage}&limite=${paginator.limitRows}`">{{paginator.currentPage}}</a></li>
							<!--<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>-->
							<li v-if="paginator.currentPage < paginator.totalPages"><a :href="`/vagas?pagina=${paginator.currentPage+1}&limite=${paginator.limitRows}`">Próxima &nbsp; <i class="fa fa-angle-right"></i></a></li>
						</ul>
						<!-- PAGINATION END -->
						</nav>

					</div>
					<div class="col-sm-4" id="sidebar">

						<!-- Featured Jobs Start -->
						<div class="sidebar-widget" v-if="featuredJob">
							<h2>Vaga Destaque</h2>
							<a :href="`/detalhes_vaga?id=${featuredJob.id}`">
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
										<span class="sallary"><i class="fa fa-dollar"></i>R$ {{featuredJob.minPayment.toFixed(2)}} - {{featuredJob.maxPayment.toFixed(2)}}</span>
									</div>
									<div class="description">{{featuredJob.description}}</div>
								</div>
							</a>
						</div>
						<!-- Featured Jobs End -->

						<!-- Find a Job Start -->
						<div class="sidebar-widget" id="jobsearch">
							<h2>Find a Job</h2>
							<form>
								<div class="row">
									<div class="col-xs-12">
										<div class="form-group" id="job-search-group">
											<label for="job-search" class="sr-only">Search</label>
											<input type="text" class="form-control" id="job-search" placeholder="Type and press enter">
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
										<h5>Career Level</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> All Types
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Junior
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Middle
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Senior
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Expert
											</label>
										</div>
									</div>
									<div class="col-xs-6">
										<h5>Presence</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> All Types
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Remote
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Office
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Relocation
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Travel a lot
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
										<h5>Job Type</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> All Types
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Freelance
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Part Time
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Full Time
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Internship
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Volunteer
											</label>
										</div>
									</div>
									<div class="col-xs-6">
										<h5>Location</h5>
										<div class="checkbox">
											<label>
												<input type="checkbox"> All Types
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> New York
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Los Angeles
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> San Francisco
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Chicago
											</label>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox"> Boston
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
										<h5>Experience</h5>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-6">
										<p>More than <b><span id="years-field"></span></b> years</p>
									</div>
									<div class="col-xs-6">
										<div class="form-slider" id="years"></div>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<hr>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<h5>Salary</h5>
										<div class="form-slider" id="salary"></div>
										<p>From <b><span id="salary-field-lower"></span></b> to  <b><span id="salary-field-upper"></span></b></p>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<hr>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<a class="btn btn-primary">Reset All Filters</a>
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
			baseUrl: window.location.origin,
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
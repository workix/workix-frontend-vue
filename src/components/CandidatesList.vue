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
								<a :href="`/curriculo?id=${c.id}`">
									<div class="row">
										<div class="col-xs-3 col-sm-2 col-lg-1">
											<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle img-responsive" />
										</div>
										<div class="col-xs-9 col-sm-4 col-md-5 col-lg-4 candidate-name">
											<h5>{{c.name}}</h5>
											<p><strong>{{c.objective}}</strong></p>
										</div>
										<div class="hidden-xs col-sm-6 col-md-5 col-lg-4 candidate-location">
											<p><strong>{{c.city}}, {{c.estate}}, BRA</strong></p>
											<p>743.6 mi away</p>
										</div>
										<div class="col-lg-3">
											<p class="candidate-date">Updated 5 days ago</p>
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
							<li v-if="paginator.currentPage > 1"><a :href="`/candidatos?pagina=${paginator.currentPage-1}&limite=${paginator.limitRows}`">Anterior &nbsp; <i class="fa fa-angle-left"></i></a></li>
							<li class="active"><a :href="`/candidatos?pagina=${paginator.currentPage}&limite=${paginator.limitRows}`">{{paginator.currentPage}}</a></li>
							<!--<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>-->
							<li v-if="paginator.currentPage < paginator.totalPages"><a :href="`/candidatos?pagina=${paginator.currentPage+1}&limite=${paginator.limitRows}`">Próxima &nbsp; <i class="fa fa-angle-right"></i></a></li>
						</ul>
						<!-- PAGINATION END -->
						</nav>


					</div>
					<div class="col-sm-4" id="sidebar">

						<!-- Featured Jobs Start -->
						<div class="sidebar-widget">
							<h2>Featured Candidate</h2>
							<a href="#">
								<img :src="`${baseUrl}/resources/placeholder/400x260.jpg`" alt="Featured Job" class="img-responsive" />
								<div class="featured-job">
									<img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle pull-left" />
									<div class="title">
										<h5>Susie Johnson</h5>
										<p>Project Manager</p>
									</div>
									<div class="data">
										<span class="city"><i class="fa fa-map-marker"></i>New York City</span>
										<span class="experience"><i class="fa fa-trophy"></i>12 years</span>
										<span class="sallary"><i class="fa fa-dollar"></i>45,000</span>
									</div>
									<div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique euismod lorem, a consequat orci consequat a. Donec ullamcorper tincidunt nunc, ut aliquam est pellentesque porta. In neque erat, malesuada sit amet orci ac, laoreet laoreet mauris.</div>
								</div>
							</a>
						</div>
						<!-- Featured Jobs End -->

						<!-- Find a Job Start -->
						<div class="sidebar-widget" id="jobsearch">
							<h2>Find a Candidate</h2>
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
	props: {
		candidates: Array,
		paginator: Object
	},
	data(){
		return{
			baseUrl: window.location.origin
		}
	}
}
</script>

<style>

</style>
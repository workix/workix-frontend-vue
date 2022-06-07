<template>
    <!-- ============ CLIENTS START ============ -->
		<section id="clients">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Happy Clients</h1>
						<h4>Some of the many companies we’ve helped</h4>
						<div class="owl-carousel">
							
							<!-- Logo 1 -->
							<div>
								<a href="company.html"><img :src="`${baseUrl}/resources/placeholder/133x69.gif`" alt="" /></a>
							</div>
							
							<!-- Logo 2 -->
							<div>
								<a href="company.html"><img :src="`${baseUrl}/resources/placeholder/133x69.gif`" alt="" /></a>
							</div>
							
							<!-- Logo 3 -->
							<div>
								<a href="company.html"><img :src="`${baseUrl}/resources/placeholder/133x69.gif`" alt="" /></a>
							</div>
							
							<!-- Logo 4 -->
							<div>
								<a href="company.html"><img :src="`${baseUrl}/resources/placeholder/133x69.gif`" alt="" /></a>
							</div>
							
							<!-- Logo 5 -->
							<div>
								<a href="company.html"><img :src="`${baseUrl}/resources/placeholder/133x69.gif`" alt="" /></a>
							</div>
							
							<!-- Logo 6 -->
							<div>
								<a href="company.html"><img :src="`${baseUrl}/resources/placeholder/133x69.gif`" alt="" /></a>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ CLIENTS END ============ -->
</template>

<script>
export default {
	data(){
		return{
			baseUrl: window.location.origin
		}
	}
}
</script>

<style>

</style>
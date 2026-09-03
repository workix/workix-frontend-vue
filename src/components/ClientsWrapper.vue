<template>
    <!-- ============ CLIENTS START ============ -->
		<section id="clients">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Clientes Satisfeitos</h1>
						<h4>ALGUMAS DAS MUITAS EMPRESAS QUE JÁ AJUDAMOS</h4>
						<div class="owl-carousel">
							
							<!-- Logo -->
							<div v-for="(c,i) in companies" :key="i">
								<a :href="`#/empresa?id=${c.id}`"><img :src="c.logo" alt="" class="img-responsive" /></a>
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
			baseUrl: process.env.BASE_URL.replace(/\/$/, ''),
			companies: [
				{id: 1, logo: `${process.env.BASE_URL.replace(/\/$/, '')}/resources/placeholder/133x69.gif`},
				{id: 2, logo: `${process.env.BASE_URL.replace(/\/$/, '')}/resources/placeholder/133x69.gif`},
				{id: 3, logo: `${process.env.BASE_URL.replace(/\/$/, '')}/resources/placeholder/133x69.gif`},
				{id: 4, logo: `${process.env.BASE_URL.replace(/\/$/, '')}/resources/placeholder/133x69.gif`},
				{id: 5, logo: `${process.env.BASE_URL.replace(/\/$/, '')}/resources/placeholder/133x69.gif`},
				{id: 6, logo: `${process.env.BASE_URL.replace(/\/$/, '')}/resources/placeholder/133x69.gif`},
			]
		}
	}
}
</script>

<style>

</style>
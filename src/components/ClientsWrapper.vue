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
								<a :href="`/empresa?id=${c.id}`"><img :src="c.logo" alt="" /></a>
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
			baseUrl: window.location.origin,
			companies: [
				{id: 1, logo: `${window.location.origin}/resources/placeholder/133x69.gif`},
				{id: 2, logo: `${window.location.origin}/resources/placeholder/133x69.gif`},
				{id: 3, logo: `${window.location.origin}/resources/placeholder/133x69.gif`},
				{id: 4, logo: `${window.location.origin}/resources/placeholder/133x69.gif`},
				{id: 5, logo: `${window.location.origin}/resources/placeholder/133x69.gif`},
				{id: 6, logo: `${window.location.origin}/resources/placeholder/133x69.gif`},
			]
		}
	}
}
</script>

<style>

</style>
<template>
    <!-- ============ COMPANIES START ============ -->
		<section id="companies" class="color1">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h2>Empresas em Destaque</h2>
						<ul id="featured-companies" class="row">
							
							<li class="col-sm-4 col-md-3" v-for="(o,i) in logos" :key="i">
								<a :href="`/empresa?id=${o.id}`">
									<img :src="`${o.logo}`" alt="" />
									<span class="badge">{{o.id}}</span>
								</a>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
		</section>
	<!-- ============ COMPANIES END ============ -->
</template>

<script>
export default {
	data(){
		return{
			baseUrl: window.location.origin,
			logos: []
		}
	},
	methods:{
		getRandomLogos(start, max){
			return this.$http.get(`http://localhost:8080/workix/services/v1/companies/logos?start=${start}&max=${max}`)
		}
	},
	async created(){
		const {data} = await this.getRandomLogos(0,12)
		this.logos = data
	}
}
</script>

<style>

</style>
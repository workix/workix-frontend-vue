<template>
    <!-- ============ TESTIMONIALS START ============ -->
		<section id="testimonials" class="parallax text-center">
			<div class="tint"></div>
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h1>Depoimentos</h1>
						<h4>Algumas palavras de Candidatos Satisfeitos</h4>
						<div class="owl-carousel">

							<!-- Testimonial -->							
							<template v-for="(t,i) in testimonials" :key="i">
								<TestimonialMessage :testimonial="t" />								
							</template>					
							

						</div>
						<p><a href="/depoimentos" class="btn btn-primary">Ler Todos</a></p>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ TESTIMONIALS END ============ -->
</template>

<script>
import TestimonialMessage from '@/components/TestimonialMessage.vue'
export default {
	components: {
		TestimonialMessage
	},
	data(){
		return{
			baseUrl: window.location.origin,
			testimonials: []
		}
	},
	methods: {
		async getTestimonials(start, max){
			const { data } = await this.$http.get(`http://localhost:8080/workix/services/v1/testimonials?start=${start}&max=${max}`)
			this.testimonials = data			
		}
	},
	async created(){
		await this.getTestimonials(0,4)
	}
}
</script>

<style>

</style>
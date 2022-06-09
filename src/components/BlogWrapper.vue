<template>
    <!-- ============ BLOG START ============ -->
		<section id="blog">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Últimas notícias</h1>
						<h4>Fique por dentro do mundo Empresarial</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<div class="owl-carousel">							

							<!-- Blog post  -->
							<!-- TODO FIX ME -->
						
							<template v-for="(b,i) in blogs" :key="i">
								<BlogPost :blog="b" />
							</template>

						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ BLOG END ============ -->
</template>

<script>
// eslint-disable-next-line 
import BlogPost from '@/components/blogs/BlogPost.vue'
export default {
	components:{
		// eslint-disable-next-line 
		BlogPost
	},
	data(){
		return{
			baseUrl: window.location.origin,
			blogs: []
		}
	},
	methods:{
		getBlogPosts(start, max){
			return this.$http.get(`http://localhost:8080/workix/services/v1/blogs?start=${start}&max=${max}`)
		}
	},
	async created(){
		const {data} = await this.getBlogPosts(0,5)
		this.blogs = data
	}
}
</script>

<style>

</style>
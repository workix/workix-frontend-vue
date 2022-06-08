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
							<!-- 
								<template v-for="(b,i) in blogs" :key="i">
									<BlogPost :blog="b" />
								</template>
							-->							

							<!-- Blog post 1 -->
							<div>
								<img :src="`${baseUrl}/resources/placeholder/800x530.jpg`" class="img-responsive" alt="Blog Post" />
								<h4>Lorem ipsum dolor sit amet</h4>
								<h5>
									<span><i class="fa fa-calendar"></i>28.08.2015</span>
									<span><i class="fa fa-comment"></i>8 Comments</span>
								</h5>
								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
								<p><a href="post.html" class="btn btn-primary">Read more</a></p>
							</div>

							<!-- Blog post 2 -->
							<div>
								<img :src="`${baseUrl}/resources/placeholder/800x530.jpg`" class="img-responsive" alt="Blog Post" />
								<h4>Lorem ipsum dolor sit amet</h4>
								<h5>
									<span><i class="fa fa-calendar"></i>28.08.2015</span>
									<span><i class="fa fa-comment"></i>8 Comments</span>
								</h5>
								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
								<p><a href="post.html" class="btn btn-primary">Read more</a></p>
							</div>

							<!-- Blog post 3 -->
							<div>
								<img :src="`${baseUrl}/resources/placeholder/800x530.jpg`" class="img-responsive" alt="Blog Post" />
								<h4>Lorem ipsum dolor sit amet</h4>
								<h5>
									<span><i class="fa fa-calendar"></i>28.08.2015</span>
									<span><i class="fa fa-comment"></i>8 Comments</span>
								</h5>
								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
								<p><a href="post.html" class="btn btn-primary">Read more</a></p>
							</div>

							<!-- Blog post 4 -->
							<div>
								<img :src="`${baseUrl}/resources/placeholder/800x530.jpg`" class="img-responsive" alt="Blog Post" />
								<h4>Lorem ipsum dolor sit amet</h4>
								<h5>
									<span><i class="fa fa-calendar"></i>28.08.2015</span>
									<span><i class="fa fa-comment"></i>8 Comments</span>
								</h5>
								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
								<p><a href="post.html" class="btn btn-primary">Read more</a></p>
							</div>

							<!-- Blog post 5 -->
							<div>
								<img :src="`${baseUrl}/resources/placeholder/800x530.jpg`" class="img-responsive" alt="Blog Post" />
								<h4>Lorem ipsum dolor sit amet</h4>
								<h5>
									<span><i class="fa fa-calendar"></i>28.08.2015</span>
									<span><i class="fa fa-comment"></i>8 Comments</span>
								</h5>
								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
								<p><a href="post.html" class="btn btn-primary">Read more</a></p>
							</div>

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
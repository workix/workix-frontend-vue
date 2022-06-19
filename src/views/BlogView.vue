<template>
  <div id="">   

    <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Blog</h1>
						<h4>Últimas notícias</h4>
					</div>
				</div>
			</div>
		</section>

	<!-- ============ TITLE END ============ -->

    <!-- ============ CONTENT START ============ -->
		<section id="blog">
			<div class="container">
				<div class="row">

					<!-- POSTS START -->
					<div class="col-sm-8">
						<article>
							<template v-for="(p,i) in posts" :key="i">
							<div class="post row">
								<div class="col-sm-2">
									<img :src="p.author.picture" alt="" class="img-responsive img-circle" />
								</div>
								<div class="col-sm-10">
									<h2>{{p.title}}</h2>
									<div class="meta">
										<span><i class="fa fa-user"></i>{{p.author.name}}</span>
										<span><i class="fa fa-calendar"></i>{{p.date.toLocaleString("pt-BR")}}</span>
										<span><i class="fa fa-comment"></i>{{p.comments.length}}</span>
									</div>
									<p><img :src="p.pictures[0]" alt="" class="img-responsive" /></p>
									<p>{{p.resume}}</p>
									<a :href="`/postagem?id=${p.id}`" class="btn btn-primary">Leia mais &nbsp; <i class="fa fa-arrow-right"></i></a>
								</div>
							</div>

							<hr>
							</template>							

						<!-- PAGINATION START -->
						<ul class="pagination" data-scroll-reveal v-if="paginator">
							<li v-if="paginator.currentPage > 1"><a :href="`/blog?pagina=${paginator.currentPage-1}&limite=${paginator.limitRows}`">Anterior &nbsp; <i class="fa fa-angle-left"></i></a></li>
							<li class="active"><a :href="`/blog?pagina=${paginator.currentPage}&limite=${paginator.limitRows}`">{{paginator.currentPage}}</a></li>
							<!--<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>-->
							<li v-if="paginator.currentPage < paginator.totalPages"><a :href="`/blog?pagina=${paginator.currentPage+1}&limite=${paginator.limitRows}`">Próxima &nbsp; <i class="fa fa-angle-right"></i></a></li>
						</ul>
						<!-- PAGINATION END -->

						</article>
					</div>

					<!-- POSTS END -->

					<BlogSideBar />

				</div>
			</div>
		</section>

		<!-- ============ CONTENT END ============ -->

      <ContactsWrapper />           

  </div>
</template>

<script>
import BlogSideBar from '@/components/blogs/BlogSideBar.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
export default {
    components:{        
		BlogSideBar,
        ContactsWrapper        
    },
	data(){
		return{
			baseUrl: window.location.origin,			
			posts:[],
			paginator: null
		}
	},
	async created(){	

	let resp;	

	const page = this.$route.query.pagina
	const limit = this.$route.query.limite
	resp = await this.getPosts(page,limit)
	this.posts = resp.data.rows
	this.paginator = resp.data	
  }, 
  methods:{	
	getPosts(page, limit){
		if (!page){
			page = 1
		}
		if(!limit){
			limit = 10
		}
		return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/blogs/paginated?page=${page}&limit=${limit}`)
	}
  }
}
</script>

<style>

</style>
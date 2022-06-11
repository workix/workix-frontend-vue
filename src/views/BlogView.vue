<template>
  <div id="">
    <PageLoader />
    <NavBar />
    <HeaderBar />

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

					<!-- SIDEBAR START -->

					<div class="col-sm-4" id="sidebar">

						<div class="sidebar-links" id="categories">
							<h5>
								<span class="fa-stack fa-lg">
									<i class="fa fa-circle fa-stack-2x"></i>
									<i class="fa fa-folder fa-stack-1x fa-inverse"></i>
								</span>
								Categorias
							</h5>
							<ul>
								<template v-for="(c,i) in categories" :key="i">
									<li><a :href="`/blog?categoria=${c}`">{{c}}</a></li>								
								</template>
							</ul>
						</div>

						<div class="sidebar-links" id="archives">
							<h5>
								<span class="fa-stack fa-lg">
									<i class="fa fa-circle fa-stack-2x"></i>
									<i class="fa fa-archive fa-stack-1x fa-inverse"></i>
								</span>
								Arquivos
							</h5>
							<ul>
								<template v-for="(tp,i) in timePeriods" :key="i">
								<li><a :href="`/blog?periodo=${tp.month} ${tp.year}`">{{getMonth(tp.month)}} {{tp.year}}</a></li>								
								</template>
							</ul>
						</div>

						<div class="sidebar-links" id="recent-posts">
							<h5>
								<span class="fa-stack fa-lg">
									<i class="fa fa-circle fa-stack-2x"></i>
									<i class="fa fa-flag fa-stack-1x fa-inverse"></i>
								</span>
								Postagems Recentes
							</h5>
							<ul>
								<template v-for="(rp,i) in recentPosts" :key="i">
								<li><a :href="`/postagem?id=${rp.id}`"><span class="meta">{{rp.date.toLocaleString("pt-BR")}} por {{rp.author.name}}</span>{{rp.title}}</a></li>
								</template>
							</ul>
						</div>

						<div class="sidebar-links" id="recent-comments">
							<h5>
								<span class="fa-stack fa-lg">
									<i class="fa fa-circle fa-stack-2x"></i>
									<i class="fa fa-flag fa-stack-1x fa-inverse"></i>
								</span>
								Comentários Recentes
							</h5>
							<ul>
								<template v-for="(rc,i) in recentComments" :key="i">
								<li><a href="#"><span class="meta">{{rc.name}} comentou</span>{{rc.text}}</a></li>
								</template>
							</ul>
						</div>

					</div>

					<!-- SIDEBAR END -->

				</div>
			</div>
		</section>

		<!-- ============ CONTENT END ============ -->

      <ContactsWrapper />      
      <FooterWrapper />
      <LoginPopup />
      <RegisterPopup />

  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
    components:{
        PageLoader,
        NavBar,
        HeaderBar,
        ContactsWrapper,        
        FooterWrapper,
        LoginPopup,
        RegisterPopup
    },
	data(){
		return{
			baseUrl: window.location.origin,
			categories: [],
			posts:[],
			timePeriods: [],
			recentPosts: [],
			recentComments: [],
			paginator: null
		}
	},
	async created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);

	let resp;
	resp = await this.getCategories()
	this.categories = resp.data

	const page = this.$route.query.pagina
	const limit = this.$route.query.limite
	resp = await this.getPosts(page,limit)
	this.posts = resp.data.rows
	this.paginator = resp.data

	resp = await this.getTimePeriods()
	this.timePeriods = resp.data

	resp = await this.getRecentPosts(0,4)
	this.recentPosts = resp.data

	resp = await this.getRecentComments(0,4)
	this.recentComments = resp.data
  }, 
  methods:{
	getMonth(month){
		switch (month) {
			case 1:				
				return "Janeiro"
			case 2:				
				return "Fevereiro"		
			case 3:				
				return "Março"
			case 4:				
				return "Abril"
			case 5:				
				return "Maio"
			case 6:				
				return "Junho"
			case 7:				
				return "Julho"
			case 8:				
				return "Agosto"
			case 9:				
				return "Setembro"
			case 10:				
				return "Outubro"
			case 11:				
				return "Novembro"
			case 12:				
				return "Dezembro"
			default:
				return "Desconhecido"
		}
	},
	getCategories(){
		return this.$http.get("http://localhost:8080/workix/services/v1/blogs/categories")
	},
	getTimePeriods(){
		return this.$http.get("http://localhost:8080/workix/services/v1/blogs/time_periods")
	},
	getRecentPosts(start, max){
		return this.$http.get(`http://localhost:8080/workix/services/v1/blogs/recents?start=${start}&max=${max}`)
	},
	getRecentComments(start , max){
		return this.$http.get(`http://localhost:8080/workix/services/v1/comments/recents?start=${start}&max=${max}`)
	},
	getPosts(page, limit){
		if (!page){
			page = 1
		}
		if(!limit){
			limit = 10
		}
		return this.$http.get(`http://localhost:8080/workix/services/v1/blogs/paginated?page=${page}&limit=${limit}`)
	}
  }
}
</script>

<style>

</style>
<template>
  <div id="">
   
    <!-- ============ TITLE START ============ -->
		<section id="title" v-if="postId != null && postId > 0 && post != null">
			<div class="container">
				<div class="row">
					<div class="col-sm-2">
						<img :src="post.author.picture" alt="" class="img-responsive img-circle" />
					</div>
					<div class="col-sm-10">
						<h1>{{post.title}}</h1>
						<div class="meta">
							<span><i class="fa fa-user"></i>{{post.author.name}}</span>
							<span><i class="fa fa-calendar"></i>{{post.date.toLocaleString("pt-BR")}}</span>
							<span><i class="fa fa-comment"></i>{{post.comments.length}}</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ============ TITLE END ============ -->

		<section v-else>
			<h1> Post Id is not Defined</h1>
		</section>	

		<!-- ============ CONTENT START ============ -->

		<section id="blog" v-if="postId != null && postId > 0 && post != null">
			<div class="container">
				<div class="row">

					<div class="col-sm-8">

						<!-- POSTS START -->

						<article>
							<p><img :src="post.pictures[0]" alt="" class="img-responsive" /></p>
							<p>{{post.content}}</p>
							
							<h2>Galeria</h2>
							<ul class="gallery row">
								<template v-for="(p,i) in post.pictures" :key="i">
								<li class="col-xs-4 col-sm-3 col-lg-2">
									<a :href="p" class="fancybox" data-fancybox-group="gallery" :title="getTitle(p)">
										<img :src="p" class="img-responsive" alt="" />
									</a>
								</li>
								</template>
								
							</ul>
							<!--
							<p>Proin eu erat tincidunt, scelerisque ipsum non, fringilla dolor. Quisque interdum congue tellus. Aliquam vel odio sit amet ex laoreet finibus. Etiam commodo purus tortor, sed interdum justo faucibus vitae. Praesent ac elit a felis luctus facilisis. Aenean et magna elit. Morbi eget nulla volutpat, egestas ex vel, blandit enim. Pellentesque sit amet metus luctus, congue.</p>
							<blockquote>Maecenas mollis dictum lectus quis scelerisque. Nulla at rutrum ipsum. Praesent augue quam, facilisis vitae felis vel, convallis convallis nisi. Donec maximus accumsan purus vel tempus. Aenean pretium luctus velit id fermentum.</blockquote>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel sapien nibh. Mauris et neque tellus. In tellus felis, ornare in urna commodo, volutpat gravida sem. Integer vitae lorem sit amet nibh ornare varius. Sed sollicitudin leo quis dui dictum fermentum. Nulla at fringilla dolor. Proin magna nibh, dignissim vitae enim quis, bibendum euismod ipsum. In mattis nulla nulla. Cras suscipit aliquet augue in vulputate. Donec in enim non elit ornare sodales id nec arcu.</p>
							-->
						</article>

						<!-- POSTS END -->

						<!-- SHARING START -->

						<ul class="share">
							<li><h5>Compartilhe</h5></li>
							<li><a href="https://www.facebook.com/sharer/sharer.php?u=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-2x fa-facebook-square"></i></a></li>
							<li><a href="https://twitter.com/home?status=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-2x fa-twitter-square"></i></a></li>
							<li><a href="https://plus.google.com/share?url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i class="fa fa-2x fa-google-plus-square"></i></a></li>
							<li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html&amp;title=Jobseek%20-%20Job%20Board%20Responsive%20HTML%20Template&amp;summary=&amp;source="><i class="fa fa-2x fa-linkedin-square"></i></a></li>
						</ul>

						<!-- SHARING END -->

						<!-- TAGS START -->

						<ul class="tags">
							<li><i class="fa fa-tag"></i></li>
							<li v-for="(t,i) in post.tags" :key="i"><a :href="`/blog?etiqueta=${t.name}`">{{t.name}}</a></li>							
						</ul>

						<!-- TAGS END -->

						<!-- AUTHOR START -->

						<div id="author" class="row">
							<div class="col-sm-2">
								<img :src="post.author.picture" alt="" class="img-responsive img-circle" />
							</div>
							<div class="col-sm-10">
								<h5>Sobre o autor</h5>
								<p>{{post.author.aboutText}}</p>
								<ul class="social">
									<li v-for="(md,i) in post.author.medias" :key="i"><a :href="md.url"><i :class="getClass(md.media)"></i></a></li>
									
								</ul>
							</div>
						</div>

						<!-- AUTHOR END -->

						<!-- PAGING START -->

						<ul id="paging">
							<!-- TODO Verify if has next -->
							<li class="pull-left" v-if="postId > 1"><a :href="`/postagem?id=${postId-1}`" class="btn btn-primary"><i class="fa fa-arrow-left"></i> Anterior</a></li>
							<li class="pull-right"><a :href="`/postagem?id=${+postId+1}`" class="btn btn-primary">Próxima <i class="fa fa-arrow-right"></i></a></li>
						</ul>

						<!-- PAGING END -->

						<hr>

						<!-- COMMENTS START -->

						<div class="row" id="comentarios">
							<div class="col-sm-12">
								<h2>{{post.comments.length}} Comentários</h2>
								<ul class="media-list">
									<template v-for="(c,i) in post.comments" :key="i">
									<li class="media">
										<a class="pull-left media-photo" href="#comentarios"><img class="media-object img-responsive img-circle" :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" /></a>
										<div class="media-body">
											<p class="media-heading"><a href="#comentarios">{{c.name}}, {{c.createdAt.toLocaleString("pt-BR").replace("T", " as ")}}:</a><a v-if="false" href="#" class="pull-right"><i class="fa fa-reply"></i> &nbsp; Responder</a></p>
											<p>{{c.text}}</p>																						
										</div>
									</li>
									</template>
								
								</ul>
							</div>
						</div>

						<!-- COMMENTS END -->

						<hr>

						<!-- COMMENT FORM START -->

						<h2>Escreva um Comentário</h2>
						<form role="form" @submit.prevent="sendAComment">
							<div class="row" data-scroll-reveal>
								<div class="form-group col-sm-6">
									<input type="text" v-model="name" class="form-control" id="input-comment-name" placeholder="Nome" required>
								</div>
								<div class="form-group col-sm-6">
									<input type="email" v-model="email" class="form-control" id="input-comment-email" placeholder="Email" required>
								</div>
							</div>
							<div class="row" data-scroll-reveal>
								<div class="form-group col-sm-12">
									<textarea class="form-control" v-model="message" rows="5" placeholder="Mensagem" required></textarea>
								</div>
							</div>
							<div class="row" data-scroll-reveal>
								<div class="form-group col-sm-12">
									<button type="submit" class="btn btn-primary">Enviar</button>
								</div>
							</div>
						</form>

						<!-- COMMENTS FORM END -->
						
					</div>

					<BlogSideBar />

				</div>
			</div>
		</section>

		<!-- ============ CONTENT END ============ -->

      <ContactsWrapper />           
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

import BlogSideBar from '@/components/blogs/BlogSideBar.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'

export default {
    components:{        
		BlogSideBar,
        ContactsWrapper        
    },
	setup(){
		// Get toast interface
		const toast = useToast();

		return {toast}
	},
	data(){
		return{
			baseUrl: window.location.origin,
			postId: 0,
			post: null,
			name: "",
			email: "",
			message: ""
		}
	},
	methods:{
		validateEmail: email => {
			const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return String(email).toLowerCase().match(regex)
				},
		getClass(media){
			switch (media) {
				case "Facebook":					
					return "fa fa-facebook-square fa-2x"
				case "Twitter":
					return "fa fa-twitter-square fa-2x"		
				case "Linkedin":
					return "fa fa-linkedin-square fa-2x"
				case "instagram":
					return "fa fa-instagram fa-2x"	
				case "GitHub":
					return "fa fa-github fa-2x"
				default:
					break;
			}
		},
		getTitle(link){
			// TODO, save title of image on backend
			const arr = link.split('/')
			return arr[arr.length -1]

		},
		getPost(id){
			return this.$http.get(`http://localhost:8080/workix/services/v1/blogs/${id}`)
		},
		async sendAComment(){
			if (this.validateEmail(this.email) == null){
				this.toast.warning("Por favor digite um email válido!", { timeout: 2000 });
				return;
			}

			await this.$http.post("http://localhost:8080/workix/services/v1/comments/blog", {name: this.name, email: this.email, message: this.message, postId: this.postId})

			let resp = await this.getPost(this.postId)
			this.post = resp.data 

			this.toast.success("Enviado com Sucesso!", { timeout: 2000 })

		}
	},
	async created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);

	this.postId = this.$route.query.id
	let resp;
	resp = await this.getPost(this.postId)
	this.post = resp.data
  }
}
</script>

<style>

</style>
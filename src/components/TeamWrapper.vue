<template>
    <!-- ============ TEAM START ============ -->
		<section id="team" class="color1">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h2>Nossa Equipe</h2>
						<div class="owl-carousel">

							<template v-if="!debug">
							<!-- Team Member-->
							<div class="team-member text-center img-rounded" v-for="(m,i) in members" :key="i">
								<img :src="m.picture" class="img-responsive img-circle" alt="" />
								<h5>{{m.name}}</h5>
								<h6>{{m.occupation}}</h6>
								<p>{{m.shortText}}</p>
								<p>
									<template v-for="(mm,idx) in m.medias" :key="idx">
										<a :href="mm.url"><i :class="getClass(mm.media)"></i></a>&nbsp;&nbsp;&nbsp;
									</template>	
									
								</p>
							</div>
							</template>

							<template v-if="debug">
							<!-- Team Member 1 -->
							<div class="team-member text-center img-rounded">
								<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-responsive img-circle" alt="" />
								<h5>John Doe</h5>
								<h6>Managing Director</h6>
								<p>Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque.</p>
								<p>
									<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-instagram fa-2x"></i></a>															
								</p>
							</div>

							<!-- Team Member 2 -->
							<div class="team-member text-center img-rounded">
								<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-responsive img-circle" alt="" />
								<h5>Jane Smith</h5>
								<h6>Sales Director</h6>
								<p>Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque.</p>
								<p>
									<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-instagram fa-2x"></i></a>
								</p>
							</div>

							<!-- Team Member 3 -->
							<div class="team-member text-center img-rounded">
								<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-responsive img-circle" alt="" />
								<h5>Ryan Hampton</h5>
								<h6>Key Account Manager</h6>
								<p>Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque.</p>
								<p>
									<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-instagram fa-2x"></i></a>
								</p>
							</div>

							<!-- Team Member 4 -->
							<div class="team-member text-center img-rounded">
								<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-responsive img-circle" alt="" />
								<h5>Marilyn Strickland</h5>
								<h6>Account Manager</h6>
								<p>Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque.</p>
								<p>
									<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-instagram fa-2x"></i></a>
								</p>
							</div>

							<!-- Team Member 5 -->
							<div class="team-member text-center img-rounded">
								<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-responsive img-circle" alt="" />
								<h5>Harold Chandler</h5>
								<h6>Support Agent</h6>
								<p>Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque.</p>
								<p>
									<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-instagram fa-2x"></i></a>
								</p>
							</div>

							<!-- Team Member 5 -->
							<div class="team-member text-center img-rounded">
								<img :src="`${baseUrl}/resources/placeholder/140x140.jpg`" class="img-responsive img-circle" alt="" />
								<h5>Mandy Fisher</h5>
								<h6>Sales Representative</h6>
								<p>Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque.</p>
								<p>									
									<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
									<a href="#"><i class="fa fa-instagram fa-2x"></i></a>
								</p>
							</div>
							</template>
							
							

						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ TEAM END ============ -->
</template>

<script>
export default {
	data(){
		return{
			baseUrl: window.location.origin,
			debug: true,
			members: []
		}
	},
	methods:{
		getMembers(){
			return this.$http.get("http://localhost:8080/workix/services/v1/members")
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
		}
	},
	async created(){
		const {data} = await this.getMembers()
		this.members = data
	}
}
</script>

<style>

</style>
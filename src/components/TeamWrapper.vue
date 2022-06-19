<template>
    <!-- ============ TEAM START ============ -->
		<section id="team" class="color1">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h2>Nossa Equipe</h2>
						<div class="owl-carousel">
								<!-- Team Member-->
								
									<template v-for="(m,i) in members" :key="i" >
										<TeamMember :member="m" />							
									</template>
								
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ============ TEAM END ============ -->
</template>

<script>
import TeamMember from '@/components/TeamMember.vue'

export default {
	components:{
		TeamMember
	},
	data(){
		return{						
			members: []
		}
	},
	methods:{
		getMembers(){
			return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/members`)
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
					return "fa fa-github-square fa-2x"
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
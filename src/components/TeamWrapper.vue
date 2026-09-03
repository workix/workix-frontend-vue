<template>
    <!-- ============ TEAM START ============ -->
		<section id="team" class="color1">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h2>Nossa Equipe</h2>
						<div class="row">
							<template v-for="(m,i) in members" :key="i" >
								<div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
									<TeamMember :member="m" />
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
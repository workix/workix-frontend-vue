<template>
    <!-- Team Member-->
    <div class="team-member text-center img-rounded">
        <img :src="member.picture" class="img-responsive img-circle" alt="" />
        <h5>{{member.name}}</h5>
        <h6>{{member.occupation}}</h6>
        <p>{{member.shortText}}</p>
        <p>
            <template v-for="(media,idx) in member.medias" :key="idx">
                <a :href="media.url"><i :class="getClass(media.media)"></i></a>&nbsp;&nbsp;&nbsp;
            </template>	
            
        </p>
    </div>
</template>

<script>
export default {
    props: {
        member: Object
    },
    methods:{
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
	}
}
</script>

<style>

</style>
<template>
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
</template>

<script>
export default {
    data(){
        return {
            categories: [],
            timePeriods: [],
			recentPosts: [],
			recentComments: []
        }
    },
    async created(){
        let resp;
        resp = await this.getCategories()
        this.categories = resp.data

        resp = await this.getTimePeriods()
        this.timePeriods = resp.data

        resp = await this.getRecentPosts(0,4)
        this.recentPosts = resp.data

        resp = await this.getRecentComments(0,4)
        this.recentComments = resp.data
    },
    methods: {
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
		return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/blogs/categories`)
	},
    getTimePeriods(){
		return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/blogs/time_periods`)
	},
	getRecentPosts(start, max){
		return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/blogs/recents?start=${start}&max=${max}`)
	},
	getRecentComments(start , max){
		return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/comments/recents?start=${start}&max=${max}`)
	},
    }
}
</script>

<style>

</style>
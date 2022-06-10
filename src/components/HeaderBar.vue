<template>
  <!-- ============ HEADER START ============ -->

		<header style="background-color:#181818;">
			<div id="header-background"></div>
			<div class="container">
				<div class="pull-left">
					<div id="logo"><a href="/"><img src="images/logo.png" alt="Jobseek - Job Board Responsive HTML Template" /></a></div>
				</div>
				<div id="menu-open" class="pull-right">
					<a class="fm-button"><i class="fa fa-bars fa-lg"></i></a>
				</div>
				<div id="searchbox" class="pull-right">
					<form @submit.prevent="sendToSearcher">
						<div class="form-group">
							<label class="sr-only" for="searchfield">Searchbox</label>
							<input v-model="keyword" type="text" class="form-control" id="searchfield" placeholder="Procurando por ?">							
						</div>
					</form>
				</div>
				<div id="search" class="pull-right">
					<a><i class="fa fa-search fa-lg"></i></a>
				</div>
			</div>
		</header>

		<!-- ============ HEADER END ============ -->
		
</template>

<script>
export default {
	data(){
		return {
			keyword: ""
		}
	},
	methods:{
		sendToSearcher(){
			// this.$router.push({path: `/localizar`, query: {keyword: this.keyword} });
			//this.$router.go({path: `/localizar?keyword=${this.keyword}`,  force: true})
			window.location.href = `/localizar?keyword=${this.keyword}`;
		}
	}
}
</script>

<style>
 
</style>
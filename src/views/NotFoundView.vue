<template>
  <div id="404">
     <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Pagina não encontrada</h1>
						<h4>TALVEZ VOCÊ SE INTERESSE POR ...</h4>
            <br/>
            <br/>
            <br/>
            <img src="resources/images/error.jpg" />
					</div>
				</div>
			</div>
		</section>
    <!-- ============ TITLE END ============ -->

    <BlogWrapper />
  </div>  
</template>

<script>
import BlogWrapper from '@/components/BlogWrapper.vue'
export default {
  components:{
    BlogWrapper
  }

}
</script>

<style>

</style>
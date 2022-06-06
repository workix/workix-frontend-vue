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
						<h1>Find a Job</h1>
						<h4>There is no better place to start</h4>
					</div>
				</div>
			</div>
		</section>
    <!-- ============ TITLE END ============ -->

    <JobsList />

  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import JobsList from '@/components/JobsList.vue'

export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar,
        JobsList

    }
}
</script>

<style>

</style>
<template>
  <div id="about">
      <PageLoader />
      <NavBar />
      <HeaderBar />

  <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>About Us</h1>
						<h4>Short story of our company</h4>
					</div>
				</div>
			</div>
		</section>
  <!-- ============ TITLE END ============ -->

  <!-- ============ STORY START ============ -->
		<section id="story">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<p>Maecenas mollis dictum lectus quis scelerisque. Nulla at rutrum ipsum. Praesent augue quam, facilisis vitae felis vel, convallis convallis nisi. Donec maximus accumsan purus vel tempus. Aenean pretium luctus velit id fermentum. Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque. Nunc et massa leo. Vestibulum a pretium dolor. Proin et fermentum sapien. Cras malesuada neque ac purus fermentum, a placerat quam malesuada. Quisque sollicitudin tellus a ex eleifend mattis. In vitae ipsum in mauris vestibulum imperdiet.</p>
					</div>
					<div class="col-sm-6">
						<p>Maecenas mollis dictum lectus quis scelerisque. Nulla at rutrum ipsum. Praesent augue quam, facilisis vitae felis vel, convallis convallis nisi. Donec maximus accumsan purus vel tempus. Aenean pretium luctus velit id fermentum. Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque. Nunc et massa leo. Vestibulum a pretium dolor. Proin et fermentum sapien. Cras malesuada neque ac purus fermentum, a placerat quam malesuada. Quisque sollicitudin tellus a ex eleifend mattis. In vitae ipsum in mauris vestibulum imperdiet.</p>
					</div>
				</div>
			</div>
		</section>
  <!-- ============ STORY END ============ -->

    <TestimonialsWrapper />
    <TeamWrapper />
  
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import TestimonialsWrapper from '@/components/TestimonialsWrapper.vue'
import TeamWrapper from '@/components/TeamWrapper.vue'
export default {
  components: {
    PageLoader,
    NavBar,
    HeaderBar,
    TestimonialsWrapper,
    TeamWrapper
  }
}
</script>

<style>

</style>
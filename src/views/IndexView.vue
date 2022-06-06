<template>
  <div id="home">
      <PageLoader />
      <NavBar />
      <HeaderBar />
      <SliderWrapper />
      <JobsWrapper /> 
      <CompaniesWrapper />
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import SliderWrapper from '@/components/SliderWrapper.vue'
import JobsWrapper from "@/components/JobsWrapper.vue"
import CompaniesWrapper from "@/components/CompaniesWrapper.vue"
export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar,
        SliderWrapper,
        JobsWrapper,
        CompaniesWrapper
    }
}
</script>

<style>

</style>
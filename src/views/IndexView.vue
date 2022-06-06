<template>
  <div id="home">
      <PageLoader />
      <NavBar />
      <HeaderBar />
      <SliderWrapper />
      <JobsWrapper /> 
      <CompaniesWrapper />
      <StatsWrapper />
      <HowItWorks />
      <MobileApp />
      <PricingWrapper />
      <TestimonialsWrapper />
      <BlogWrapper />
      <ContactsWrapper />
      <ClientsWrapper />
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import SliderWrapper from '@/components/SliderWrapper.vue'
import JobsWrapper from "@/components/JobsWrapper.vue"
import CompaniesWrapper from "@/components/CompaniesWrapper.vue"
import StatsWrapper from '@/components/StatsWrapper.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import MobileApp from '@/components/MobileApp.vue'
import PricingWrapper from '@/components/PricingWrapper.vue'
import TestimonialsWrapper from '@/components/TestimonialsWrapper.vue'
import BlogWrapper from '@/components/BlogWrapper.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import ClientsWrapper from '@/components/ClientsWrapper.vue'
export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar,
        SliderWrapper,
        JobsWrapper,
        CompaniesWrapper,
        StatsWrapper,
        HowItWorks,
        MobileApp,
        PricingWrapper,
        TestimonialsWrapper,
        BlogWrapper,
        ContactsWrapper,
        ClientsWrapper
    }
}
</script>

<style>

</style>
<template>
  <div id="home">
      <SliderWrapper />
      <IndexModal />
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
import IndexModal from '@/components/IndexModal.vue'
import { useToast } from "vue-toastification";

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
        SliderWrapper,
        IndexModal,
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
    },
    setup(){
        // Get toast interface
      const toast = useToast();

      // Use it!
      toast("I'm a toast!");

      // or with options
      toast.success("My toast content", {
        timeout: 2000
      });
      // These options will override the options defined in the "app.use" plugin registration for this specific toast

      // Make it available inside methods
      return { toast }
    }
     
}
</script>

<style>

</style>
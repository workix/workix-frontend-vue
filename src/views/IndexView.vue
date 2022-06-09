<template>
  <div id="home">
      <PageLoader />
      <NavBar />
      <HeaderBar />
      <SliderWrapper />
      <JobsWrapper /> 
      <CompaniesWrapper />
      <StatsWrapperAsync />
      <HowItWorks />
      <MobileApp />
      <PricingWrapper />
      <TestimonialsWrapper />
      <BlogWrapper />
      <ContactsWrapper />
      <ClientsWrapper />
      <FooterWrapper />
      <LoginPopup />
      <RegisterPopup />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useToast } from "vue-toastification";
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import SliderWrapper from '@/components/SliderWrapper.vue'
import JobsWrapper from "@/components/JobsWrapper.vue"
import CompaniesWrapper from "@/components/CompaniesWrapper.vue"
// import StatsWrapper from '@/components/StatsWrapper.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import MobileApp from '@/components/MobileApp.vue'
import PricingWrapper from '@/components/PricingWrapper.vue'
import TestimonialsWrapper from '@/components/TestimonialsWrapper.vue'
import BlogWrapper from '@/components/BlogWrapper.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import ClientsWrapper from '@/components/ClientsWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar,
        SliderWrapper,
        JobsWrapper,
        CompaniesWrapper,
        StatsWrapperAsync: defineAsyncComponent({loader: () => import('@/components/StatsWrapper.vue'), delay: 7000, timeout: 3000}),
        HowItWorks,
        MobileApp,
        PricingWrapper,
        TestimonialsWrapper,
        BlogWrapper,
        ContactsWrapper,
        ClientsWrapper,
        FooterWrapper,
        LoginPopup,
        RegisterPopup
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
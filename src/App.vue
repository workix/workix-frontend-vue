<template>
    <PageLoader />
    <NavBar />
    <HeaderBar />
        <router-view />
    <FooterWrapper />
    <LoginPopup />
    <RegisterPopup />
</template>

<style>

</style>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
  components: {
        PageLoader,
        NavBar,
        HeaderBar,
        FooterWrapper,
        LoginPopup,
        RegisterPopup
  },
  created(){
    let jsSettingsTag = document.createElement('script');  
    jsSettingsTag.setAttribute('src',"js/settings.js");
    document.body.appendChild(jsSettingsTag);
  }
}
</script>

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
import { useToast } from "vue-toastification";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useStore} from 'vuex'
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
  setup(){
    // Get toast interface
    const toast = useToast();
    const store = useStore();
    return {toast, store}
	},
  created(){
    let jsSettingsTag = document.createElement('script');  
    jsSettingsTag.setAttribute('src',"js/settings.js");
    document.body.appendChild(jsSettingsTag);

    onAuthStateChanged(getAuth(), async user => {
			if (user){
        this.store.state.isLoggedIn = true
        this.store.state.fireBaseUser = user				

        const token = localStorage.getItem("jwt")

        if(token){
          const {data} = await this.aboutMe(token)
          this.store.state.owner = data.owner
          this.store.state.accountType = data.type	
        }
			} else {
				this.store.state.isLoggedIn = false
        this.store.state.fireBaseUser = null
			}
		})
  },
  methods:{
    async aboutMe(token){
      let config = { headers: { "Authorization": `Bearer ${token}` } }
      return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/auth/me`, config )
    },
  }
}
</script>

<template>
    <!-- ============ LOGIN START ============ -->
		<div class="popup" id="login">
			<div class="popup-form">
				<div class="popup-header">
					<a class="close"><i class="fa fa-remove fa-lg"></i></a>
					<h2>Login</h2>
				</div>
				<form @submit.prevent="loginWithEmailPassword" v-if="!isLoggedIn">
					<ul class="social-login">
						<li><a class="btn btn-facebook"><i class="fa fa-facebook"></i>Entrar com Facebook</a></li>
						<li><a class="btn btn-google" @click="logginWithGoogle"><i class="fa fa-google-plus"></i>Entrar com Google</a></li>
						<li><a class="btn btn-linkedin"><i class="fa fa-linkedin"></i>Entrar com LinkedIn</a></li>
					</ul>
					<hr>
					<div class="form-group">
						<label for="login-email">Email</label>
						<input type="text" v-model="email" class="form-control" id="login-email" required>
					</div>
					<div class="form-group">
						<label for="login-password">Senha</label>
						<input type="password" v-model="password" class="form-control" id="login-password" required>
					</div>
					<button type="submit" class="btn btn-primary">Entrar</button>
				</form>
				<form v-else>
					<button  class="btn btn-primary" v-if="isLoggedIn" @click="handleSignOut">Logout</button>
				</form>
			</div>
		</div>
		<!-- ============ LOGIN END ============ -->
</template>

<script>
import { useToast } from "vue-toastification";
import {useStore} from 'vuex'
import {computed} from 'vue'
import {signOut, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
const $ = require( "jquery" );
export default {
	setup(){
	// Get toast interface
    const toast = useToast();

	const store = useStore()

	const isLoggedIn = computed(() => store.state.isLoggedIn)

	return {toast, store, isLoggedIn}
	},
	data(){
		return {			
			email: "",
			password: "",			
			logingData: null			
		}
	},
	created(){
		onAuthStateChanged(getAuth(), async user => {
			if (user){
				
				let resp;
				resp = await this.logginInWorkix(user.email, user.uid)
				const token = resp.data.token
				
				resp = await this.aboutMe(token)

				localStorage.owner = JSON.stringify(resp.data.owner)
				localStorage.jwt = token
				localStorage.accountType = resp.data.type

				this.store.state.accountType = resp.data.type				
				
			} else {				
				localStorage.clear()
			}
		})
	},
	methods: {
		timeout(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		},
		async logginInWorkix(email, firebaseUUID){			
			return this.$http.post("http://localhost:8080/workix/services/v1/auth/login", {email, firebaseUUID})
		},
		async aboutMe(token){
			let config = { headers: { "Authorization": `Bearer ${token}` }
}
			return this.$http.get("http://localhost:8080/workix/services/v1/auth/me", config )
		},
		disposeModal(){
			$("#login").fadeOut(300);
			$("body").removeClass("no-scroll");			
		},
		handleSignOut(){
			signOut(getAuth(), () => {
				console.log("SIGN OUT")
				this.disposeModal()
			})
		},
		async logginWithGoogle(){
			const provider = new GoogleAuthProvider()
			try {
				const loginData = await signInWithPopup(getAuth(), provider)
				this.logingData = loginData
				this.disposeModal()				
				this.toast.success(`Bem vindo ${this.logingData.user.displayName}`, { timeout: 2000 })			

				await this.timeout(2000)

				this.$router.go({path: this.$router.currentRoute, force: true})
			} catch (error) {

				console.error(error)				
				this.disposeModal()
				this.toast.error("Ocorreu Algum problema ao fazer login!" , { timeout: 2000 })
				this.toast.error(error.message , { timeout: 4000 })
			
			}

		},
		async loginWithEmailPassword(){
			/*if (!this.email || !this.password){
				return;
			}*/

			try {
			const logingData = await signInWithEmailAndPassword(getAuth(), this.email, this.password)	
			this.logingData = logingData;

			this.disposeModal()

			this.toast.success(`Bem vindo ${this.logingData.user.email} loggin efetuado com sucesso!`, { timeout: 2000 })

			
			this.email = ""
			this.password = ""		

			await this.timeout(2000)

			this.$router.go({path: this.$router.currentRoute, force: true})
			
			} catch (error) {
				console.error(error)				
				this.disposeModal()
				this.toast.error("Ocorreu Algum problema ao fazer login!" , { timeout: 2000 })
				this.toast.error(error.message , { timeout: 4000 })


				this.password = ""
				

			}
			
		}

	}

}
</script>

<style>

</style>
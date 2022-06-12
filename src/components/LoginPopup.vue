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
import {signOut, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
const $ = require( "jquery" );
export default {
	setup(){
	// Get toast interface
    const toast = useToast();
	return {toast}
	},
	data(){
		return {			
			email: "",
			password: "",			
			logingData: null,
			isLoggedIn: null
		}
	},
	created(){
		onAuthStateChanged(getAuth(), user => {
			if (user){
				this.isLoggedIn = true
			} else {
				this.isLoggedIn = false
			}
		})
	},
	methods: {
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
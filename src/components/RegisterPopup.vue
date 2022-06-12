<template>
    <!-- ============ REGISTER START ============ -->
		<div class="popup" id="register">
			<div class="popup-form">
				<div class="popup-header">
					<a class="close"><i class="fa fa-remove fa-lg"></i></a>
					<h2>Register</h2>
				</div>
				<form @submit.prevent="registerWithEmailPassword">
					<ul class="social-login">
						<li><a class="btn btn-facebook"><i class="fa fa-facebook"></i>Register with Facebook</a></li>
						<li><a class="btn btn-google"><i class="fa fa-google-plus"></i>Register with Google</a></li>
						<li><a class="btn btn-linkedin"><i class="fa fa-linkedin"></i>Register with LinkedIn</a></li>
					</ul>
					<hr>
					<div class="form-group">
						<label for="register-name">Nome</label>
						<input type="text" v-model="name" class="form-control" id="register-name" required>
					</div>
					<!--<div class="form-group">
						<label for="register-surname">Surname</label>
						<input type="text" class="form-control" id="register-surname">
					</div>-->
					<div class="form-group">
						<label for="register-email">Email</label>
						<input type="email" v-model="email" class="form-control" id="register-email" required>
					</div>
					<hr>
					<!--<div class="form-group">
						<label for="register-username">Username</label>
						<input type="text" class="form-control" id="register-username">
					</div>-->
					<div class="form-group">
						<label for="register-password1">Senha</label>
						<input type="password" v-model="password" class="form-control" id="register-password1" required>
					</div>
					<div class="form-group">
						<label for="register-password2">Confirme a senha</label>
						<input type="password" v-model="repeatPassword" class="form-control" id="register-password2" required>
					</div>
					<button type="submit" class="btn btn-primary" >Registrar</button>
				</form>
			</div>
		</div>
		<!-- ============ REGISTER END ============ -->
</template>

<script>
import { useToast } from "vue-toastification";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
const $ = require( "jquery" );
export default {
	setup(){
	// Get toast interface
    const toast = useToast();
	return {toast}
	},
	data(){
		return {
			name: "",
			email: "",
			password: "",
			repeatPassword: "",
			logingData: null
		}
	},
	methods: {
		disposeModal(){
			$("#register").fadeOut(300);
			$("body").removeClass("no-scroll");			
		},
		registerWithGoogle(){

		},
		async registerWithEmailPassword(){
			if (this.password != this.repeatPassword){
				return;
			}

			try {
			const logingData = await createUserWithEmailAndPassword(getAuth(), this.email, this.password)	
			this.logingData = logingData;

			this.disposeModal()

			this.toast.success(`Bem vindo ${this.name} sua conta foi criada com sucesso!`, { timeout: 2000 })

			this.name = ""
			this.email = ""
			this.password = ""
			this.repeatPassword = ""

			
			
			} catch (error) {
				console.error(error)				
				this.disposeModal()
				this.toast.error("Ocorreu Algum problema ao criar a conta!" , { timeout: 2000 })
				this.toast.error(error.message , { timeout: 4000 })


				this.password = ""
				this.repeatPassword = ""

			}
			
		}

	}

}
</script>

<style>

</style>
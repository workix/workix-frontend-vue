<template>
    <!-- ============ REGISTER START ============ -->
		<div class="popup" id="register">
			<div class="popup-form">
				<div class="popup-header">
					<a class="close"><i class="fa fa-remove fa-lg"></i></a>
					<h2>Registrar</h2>					
				</div>
				<form v-if="!isLoggedIn" @submit.stop.prevent="null">
					<div class="form-group">
						<label for="accountType">Perfil</label>
						<select id="accountType" class="form-control" aria-label="Default select example" v-model="accountType" required>
							<option value="" selected>Escolha o tipo de perfil</option>
							<option value="Candidate">Candidato</option>
							<option value="Company">Recrutador</option>						
						</select>
					</div>
					<div class="form-group" v-if="accountType == 'Candidate'">
						<label for="register-cpf">CPF</label>
						<input type="text" v-model="cpf" class="form-control" id="register-cpf">
					</div>
					<div class="form-group" v-if="accountType == 'Company'">
						<label for="register-cnpj">CNPJ</label>
						<input type="text" v-model="cnpj" class="form-control" id="register-cnpj">
					</div>
					<div class="form-group" v-if="accountType == 'Candidate'">						
						<label for="register-birthdate">Nascimento</label>
						<Datepicker locale="pt-BR" autoApply placeholder="Selecione uma Data" noToday required :enableTimePicker="false" v-model="birthDate" id="birthdate" class="form-control"/>
					</div>
				</form>
				
				<form @submit.prevent="registerWithEmailPassword" v-if="!isLoggedIn && (accountType != '')">					
					<ul class="social-login" v-if="accountType == 'Candidate'">
						<li><a class="btn btn-facebook"><i class="fa fa-facebook"></i>Registrar com Facebook</a></li>
						<li><a class="btn btn-google" @click="registerWithGoogle"><i class="fa fa-google-plus"></i>Registrar com Google</a></li>
						<li><a class="btn btn-linkedin"><i class="fa fa-linkedin"></i>Registrar com LinkedIn</a></li>
					</ul>
					<hr>
					<h3 v-if="accountType== 'Candidate'"> OU SEM REDES SOCIAIS </h3>
					<div class="form-group">
						<label for="register-name">Nome</label>
						<input type="text" v-model="name" class="form-control" id="register-name" required>
					</div>					
					<div class="form-group">
						<label for="register-email">Email</label>
						<input type="email" v-model="email" class="form-control" id="register-email" required>
					</div>
					<hr>										
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
				
				<form v-else>
					<button class="btn btn-primary" v-if="isLoggedIn" @click="handleSignOut">Logout</button>
				</form>
			</div>
		</div>
		<!-- ============ REGISTER END ============ -->
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useToast } from "vue-toastification";
import {getAuth, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {computed} from 'vue'
import { useStore } from 'vuex';
const $ = require( "jquery" );
export default {
	components: { Datepicker },
	setup(){
	// Get toast interface
    const toast = useToast();
	
	const store = useStore()
	
	const isLoggedIn = computed(() => store.state.isLoggedIn)
	const fireBaseUser = computed(() => store.state.fireBaseUser)
	
	return {toast, store, isLoggedIn, fireBaseUser}
	},
	data(){
		return {
			accountType:"",
			cpf: "",
			cnpj: "",
			name: "",
			email: "",
			password: "",
			birthDate: null,
			repeatPassword: "",
			loginData: null						
		}
	},
	methods: {
		timeout(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		},
		disposeModal(){
			$("#register").fadeOut(300);
			$("body").removeClass("no-scroll");			
		},
		handleSignOut(){
			signOut(getAuth(), async () => {
				console.log("SIGN OUT")
				this.disposeModal()
				
				await this.timeout(1000)
				this.$router.go({path: this.$router.currentRoute, force: true})
			})
		},
		async registerWithGoogle(){		

			if(this.cpf.length < 11 && this.birthDate == null){
				return;
			}

			const provider = new GoogleAuthProvider()
			try {
				const loginData = await signInWithPopup(getAuth(), provider)
				this.logingData = loginData
				
				await this.createAccountInWorkix("Candidate", this.logingData.user.uid, this.logingData.user.email, this.logingData.user.displayName)
				
				this.disposeModal()

				this.toast.success(`Bem vindo ${this.logingData.user.displayName} sua conta foi criada com sucesso!`, { timeout: 2000 })

				await this.timeout(2000)

				this.$router.go({path: this.$router.currentRoute, force: true})
				
			} catch (error) {

				console.error(error)				
				this.disposeModal()
				this.toast.error("Ocorreu Algum problema ao criar a conta!" , { timeout: 2000 })
				this.toast.error(error.message , { timeout: 4000 })
			
			}

		},
		async registerWithEmailPassword(){
			if (this.password != this.repeatPassword){
				return;
			}		

			if(this.accountType == 'Candidate'){
				if(this.cpf.length < 11 && this.birthDate == null){
				return;
				}
			}

			try {
			const logingData = await createUserWithEmailAndPassword(getAuth(), this.email, this.password)	
			this.logingData = logingData;

			this.createAccountInWorkix(this.accountType, this.logingData.user.uid, this.email, this.name)

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

			} finally {
				await this.timeout(2000)
				this.$router.go({path: this.$router.currentRoute, force: true})
			}
			
		},
		async createAccountInWorkix(accountType, firebaseUUID, email, name){
			if (accountType == 'Candidate'){
				const payload = {
					name: name,
					cpf: this.cpf,
					birthDate: this.birthDate,
					firebaseUUID: firebaseUUID,
					email: email

				}
				
				try {
					const {data} = await this.$http.post(`${process.env.VUE_APP_BACKEND_SERVER}/vue/create_candidate`, payload)

					localStorage.owner = JSON.stringify(data.candidate)
					localStorage.jwt = data.jwt.token
					localStorage.accountType = "Candidate"

					this.store.state.accountType = "Candidate"
					
				} catch (error) {
					// eslint-disable-next-line
					debugger
					console.error(error)
					this.toast.error("Falha ao criar a conta no Workix", {timeout: 2000})
				}
				

			} else if (accountType == 'Company'){
				const payload = {
					name: name,
					cnpj: this.cnpj,					
					firebaseUUID: firebaseUUID,
					email: email
				}

				try {
					const {data} = await this.$http.post(`${process.env.VUE_APP_BACKEND_SERVER}/vue/create_company`, payload)

					localStorage.owner = JSON.stringify(data.company)
					localStorage.jwt = data.jwt.token
					localStorage.accountType = "Company"

					this.store.state.accountType = "Company"
					
				} catch (error) {
					console.error(error)
					this.toast.error("Falha ao criar a conta no Workix", {timeout: 2000})
					
				}

			

			} else{
				throw new Error("Incorrect Account Type")
			}
		}

	}

}
</script>

<style>

</style>
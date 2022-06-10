<template>
    <!-- ============ CONTACT START ============ -->
		<section id="contact" class="color2">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<h2>Deixe-nos uma mensagem</h2>
						<form role="form" name="contact-form" id="contact-form" @submit.prevent="sendToForms">
							<div class="form-group" id="contact-name-group">
								<label for="contact-name" class="sr-only">Nome</label>
								<input v-model="name" type="text" class="form-control" id="contact-name" placeholder="Nome" required>
							</div>
							<div class="form-group" id="contact-email-group">
								<label for="contact-email" class="sr-only">Email</label>
								<input v-model="email" type="email" class="form-control" id="contact-email" placeholder="Email" required>
							</div>
							<div class="form-group" id="contact-subject-group">
								<label for="contact-subject" class="sr-only">Assunto</label>
								<input v-model="subject" type="text" class="form-control" id="contact-subject" placeholder="Assunto" required>
							</div>
							<div class="form-group" id="contact-message-group">
								<label for="contact-message" class="sr-only">Mensagem</label>
								<textarea  v-model="message" class="form-control" rows="3" id="contact-message" placeholder="Mensagem" required></textarea>
							</div>
							<button type="submit" class="btn btn-default">Enviar Mensagem</button>
						</form>
					</div>
					<div class="col-sm-6">
						<!--
						<h2>Visit our office</h2>
						<div class="row">
							<div class="col-sm-6">
								<h5>New York</h5>
								<p>5 Park Avenue<br>
								New York, NY 10016<br>
								USA</p>
								<p><i class="fa fa-phone"></i>+1 718.242.5555<br>
								<i class="fa fa-fax"></i>+1 718.242.5556<br>
								<i class="fa fa-envelope"></i><a href="mailto:ny@jobseek.com">ny@jobseek.com</a></p>
								<p><i class="fa fa-clock-o"></i>Mon-Fri 9am - 5pm<br>
								<i class="fa fa-clock-o"></i>Sat 10am - 2pm<br>
								<i class="fa fa-clock-o"></i>Sun Closed</p>
							</div>
							<div class="col-sm-6">
								<h5>Los Angeles</h5>
								<p>8605 Santa Monica Blvd<br>
								Los Angeles, CA 90069-4109<br>
								USA</p>
								<p><i class="fa fa-phone"></i>+1 985.562.5555<br>
								<i class="fa fa-fax"></i>+1 985.562.5556<br>
								<i class="fa fa-envelope"></i><a href="mailto:la@jobseek.com">la@jobseek.com</a></p>
								<p><i class="fa fa-clock-o"></i>Mon-Fri 9am - 5pm<br>
								<i class="fa fa-clock-o"></i>Sat 10am - 2pm<br>
								<i class="fa fa-clock-o"></i>Sun Closed</p>
							</div>
						</div> -->
					</div> <!--  col sm 6 -->
				</div>
			</div>
		</section>
		<!-- ============ CONTACT END ============ -->
</template>

<script>
import { useToast } from "vue-toastification";
export default {
	setup(){
		// Get toast interface
		const toast = useToast();

		return {toast}
	},
	data(){
		return {
			name: "",
			subject: "",
			email: "",
			message: ""
		}
	},
	methods:{
		validateEmail: email => {
			const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return String(email).toLowerCase().match(regex)
				},
		async sendToForms () {
				if (this.validateEmail(this.email) == null){
				this.toast.warning("Please enter a valid email!", { timeout: 2000 });
				return;
			}
			const resp = await this.$http.post("http://localhost:8080/workix/services/v1/forms", { email: this.email, name: this.name, subject: this.subject, message: this.message} )
				if(resp.status == 201){
					this.toast.success("Dados Enviados com Sucesso", { timeout: 2000 });
					this.email = ""
					this.name = ""
					this.message = ""
					this.subject = ""
				} else {
					this.toast.warning("OOPS, não foi possivel processar os seus dados", { timeout: 2000 });
				}
		}				
	}
}
</script>

<style>

</style>
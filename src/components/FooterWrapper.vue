<template>
    <!-- ============ FOOTER START ============ -->
		<footer>
			<div id="prefooter">
				<div class="container">
					<div class="row">
						<div class="col-sm-6" id="newsletter">
							<h2>BOLETIM INFORMATIVO</h2>
							<form class="form-inline" @submit.prevent="sendToSubscribers">
								<div class="form-group">
									<label class="sr-only" for="newsletter-email">Email</label>
									<input v-model="email" type="email" class="form-control" id="newsletter-email" placeholder="Insira seu email para receber as novidades">
								</div>
								<button type="submit" class="btn btn-primary">Assinar</button>
							</form>
						</div>
						<div class="col-sm-6" id="social-networks">
							<h2>ENTRE EM CONTATO</h2>
							<a href="https://github.com/frmichetti/workix"><i class="fa fa-2x fa-github-square"></i></a>
							<a href="https://www.youtube.com/playlist?list=PLDzyDVZ4JbDhYUQvZf_fti3kDujvt4o5F"><i class="fa fa-2x fa-youtube-square"></i></a>
							<!--
							<a href="#"><i class="fa fa-2x fa-twitter-square"></i></a>
							<a href="#"><i class="fa fa-2x fa-google-plus-square"></i></a>
							
							<a href="#"><i class="fa fa-2x fa-vimeo-square"></i></a>
							<a href="#"><i class="fa fa-2x fa-pinterest-square"></i></a>
							<a href="#"><i class="fa fa-2x fa-linkedin-square"></i></a>
							-->
						</div>
					</div>
				</div>
			</div>
			<div id="credits">
				<div class="container text-center">
					<div class="row">
						<div class="col-sm-12" style="color: white;">
							&copy; {{new Date().getFullYear()}} Workix - Plataforma de Empregos Totalmente Grátis<br>
							Desenvolvido por <a href="https://github.com/frmichetti" target="_blank">Felipe Rodrigues Michetti</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- ============ FOOTER END ============ -->
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
			email: ""
		}
	},
	methods:{
		validateEmail: email => {
			const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return String(email).toLowerCase().match(regex)
				},
		async sendToSubscribers(){
			if (this.validateEmail(this.email) == null){
				this.toast.warning("Por favor digite um email válido!", { timeout: 2000 });
				return;
			}
			const {data} = await this.$http.post(`${process.env.VUE_APP_BACKEND_SERVER}/subscribers/subscribe`, { email: this.email} )

			if (data.subscribed){
				this.toast.success(data.message, { timeout: 2000 });
			}else {
				this.toast.info(data.message, { timeout: 2000 });
			}			 
		}
	}
}
</script>

<style>

</style>
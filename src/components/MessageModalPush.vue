<template>
  <form @submit.prevent="notify">
		<!-- Message Modal -->
		<div id="message-modal-push" class="modal fade" role="dialog"
			style="z-index: 1000000000">
			<div class="modal-dialog">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" id="close">x</button>
						<h4 class="modal-title">Enviar Mensagem</h4>
					</div>

					<div class="modal-body">
						<div class="form-group">
							<input type="text"
								v-model="title"
								class="form-control" required
								placeholder="Insira um Título" />
							<textarea type="text"								
                                v-model="message"
								class="form-control" required
								placeholder="Conteúdo da Mensagem" />
						</div>
					</div>
					<div class="modal-footer">
						<div class="form-group">
							<button class="btn btn-secondary" data-dismiss="modal">Close</button>
							<button class="btn btn-primary">Enviar Mensagem</button>
						</div>
					</div>

				</div>

			</div>
		</div>
	</form>
</template>

<script>
import { useToast } from "vue-toastification";
const $ = require( "jquery" );
export default {    
	setup(){
		// Get toast interface
		const toast = useToast();
		return { toast }
	},
	props:{
		user: Object
	},
    methods:{
        async notify(){
			delete this.user.createdAt;
			delete this.user.updatedAt;
			const payload = {user: this.user , type: "push", title: this.title, message: this.message}
			try {
				const resp = await this.$http.post(`${process.env.VUE_APP_BACKEND_SERVER}/candidates/notify`, payload)
				if (resp.status == 200){					
					$("#close").click();
					this.toast.success("Push Notification foi Enviado com Sucesso", {timeout: 2000})
				} else{					
					$("#close").click();
					this.toast.error("Não foi possível enviar a mensagem", {timeout: 2000})
				}	
			} catch (error) {				
				console.error(error)
				$("#close").click();
				this.toast.error("Não foi possível enviar a mensagem", {timeout: 2000})
			}
            
        }
    },
    data(){
        return {
            title: "",
            message: ""			
        }
    }
}
</script>

<style>

</style>
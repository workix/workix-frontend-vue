<template>
  <div class="jumbotron" v-if="!isLoggedIn">
		<h3>Tem uma conta?</h3>
		<p>Se você não tiver uma conta, pode criar uma abaixo digitando seu endereço de e-mail/nome de usuário.<br>
			Uma senha será automaticamente enviada por e-mail para você.</p>
		<p><a href="#" class="btn btn-primary link-login">Entrar</a> <strong>ou</strong> <a href="#" class="btn btn-primary link-register">Registrar</a></p>
		
	</div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
	setup(){
	const store = useStore()
	const isLoggedIn = computed(() => store.state.isLoggedIn)	

	return {isLoggedIn}
	},
}
</script>

<style>

</style>
<template>
      <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Vagas de {{companyName}}</h1>
						<h4>Todas os processos seletivos criadas pela sua empresa</h4>
						<br/>
						<a href="/cadastrar_processo_seletivo" class="btn btn-primary btn-lg">Criar novo Processo Seletivo</a>
						<br/>	
					</div>
				</div>
			</div>
		</section>

		<!-- ============ TITLE END ============ -->
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue'
export default {
    setup(){
		const store = useStore()
		const companyName = computed(()=> store.state.owner.name)
		
		return {companyName}
	},
}
</script>

<style>

</style>
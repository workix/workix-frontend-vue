<template>
  <!-- ============ NAVBAR START ============ -->

		<div class="fm-container">
			<!-- Menu -->
			<div class="menu">
				<div class="button-close text-right">
					<a class="fm-button"><i class="fa fa-close fa-2x"></i></a>
				</div>
				<ul class="nav">
					<li class="active"><a href="/" @click="navigate('/')">Início</a></li>
					<li><a href="/sobre_nos" @click="navigate('/sobre_nos')">Sobre nós</a></li>
					<li v-show="isLoggedIn && accountType == 'Candidate'"><a href="#">Candidatos</a>
						<ul>
							<li><a href="/inscricoes_processos_seletivos" @click="navigate('/inscricoes_processos_seletivos')">Minhas Inscriçoes em Processo Seletivo</a></li>
							<li><a href="/cadastrar_curriculo" @click="navigate('/cadastrar_curriculo')">Cadastrar Currículo</a></li>
							<li><a href="/curriculo" @click="navigate('/curriculo')">Visualizar Currículo</a></li>
							<li><a href="/vagas"  @click="navigate('/vagas')">Vagas</a></li>
							<li><a href="/vagas2"  @click="navigate('/vagas2')">Vagas (sem filtros)</a></li>
							<li><a href="/processos_seletivos" @click="navigate('/processos_seletivos')">Processos Seletivos</a></li>
						</ul>
					</li>
					<li v-show="isLoggedIn && accountType == 'Company'"><a href="#">Recrutadores</a>
						<ul>
							<li><a href="/meus_processos_seletivos" @click="navigate('/meus_processos_seletivos')">Meus Processos Seletivos</a></li>
							<li><a href="/minhas_vagas" @click="navigate('/minhas_vagas')">Minhas Vagas</a></li>
							<li><a v-if="owner" :href="`/empresa?id=${companyId}`" @click="navigate(`/empresa?id=${companyId}`)">Empresa</a></li>
							<li><a href="/cadastrar_vaga" @click="navigate('/cadastrar_vaga')">Cadastrar Vaga</a></li>
							<li><a href="/candidatos" @click="navigate('/candidatos')">Candidatos</a></li>
							<li><a href="/candidatos2" @click="navigate('/candidatos2')">Candidatos (sem filtros)</a></li>
						</ul>
					</li>
					<li><a href="/blog" @click="navigate('/blog')">Blog</a></li>
					<li v-show="!isLoggedIn"><a class="link-register">Registrar</a></li>
					<li><a class="link-login">{{!isLoggedIn ? "Login": "Logout"}}</a></li>
					
					<li><a href="/depoimentos" @click="navigate('/depoimentos')">Depoimentos</a></li>
					<li v-show="isLoggedIn"><a href="/opcoes" @click="navigate('/opcoes')">Opções</a></li>
					
					<li v-show="isLoggedIn"><a href="#">Páginas</a>
						<ul>
							<li><a href="/detalhes_vaga" @click="navigate('/detalhes_vaga')">Detalhes da Vaga</a></li>						
							<li><a href="/postagem" @click="navigate('/postagem')">Postagem</a></li>							
						</ul>
					</li>
					<li v-show="isLoggedIn"><a href="/perfil" @click="navigate('/perfil')">Perfil</a></li>
					
				</ul>		
			</div>
			<!-- end Menu -->
		</div>

	<!-- ============ NAVBAR END ============ -->
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
	setup(){
	const store = useStore()
	const isLoggedIn = computed(() => store.state.isLoggedIn)
	const accountType = computed(()=> store.state.accountType)
	const companyId = computed(() => store.state.owner.id)
	const owner = computed(() => store.state.owner)

	return {isLoggedIn, accountType, companyId, owner}
	},
	methods: {
		navigate(link){
			// this.$router.go({path: link, force: true });
			// this.$router.push(link)
			console.log(link)
		}
	}
}
</script>

<style>

</style>
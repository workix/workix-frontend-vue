<template>
  <div id="">
      <PageLoader />
      <NavBar />
      <HeaderBar />

      

        <section id="jobs">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Perfil</h1>
						<h4>Altere as suas configurações de conta</h4>
						<HaveAnAccount />
					</div>
				</div>

				<form @submit.prevent="null">
					<div class="row">
						<div class="col-12">
							<h2>Detalhes do Usuário</h2>
                            <div class="row">
                                
                                    <div class="form-group" id="uuid-user-group">
                                        <label for="uuid-user">UUID do Usuário</label>
                                        <input type="text" class="form-control" id="uuid-user" readonly>
                                    </div>			

                                    
                                    <div class="form-group" id="id-group">
                                        <label for="id">ID</label>
                                        <input type="text" class="form-control" id="id" readonly>
                                    </div>					                                
                                
                                    <div class="form-group" id="active-group">
                                        <label for="active">Ativo</label>
                                        <input type="checkbox" class="form-control" id="active" readonly>
                                    </div>		

                                    <div class="form-group" id="email-group">
                                        <label for="email">Email</label>
                                        <input type="text" class="form-control" id="email" placeholder="Insira seu Email" required>
                                    </div>				

                                    <div class="form-group" id="firebase-uuid-group">
                                        <label for="firebase-uuid">UUID Firebase</label>
                                        <input type="text" class="form-control" id="firebase-uuid" readonly>
                                    </div>		

                                    <div class="form-group" id="firebase-message-token-group">
                                        <label for="firebase-message-token">Message Token Firebase</label>
                                        <input type="text" class="form-control" id="firebase-message-token" placeholder="Insira o Message Token do Firebase">
                                    </div>		

                                    
                                
                            </div>
                            
                        </div>

                        <div class="col-sm-12">
							<h2>Detalhes do Candidato</h2>	
                            <div class="row">
                                <div class="form-group" id="uuid-candidate-group">
                                        <label for="uuid-candidate">UUID do Candidato</label>
                                        <input type="text" class="form-control" id="uuid-candidate" readonly>
                                </div>	

                                 <div class="form-group" id="id-candidate-group">
                                        <label for="id-candidate">ID do Candidato</label>
                                        <input type="text" class="form-control" id="id-candidate" readonly>
                                    </div>	

                                <div class="form-group" id="name-candidate-group">
                                        <label for="name-candidate">Nome do Candidato</label>
                                        <input type="text" class="form-control" id="name-candidate" placeholder="Digite o seu Nome" required>
                                </div>	

                                <div class="form-group" id="birthdate-candidate-group">
                                        <label for="birthdate-candidate">Data de Nascimento</label>
                                        <input type="text" class="form-control" id="birthdate-candidate" placeholder="Digite a data do seu Nascimento" required>
                                </div>	


                                <div class="form-group" id="cpf-candidate-group">
                                        <label for="cpf-candidate">CPF do Candidato</label>
                                        <input type="text" class="form-control" id="cpf-candidate" placeholder="Digite o seu CPF" required>
                                </div>

                            </div>
                        </div>

                         <div class="col-sm-12">
							<h2>Dados de Contato</h2>	
                            <div class="row">
                                <div class="form-group" id="mobile-candidate-group">
                                    <label for="mobile-candidate">Celular</label>
                                    <input type="text" class="form-control" id="mobile-candidate" placeholder="Digite o Número do Celular" required>
                                </div>	

                            </div>
                        </div>
                        
                         <div class="col-sm-12">
							<h2>Dados de Localização</h2>	
                            <div class="row">
                                 <div class="form-group" id="zip-candidate-group">
                                    <label for="zip-candidate">CEP</label>
                                    <input type="text" class="form-control" id="zip-candidate" placeholder="Digite o Número do CEP" required>
                                </div>	

                                 <div class="form-group" id="city-candidate-group">
                                    <label for="city-candidate">Cidade</label>
                                    <input type="text" class="form-control" id="city-candidate" placeholder="Digite a sua Cidade" required>
                                </div>	

                                <div class="form-group" id="estate-candidate-group">
                                    <label for="estate-candidate">Estado</label>
                                    <input type="text" class="form-control" id="estate-candidate" placeholder="Digite o seu Estado" required>
                                </div>

                                <div class="form-group" id="neighborhood-candidate-group">
                                    <label for="neighborhood-candidate">Bairro</label>
                                    <input type="text" class="form-control" id="neighborhood-candidate" placeholder="Digite o seu Bairro" required>
                                </div>

                                 <div class="form-group" id="street-candidate-group">
                                    <label for="street-candidate">Rua</label>
                                    <input type="text" class="form-control" id="street-candidate" placeholder="Digite a sua Rua" required>
                                </div>

                                <div class="form-group" id="number-candidate-group">
                                    <label for="number-candidate">Número</label>
                                    <input type="text" class="form-control" id="number-candidate" placeholder="Digite o Número da Residencia" required>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-block btn-primary" type="submit">Salvar</button>
                        </div>
                    </div>
						
										
				</form>

			</div>
		</section>

        

        <ContactsWrapper />      
        <FooterWrapper />
        <LoginPopup />
        <RegisterPopup />
    </div>
</template>

<script>
import HaveAnAccount from '@/components/HaveAnAccount.vue'
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import RegisterPopup from "@/components/RegisterPopup.vue"
export default {
    components: {
        HaveAnAccount,
        PageLoader,
        NavBar,
        HeaderBar,
        ContactsWrapper,        
        FooterWrapper,
        LoginPopup,
        RegisterPopup
    },
    data(){
        return {
            
        }        
    },
    created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);
    this.keyword = this.$route.query.keyword
  }
}
</script>

<style>

</style>
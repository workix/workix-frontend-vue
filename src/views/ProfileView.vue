<template>
  <div id="">
      
        <section id="jobs">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Perfil</h1>
						<h4>Altere as suas configurações de conta</h4>
						<HaveAnAccount />
					</div>
				</div>

				<form @submit.prevent="send" v-if="type == 'Candidate' && isLoggedIn">
					<div class="row">
						<div class="col-12">
							<h2>Detalhes do Usuário</h2>
                            <div class="row">
                                
                                    <div class="form-group" id="uuid-user-group">
                                        <label for="uuid-user">UUID do Usuário</label>
                                        <input type="text" v-model="uuidUser" class="form-control" id="uuid-user" readonly>
                                    </div>			

                                    
                                    <div class="form-group" id="id-group">
                                        <label for="id">ID</label>
                                        <input type="text" v-model="idUser" class="form-control" id="id" readonly>
                                    </div>					                                
                                
                                    <div class="form-group" id="active-group">
                                        <label for="active">Ativo</label>
                                        <input type="checkbox" v-model="activeUser" class="form-control" id="active" readonly>
                                    </div>		

                                    <div class="form-group" id="email-group">
                                        <label for="email">Email</label>
                                        <input type="text" v-model="emailUser" class="form-control" id="email" placeholder="Insira seu Email" required readonly>
                                    </div>				

                                    <div class="form-group" id="firebase-uuid-group">
                                        <label for="firebase-uuid">UUID Firebase</label>
                                        <input type="text" v-model="uuidFirebaseUser" class="form-control" id="firebase-uuid" readonly>
                                    </div>		

                                    <div class="form-group" id="firebase-message-token-group">
                                        <label for="firebase-message-token">Message Token Firebase</label>
                                        <input type="text" v-model="messageTokenFirebaseUser" class="form-control" id="firebase-message-token" placeholder="Insira o Message Token do Firebase">
                                    </div>		
                                    
                                
                            </div>
                            
                        </div>

                        <div class="col-sm-12">
							<h2>Detalhes do Candidato</h2>	
                            <div class="row">
                                <div class="form-group" id="uuid-candidate-group">
                                        <label for="uuid-candidate">UUID do Candidato</label>
                                        <input type="text" v-model="uuidCandidate" class="form-control" id="uuid-candidate" readonly>
                                </div>	

                                 <div class="form-group" id="id-candidate-group">
                                        <label for="id-candidate">ID do Candidato</label>
                                        <input type="text" v-model="idCandidate" class="form-control" id="id-candidate" readonly>
                                    </div>	

                                <div class="form-group" id="name-candidate-group">
                                        <label for="name-candidate">Nome do Candidato</label>
                                        <input type="text" v-model="nameCandidate" class="form-control" id="name-candidate" placeholder="Digite o seu Nome" required>
                                </div>	

                                <div class="form-group" id="birthdate-candidate-group">
                                        <label for="birthdate-candidate">Data de Nascimento</label>
                                        <input type="text" v-model="birthDateCandidate" class="form-control" id="birthdate-candidate" placeholder="Digite a data do seu Nascimento" required>
                                </div>	


                                <div class="form-group" id="cpf-candidate-group">
                                        <label for="cpf-candidate">CPF do Candidato</label>
                                        <input type="text" v-model="cpfCandidate" class="form-control" id="cpf-candidate" placeholder="Digite o seu CPF" required>
                                </div>

                            </div>
                        </div>

                         <div class="col-sm-12">
							<h2>Dados de Contato</h2>	
                            <div class="row">
                                <div class="form-group" id="mobile-candidate-group">
                                    <label for="mobile-candidate">Celular</label>
                                    <input type="text" v-model="mobileCandidate" class="form-control" id="mobile-candidate" placeholder="Digite o Número do Celular" required>
                                </div>	

                            </div>
                        </div>
                        
                         <div class="col-sm-12">
							<h2>Dados de Localização</h2>	
                            <div class="row">
                                 <div class="form-group" id="zip-candidate-group">
                                    <label for="zip-candidate">CEP</label>
                                    <input type="text" @change="getAddressFromZip" v-model="zipLocale" class="form-control" id="zip-candidate" placeholder="Digite o Número do CEP" required>
                                </div>	

                                 <div class="form-group" id="city-candidate-group">
                                    <label for="city-candidate">Cidade</label>
                                    <input type="text" v-model="cityLocale" class="form-control" id="city-candidate" placeholder="Digite a sua Cidade" required>
                                </div>	

                                <div class="form-group" id="estate-candidate-group">
                                    <label for="estate-candidate">Estado</label>
                                    <input type="text" v-model="estateLocale" class="form-control" id="estate-candidate" placeholder="Digite o seu Estado" required>
                                </div>

                                <div class="form-group" id="neighborhood-candidate-group">
                                    <label for="neighborhood-candidate">Bairro</label>
                                    <input type="text" v-model="neighLocale" class="form-control" id="neighborhood-candidate" placeholder="Digite o seu Bairro" required>
                                </div>

                                 <div class="form-group" id="street-candidate-group">
                                    <label for="street-candidate">Rua</label>
                                    <input type="text" v-model="streetLocale" class="form-control" id="street-candidate" placeholder="Digite a sua Rua" required>
                                </div>

                                <div class="form-group" id="number-candidate-group">
                                    <label for="number-candidate">Número</label>
                                    <input type="text" v-model="numberLocale" class="form-control" id="number-candidate" placeholder="Digite o Número da Residencia" required>
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

                <form @submit.prevent="send" v-if="type == 'Company' && isLoggedIn">
                    <div class="row">
						<div class="col-12">
							<h2>Detalhes do Usuário</h2>
                            <div class="row">
                                
                                    <div class="form-group" id="uuid-user-group">
                                        <label for="uuid-user">UUID do Usuário</label>
                                        <input type="text" v-model="uuidUser" class="form-control" id="uuid-user" readonly>
                                    </div>			

                                    
                                    <div class="form-group" id="id-group">
                                        <label for="id">ID</label>
                                        <input type="text" v-model="idUser" class="form-control" id="id" readonly>
                                    </div>					                                
                                
                                    <div class="form-group" id="active-group">
                                        <label for="active">Ativo</label>
                                        <input type="checkbox" v-model="activeUser" class="form-control" id="active" readonly>
                                    </div>		

                                    <div class="form-group" id="email-group">
                                        <label for="email">Email</label>
                                        <input type="text" v-model="emailUser" class="form-control" id="email" placeholder="Insira seu Email" required readonly>
                                    </div>				

                                    <div class="form-group" id="firebase-uuid-group">
                                        <label for="firebase-uuid">UUID Firebase</label>
                                        <input type="text" v-model="uuidFirebaseUser" class="form-control" id="firebase-uuid" readonly>
                                    </div>		

                                    <div class="form-group" id="firebase-message-token-group">
                                        <label for="firebase-message-token">Message Token Firebase</label>
                                        <input type="text" v-model="messageTokenFirebaseUser" class="form-control" id="firebase-message-token" placeholder="Insira o Message Token do Firebase">
                                    </div>		
                                    
                                
                            </div>
                            
                        </div>

                        <div class="col-sm-12">
							<h2>Detalhes da Empresa</h2>	
                            <div class="row">
                                <div class="form-group" id="uuid-company-group">
                                        <label for="uuid-company">UUID da Empresa</label>
                                        <input type="text" v-model="uuidCompany" class="form-control" id="uuid-company" readonly>
                                </div>	

                                 <div class="form-group" id="id-company-group">
                                        <label for="id-company">ID da Empresa</label>
                                        <input type="text" v-model="idCompany" class="form-control" id="id-company" readonly>
                                </div>	

                                <div class="form-group" id="id-company-group">
                                        <label for="logo-company">Logo da Empresa</label>
                                        <input type="text" v-model="logoCompany" class="form-control" id="logo-company" required>
                                </div>

                                <div class="form-group" id="name-company-group">
                                        <label for="name-company">Nome da Empresa</label>
                                        <input type="text" v-model="nameCompany" class="form-control" id="name-company" placeholder="Digite o nome da Empresa" required>
                                </div>	

                                <div class="form-group" id="segment-company-group">
                                        <label for="segment-company">Segmento da Empresa</label>
                                        <input type="text" v-model="segmentCompany" class="form-control" id="segment-company" placeholder="Digite o segmento da Empresa" required>
                                </div>	

                                <div class="form-group" id="description-company-group">
                                        <label for="description-company">Descrição da Empresa</label>
                                        <!--<input type="text" v-model="descriptionCompany" class="form-control" id="description-company" placeholder="Digite a Descrição da Empresa" required>-->
                                        <textarea id="description-company" v-model="descriptionCompany" class="form-control" rows="3" required></textarea>
                                </div>	

                                <div class="form-group" id="cnpj-company-group">
                                        <label for="cnpj-company">CNPJ da Empresa</label>
                                        <input type="text" v-model="cnpjCompany" class="form-control" id="cnpj-company" placeholder="Digite o CNPJ da Empresa" required>
                                </div>

                            </div>
                        </div>

                         <div class="col-sm-12">
							<h2>Dados de Contato</h2>	
                            <div class="row">
                                <div class="form-group" id="mobile-candidate-group">
                                    <label for="mobile-candidate">Celular</label>
                                    <input type="text" v-model="contactCompany" class="form-control" id="mobile-candidate" placeholder="Digite o Número do Celular" required>
                                </div>	

                            </div>
                        </div>
                        
                         <div class="col-sm-12">
							<h2>Dados de Localização</h2>	
                            <div class="row">
                                 <div class="form-group" id="zip-candidate-group">
                                    <label for="zip-candidate">CEP</label>
                                    <input type="text" @change="getAddressFromZip" v-model="zipLocale" class="form-control" id="zip-candidate" placeholder="Digite o Número do CEP" required>
                                </div>	

                                 <div class="form-group" id="city-candidate-group">
                                    <label for="city-candidate">Cidade</label>
                                    <input type="text" v-model="cityLocale" class="form-control" id="city-candidate" placeholder="Digite a sua Cidade" required>
                                </div>	

                                <div class="form-group" id="estate-candidate-group">
                                    <label for="estate-candidate">Estado</label>
                                    <input type="text" v-model="estateLocale" class="form-control" id="estate-candidate" placeholder="Digite o seu Estado" required>
                                </div>

                                <div class="form-group" id="neighborhood-candidate-group">
                                    <label for="neighborhood-candidate">Bairro</label>
                                    <input type="text" v-model="neighLocale" class="form-control" id="neighborhood-candidate" placeholder="Digite o seu Bairro" required>
                                </div>

                                 <div class="form-group" id="street-candidate-group">
                                    <label for="street-candidate">Rua</label>
                                    <input type="text" v-model="streetLocale" class="form-control" id="street-candidate" placeholder="Digite a sua Rua" required>
                                </div>

                                <div class="form-group" id="number-candidate-group">
                                    <label for="number-candidate">Número</label>
                                    <input type="text" v-model="numberLocale" class="form-control" id="number-candidate" placeholder="Digite o Número da Residencia" required>
                                </div>
                            </div>						
                        </div>
                    </div>

                    <div class="row">
						<div class="col-sm-12">
							<p>&nbsp;</p>
							<h2>Mídias Sociais</h2>
							<button type="button" style="margin-right:10px;" class="btn btn-primary" @click="addMedia">Adicionar Mídia Social</button>
							<button type="button" style="margin-right:10px;" class="btn btn-secondary" @click="clearMedias">Apagar Mídias</button>
							<br />
							<br />
							<br />
						</div>
					</div>	

                    <template v-for="(m,i) in mediasCompany" :key="i">
					<div class="row social-network">
						<div class="col-sm-6">
							<div class="form-group" id="company-medias-group">
								<label for="company-medias-name">Mídia {{i + 1}}</label>
								<input type="text" v-model="m.media" class="form-control" id="company-medias-name" placeholder="Digite o nome da Mídia">
							</div>
						</div>
						<div class="col-sm-6">
							<label for="company-medias-url">Url</label>
							<input type="text" v-model="m.url" class="form-control" id="company-medias-url" placeholder="Digite a url da mídia">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<hr class="dashed">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<p v-if="mediasCompany.length == i+1"><a @click="addMedia">+ Adicionar Mídia</a></p>
							<p><a @click="removeMedia(i)">+ Remover Mídia {{i + 1}} - {{m.media}}</a></p>
							<hr>
						</div>
					</div>
				</template>

                    <div class="row">
                        <div class="col">
                            <button class="btn btn-block btn-primary" type="submit">Salvar</button>
                        </div>
                    </div>	
                </form>
			</div>
		</section>

        <ContactsWrapper />      
      
    </div>
</template>

<script>
import HaveAnAccount from '@/components/HaveAnAccount.vue'
import ContactsWrapper from '@/components/ContactsWrapper.vue'

import { useToast } from "vue-toastification";
export default {    
    setup(){
	// Get toast interface
    const toast = useToast();
	return {toast}
	},
    components: {
        HaveAnAccount,
        ContactsWrapper
    },
    data(){
        return {
            isLoggedIn: null,
            type: "",
            candidate: null,
            company: null,
            uuidUser: "",
            idUser: 0,
            activeUser: null,
            emailUser: "",
            uuidFirebaseUser: "",
            messageTokenFirebaseUser: "",
            uuidCandidate: "",
            uuidCompany: "",
            idCandidate: 0,
            idCompany: 0,
            nameCandidate: "",
            nameCompany: "",
            birthDateCandidate: null,
            cpfCandidate: "",
            cnpjCompany: "",
            contactCompany: "",
            logoCompany: "",
            mediasCompany: [],
            descriptionCompany: "",
            segmentCompany: "",
            mobileCandidate: "",
            zipLocale: "",
            cityLocale: "",
            estateLocale: "",
            neighLocale: "",
            streetLocale: "",
            numberLocale: ""
        }        
    },
    async created(){
	
    const token = localStorage.getItem("jwt")

    if(token){
    const {data} = await this.aboutMe(token)    

    this.type = data.type
    this.isLoggedIn = !(data == null) 

    if (this.type == 'Candidate'){
        this.candidate = data.owner
        this.copyCandidate()
    } else if (this.type == 'Company'){
        this.company = data.owner
        this.copyCompany()
    } else{
        throw new Error("Incorrect Type")
    }
    }
    
        
  },
  methods:{
    addMedia()  {
        console.log("ADD MEDIAS")
		this.mediasCompany.push({media: "", url: ""})
        console.log(this.mediasCompany)
	},
    removeMedia(index){
		this.mediasCompany.splice(index, 1)
	},
    clearMedias(){
        this.mediasCompany = []
    },
      copyCandidate(){
          // USER object
          this.uuidUser = this.candidate.user.uuid
          this.idUser = this.candidate.user.id
          this.activeUser = this.candidate.user.active
          this.emailUser = this.candidate.user.email
          this.uuidFirebaseUser = this.candidate.user.firebaseUUID
          this.messageTokenFirebaseUser = this.candidate.user.firebaseMessageToken

          // Candidate object
          this.uuidCandidate = this.candidate.uuid
          this.idCandidate = this.candidate.id
          this.nameCandidate = this.candidate.name
          this.birthDateCandidate = this.candidate.birthDate
          this.cpfCandidate = this.candidate.cpf

          if(this.candidate.contact){
              this.mobileCandidate = this.candidate.contact.mobilePhone
          }

          if(this.candidate.locale){
              this.zipLocale = this.candidate.locale.zipCode
              this.cityLocale = this.candidate.locale.city
              this.estateLocale = this.candidate.locale.estate
              this.neighLocale = this.candidate.locale.neighborhood
              this.streetLocale = this.candidate.locale.street
              this.numberLocale = this.candidate.locale.number
          }


      },
      copyCompany(){           

          // USER object
          this.uuidUser = this.company.user.uuid
          this.idUser = this.company.user.id
          this.activeUser = this.company.user.active
          this.emailUser = this.company.user.email
          this.uuidFirebaseUser = this.company.user.firebaseUUID
          this.messageTokenFirebaseUser = this.company.user.firebaseMessageToken

          // Company object
          this.uuidCompany = this.company.uuid
          this.idCompany = this.company.id
          this.nameCompany = this.company.name          
          this.cnpjCompany = this.company.cnpj
          this.logoCompany = this.company.logo
          this.descriptionCompany = this.company.description
          this.segmentCompany = this.company.segment
          this.mediasCompany = this.company.medias

          if(this.company.contact){
              this.contactCompany = this.company.contact.mobilePhone
          }

          if(this.company.locale){
              this.zipLocale = this.company.locale.zipCode
              this.cityLocale = this.company.locale.city
              this.estateLocale = this.company.locale.estate
              this.neighLocale = this.company.locale.neighborhood
              this.streetLocale = this.company.locale.street
              this.numberLocale = this.company.locale.number
          }


      },
        async aboutMe(token){
            let config = { headers: { "Authorization": `Bearer ${token}` } }
            return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/auth/me`, config )
        },
        async update(token){
            const payloadCandidate = {
                candidate: {
                    user: {
                        uuid: this.uuidUser,
                        active: this.activeUser,
                        email: this.emailUser,
                        firebaseUUID: this.uuidFirebaseUser,
                        firebaseMessageToken: this.messageTokenFirebaseUser,
                        id: this.idUser
                    },
                    contact:{
                        mobilePhone: parseInt(this.mobileCandidate)
                    },
                    locale: {
                        city: this.cityLocale,
                        estate: this.estateLocale,
                        neighborhood: this.neighLocale,
                        number: this.numberLocale,
                        street: this.streetLocale,
                        zipCode: parseInt(this.zipLocale)
                    },
                    uuid: this.uuidCandidate,
                    name: this.nameCandidate,
                    birthDate: this.birthDateCandidate,
                    id: parseInt(this.idCandidate),
                    cpf: parseInt(this.cpfCandidate)
                }
            }

            const payloadCompany = {
                company: {
                    user: {
                        uuid: this.uuidUser,
                        active: this.activeUser,
                        email: this.emailUser,
                        firebaseUUID: this.uuidFirebaseUser,
                        firebaseMessageToken: this.messageTokenFirebaseUser,
                        id: this.idUser
                    },
                    contact:{
                        mobilePhone: parseInt(this.contactCompany)
                    },
                    locale: {
                        city: this.cityLocale,
                        estate: this.estateLocale,
                        neighborhood: this.neighLocale,
                        number: this.numberLocale,
                        street: this.streetLocale,
                        zipCode: parseInt(this.zipLocale)
                    },
                    uuid: this.uuidCompany,
                    name: this.nameCompany,                    
                    id: parseInt(this.idCompany),
                    cnpj: parseInt(this.cnpjCompany),
                    description: this.descriptionCompany,
                    segment: this.segmentCompany,
                    logo: this.logoCompany,
                    medias: this.mediasCompany
                }
            }            

            let config = { headers: { "Authorization": `Bearer ${token}` } }
            return this.$http.put(`${process.env.VUE_APP_BACKEND_SERVER}/vue/update_by_token`, this.type == 'Candidate' ? payloadCandidate : payloadCompany, config )
        },
        async getAddressFromZip(target){            
      
            if(target){                
            const zip = this.zipLocale.match(/\d+/g)           
            
            const {data} = await this.$http.get(`https://api.pagar.me/1/zipcodes/${zip[0]}?api_key=${process.env.VUE_APP_PAGARME_KEY}`)
            
            this.streetLocale = data.street
            this.neighLocale = data.neighborhood
            this.cityLocale = data.city
            this.estateLocale = data.state
            
            }     
    },
        async send(){
            const token = localStorage.getItem("jwt")

            try {
                const {data} = await this.update(token)

                console.log(data)

                this.toast.success(`Dados Salvos com Sucesso!`, { timeout: 2000 })

                this.$router.go({path: '/profile', force: true });    

                
            } catch (error) {
                console.error(error)
                this.toast.error(`Ocorreu uma falha ao salvar os Dados`, { timeout: 2000 })
            }
            
        }
        
  }
}
</script>

<style>

</style>
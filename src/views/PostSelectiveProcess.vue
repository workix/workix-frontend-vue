<template>
  <!-- ============ TITLE START ============ -->
		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Cadastrar Processo Seletivo</h1>
						<h4>Criar novo Processo</h4>						
					</div>
				</div>
			</div>
		</section>

		<!-- ============ TITLE END ============ -->

        <section id="selective_process">
            <form @submit.prevent="send">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Detalhes do Processo Seletivo</h2>
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-sm-3">
                         <div class="form-group" id="sp-active-group">
                            <label for="sp-active">Ativo</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="checkbox" v-model="selectiveProcess.active" class="form-control" id="sp-active" required>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-start-group">						
                            <label for="sp-start">Inicia em</label>
                            <Datepicker locale="pt-BR" v-model="selectiveProcess.start" autoApply placeholder="Selecione uma Data" required :enableTimePicker="true"  id="sp-start" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-expire-group">						
						<label for="sp-expire">Expira em</label>
						<Datepicker locale="pt-BR" v-model="selectiveProcess.expire" autoApply placeholder="Selecione uma Data" required :enableTimePicker="true"  id="sp-expire" class="form-control"/>
					</div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-max-candidates-group">
                            <label for="sp-max-candidates">Máximo de Candidatos</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="number" v-model="selectiveProcess.maxCandidates" class="form-control" id="sp-max-candidates" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-disabled-at-group">						
                            <label for="sp-disabled-at">Desativada em</label>
                            <Datepicker locale="pt-BR" v-model="selectiveProcess.disabledAt" autoApply placeholder="Selecione uma Data" :enableTimePicker="true"  id="sp-start" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        
                    </div>
                </div>
                <div class="row">
                    <br/>
                    <br/>
                    <br/>
                    <div class="col-sm-12">
                        <h2>Detalhes da Vaga</h2>
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-sm-4">
                            <div class="form-group" id="job-id-group">
                                <label for="job-id">ID</label>
                                <!-- eslint-disable-next-line vue/no-mutating-props -->
                                <input type="text" v-model="job.id" class="form-control" id="job-id" required @change="populateJob">
                            </div>
                    </div>
                    <div class="col-sm-4">
                         <div class="form-group" id="job-uuid-group">
                            <label for="job-uuid">UUID</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" v-if="job" v-model="job.uuid" class="form-control" id="job-uuid" readonly>
                        </div>
                    </div>
                    <div class="col-sm-4">
                           <div class="form-group" id="job-active-group">
                                <label for="job-active">Ativo</label>
                                <!-- eslint-disable-next-line vue/no-mutating-props -->
                                <input type="checkbox" v-if="job" v-model="job.active" class="form-control" id="job-active" readonly disabled>
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                         <div class="form-group" id="job-title-group">
                            <label for="job-title">Título</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" class="form-control" v-if="job" v-model="job.title" id="job-title" placeholder="exemplo Web Designer" readonly>
                        </div>
                    </div>
                </div>
                <div class="row">                    
                    <div class="col-sm-4">
                        <div class="form-group" id="job-description-group">
                            <label for="job-description">Descrição</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->        
                            <textarea  class="form-control" rows="3" v-if="job" v-model="job.description" id="job-description" placeholder="Descrição da Vaga" readonly></textarea>
                        </div>
                    </div>
                    <div class="col-sm-4">
                         <div class="form-group" id="job-requirement-group">
                            <label for="job-requirement">Requerimentos</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <textarea class="form-control" rows="3" v-if="job" v-model="job.requirement" id="job-requirement" placeholder="Requerimentos da Vaga" readonly></textarea>        
                        </div>   
                    </div>
                    <div class="col-sm-4">
                            <div class="form-group" id="job-title-group">
                                <label for="job-benefits">Benefícios</label>
                                <!-- eslint-disable-next-line vue/no-mutating-props -->        
                                <textarea  class="form-control" rows="3" v-if="job" v-model="job.benefits" id="job-benefits" placeholder="Benefícios da Vaga" readonly></textarea>        
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                         <div class="form-group" id="job-min-payment-group">
                            <label for="job-min-payment">Pagamento Mínimo</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" class="form-control"  v-if="job" v-model="job.minPayment" id="job-min-payment" placeholder="Valor Mínimo de Pagamento" readonly>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="job-max-payment-group">
                            <label for="job-max-payment">Pagamento Máximo</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" class="form-control" v-if="job" v-model="job.maxPayment" id="job-max-payment" placeholder="Valor Máximo de Pagamento" readonly>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="job-type-group">
                            <label for="job-type">Forma de Trabalho</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <select class="form-control" v-if="job" v-model="job.jobType" id="job-type" disabled>
                                <option>Escolha a forma de trabalho</option>
                                <option value="FREELANCE">Freelance</option>
                                <option value="PARTTIME">Part Time</option>
                                <option value="FULLTIME">Full Time</option>
                                <option value="INTERNSHIP">Internship</option>
                                <option value="VOLUNTEER">Volunteer</option>
                                <option value="TEMPORARY">Temporary</option>            
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="job-category-group">
                            <label for="job-category">Categoria do Trabalho</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <select class="form-control" v-if="job" v-model="job.jobCategory" id="job-category" disabled>
                                <option>Escolha uma Categoria</option>
                                <option value="MANAGEMENT">Management</option>
                                <option value="OPERATOR">Operator</option>            
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Salvar</button>
                    </div>
                </div>
            </div>
            
            
            </form>
        </section>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import { useStore } from 'vuex';
import { computed } from 'vue'
import { useToast } from 'vue-toastification';
export default {
    setup(){
        const toast = useToast()
        const store = useStore()
        const company = computed(() => store.state.owner )
        return {company, toast}
    },
    data(){
        return {          
            job: {},
            selectiveProcess: {}
        }
    },
    methods: {
        timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async send(){
            const token = localStorage.getItem("jwt")
            const payload = {
                active: this.selectiveProcess.active,
                candidates: this.selectiveProcess.candidates,    
                expire: this.selectiveProcess.expire,                
                job: this.job,
                maxCandidates: this.selectiveProcess.maxCandidates,
                start: this.selectiveProcess.start
                }

                if(this.selectiveProcess.id){
                    payload.id = this.selectiveProcess.id
                }

            try {
                const {data} = await this.saveOrUpdate(token, payload)
                this.toast.success("Dados Salvos com sucesso!", {timeout: 2000})

                await this.timeout(1000)
                const path = `/cadastrar_processo_seletivo?id=${data.id}`			
			
                // this.$router.go({path, force: true})
                window.location.href = `${path}`;


            } catch (error) {
                console.error(error)
                this.toast.error("Não foi Possível salvar os Dados", {timeout: 2000})
            }

        },
        saveOrUpdate(token, payload){
            let config = { headers: { "Authorization": `Bearer ${token}` } }
            return this.$http.post(`${process.env.VUE_APP_BACKEND_SERVER}/vue/create_or_update_sp_by_token`, payload, config)
        },
        getSelectiveProcessById(id){
            return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/selectiveprocesses/${id}`)
        },
        getJobByIdAndCompanyId(jobId, companyId){
            return this.$http.get(`${process.env.VUE_APP_BACKEND_SERVER}/jobs/${jobId}/company/${companyId}`)
        },
        async populateJob(event){            
            const jobId = event.target.value
            const companyId = this.company.id
            
            try {

            const {data} = await this.getJobByIdAndCompanyId(jobId, companyId)
            this.job = data
            this.toast.success(`Encontrada vaga ${this.job.title}`, {timeout: 2000})
                
            } catch (error) {
                console.error(error)
                this.job = {}
                this.toast.info(`Vaga com ID: ${jobId} Não Encontrada`, {timeout: 2000})
            }

            
        }
    },
    components: { Datepicker },
    async created(){
        const spId = this.$route.query.id

        if(spId){
            const {data} = await this.getSelectiveProcessById(spId)
            this.job = data.job           
            this.selectiveProcess = data 
        }
    }
}
</script>

<style>

</style>
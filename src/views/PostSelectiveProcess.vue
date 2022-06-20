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
            <form @submit.prevent="null">
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
                            <input type="checkbox" class="form-control" id="sp-active" required>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-start-group">						
                            <label for="sp-start">Inicia em</label>
                            <Datepicker locale="pt-BR" v-model="start" autoApply placeholder="Selecione uma Data" required :enableTimePicker="true"  id="sp-start" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-expire-group">						
						<label for="sp-expire">Expira em</label>
						<Datepicker locale="pt-BR" v-model="expire" autoApply placeholder="Selecione uma Data" required :enableTimePicker="true"  id="sp-expire" class="form-control"/>
					</div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-max-candidates-group">
                            <label for="sp-max-candidates">Máximo de Candidatos</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="number" class="form-control" id="sp-max-candidates" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group" id="sp-disabled-at-group">						
                            <label for="sp-disabled-at">Desativada em</label>
                            <Datepicker locale="pt-BR" v-model="disabledAt" autoApply placeholder="Selecione uma Data" :enableTimePicker="true"  id="sp-start" class="form-control"/>
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
                                <input type="text" class="form-control" id="job-id" required>
                            </div>
                    </div>
                    <div class="col-sm-4">
                         <div class="form-group" id="job-uuid-group">
                            <label for="job-uuid">UUID</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" class="form-control" id="job-uuid" readonly>
                        </div>
                    </div>
                    <div class="col-sm-4">
                           <div class="form-group" id="job-active-group">
                                <label for="job-active">Ativo</label>
                                <!-- eslint-disable-next-line vue/no-mutating-props -->
                                <input type="checkbox" class="form-control" id="job-active" readonly disabled>
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                         <div class="form-group" id="job-title-group">
                            <label for="job-title">Título</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" class="form-control" id="job-title" placeholder="exemplo Web Designer" readonly>
                        </div>
                    </div>
                </div>
                <div class="row">                    
                    <div class="col-sm-4">
                        <div class="form-group" id="job-description-group">
                            <label for="job-description">Descrição</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->        
                            <textarea  class="form-control" rows="3" id="job-description" placeholder="Descrição da Vaga" readonly></textarea>
                        </div>
                    </div>
                    <div class="col-sm-4">
                         <div class="form-group" id="job-requirement-group">
                            <label for="job-requirement">Requerimentos</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <textarea class="form-control" rows="3" id="job-requirement" placeholder="Requerimentos da Vaga" readonly></textarea>        
                        </div>   
                    </div>
                    <div class="col-sm-4">
                            <div class="form-group" id="job-title-group">
                                <label for="job-benefits">Benefícios</label>
                                <!-- eslint-disable-next-line vue/no-mutating-props -->        
                                <textarea  class="form-control" rows="3" id="job-benefits" placeholder="Benefícios da Vaga" readonly></textarea>        
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                         <div class="form-group" id="job-min-payment-group">
                            <label for="job-min-payment">Pagamento Mínimo</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" class="form-control" id="job-min-payment" placeholder="Valor Mínimo de Pagamento" readonly>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="job-max-payment-group">
                            <label for="job-max-payment">Pagamento Máximo</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <input type="text" class="form-control" id="job-max-payment" placeholder="Valor Máximo de Pagamento" readonly>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group" id="job-type-group">
                            <label for="job-type">Forma de Trabalho</label>
                            <!-- eslint-disable-next-line vue/no-mutating-props -->
                            <select class="form-control" id="job-type" disabled>
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
                            <select class="form-control" id="job-category" disabled>
                                <option>Escolha uma Categoria</option>
                                <option value="MANAGEMENT">Management</option>
                                <option value="OPERATOR">Operator</option>            
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </section>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
export default {
    data(){
        return {
            expire: null,
            start: null,
            disabledAt: null
        }
    },
    components: { Datepicker }
}
</script>

<style>

</style>
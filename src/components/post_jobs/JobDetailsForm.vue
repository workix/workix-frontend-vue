<template>
    <div class="form-group" id="job-id-group" v-if="job.id">
        <label for="job-id">ID</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input type="text" v-model="job.id" class="form-control" id="job-id" readonly>
    </div>

    <div class="form-group" id="job-uuid-group">
        <label for="job-uuid">UUID</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input type="text" v-model="job.uuid" class="form-control" id="job-uuid" readonly>
    </div>
    
    <div class="form-group" id="job-active-group">
        <label for="job-active">Ativo</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input type="checkbox" v-model="job.active" class="form-control" id="job-active" required>
    </div>
    <div class="form-group" id="job-feature-group">
        <label for="job-feature">Destaque</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input type="checkbox" v-model="job.feature" class="form-control" id="job-feature" required>
    </div>
    <div class="form-group" id="job-title-group">
        <label for="job-title">Título</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input type="text" v-model="job.title" class="form-control" id="job-title" placeholder="exemplo Web Designer" required>
    </div>
    <div class="form-group" id="job-description-group">
        <label for="job-description">Descrição</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->        
        <textarea  v-model="job.description" class="form-control" rows="3" id="job-description" placeholder="Descrição da Vaga" required></textarea>
    </div>
    <div class="form-group" id="job-requirement-group">
        <label for="job-requirement">Requerimentos</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <textarea  v-model="job.requirement" class="form-control" rows="3" id="job-requirement" placeholder="Requerimentos da Vaga" required></textarea>        
    </div>
    <div class="form-group" id="job-title-group">
        <label for="job-benefits">Benefícios</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->        
        <textarea  v-model="job.benefits" class="form-control" rows="3" id="job-benefits" placeholder="Benefícios da Vaga" required></textarea>        
    </div>

    <div class="form-group" id="job-min-payment-group">
        <label for="job-min-payment">Pagamento Mínimo</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input type="text" v-model="job.minPayment" class="form-control" id="job-min-payment" placeholder="Valor Mínimo de Pagamento" required>
    </div>

    <div class="form-group" id="job-max-payment-group">
        <label for="job-max-payment">Pagamento Máximo</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input type="text" v-model="job.maxPayment" class="form-control" id="job-max-payment" placeholder="Valor Máximo de Pagamento" required>
    </div>

    <div class="form-group" id="job-type-group">
        <label for="job-type">Forma de Trabalho</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <select v-model="job.jobType" class="form-control" id="job-type">
            <option>Escolha a forma de trabalho</option>
            <option value="FREELANCE">Freelance</option>
            <option value="PARTTIME">Part Time</option>
            <option value="FULLTIME">Full Time</option>
            <option value="INTERNSHIP">Internship</option>
            <option value="VOLUNTEER">Volunteer</option>
            <option value="TEMPORARY">Temporary</option>            
        </select>
    </div>

    <div class="form-group" id="job-category-group">
        <label for="job-category">Categoria do Trabalho</label>
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <select v-model="job.jobCategory" class="form-control" id="job-category">
            <option>Escolha uma Categoria</option>
            <option value="MANAGEMENT">Management</option>
            <option value="OPERATOR">Operator</option>            
        </select>
    </div>
</template>

<script>
export default {
    props:{
        job: Object
    }
}
</script>

<style>

</style>
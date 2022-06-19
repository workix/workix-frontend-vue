<template>
  <div class="form-group" id="company-name-group">
    <label for="company-name">Nome da Empresa</label>
      <!-- eslint-disable-next-line vue/no-mutating-props -->
    <input type="text" v-model="company.name" class="form-control" id="company-name" placeholder="Nome da Empresa" readonly>
</div>

<div class="form-group" id="company-cnpj-group">
    <label for="company-cnpj">CNPJ</label>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <input type="text" v-model="company.cnpj" class="form-control" id="company-cnpj" placeholder="CNPJ da Empresa" readonly>
</div>

<div class="form-group" id="company-description-group">
    <label for="company-description">Descrição</label>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <textarea  v-model="company.description" class="form-control" rows="6" id="company-description" placeholder="Descrição da Empresa" readonly></textarea>    
</div>
<div class="form-group" id="company-segment-group">
    <label for="company-segment">Segmento</label>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <input type="text" v-model="company.segment" class="form-control" id="company-segment" placeholder="Segmento da Empresa" readonly>
</div>

<div class="form-group" id="company-locale-group">
    <label for="company-locale">Endereço</label>    
    <input type="text" v-model="location" class="form-control" id="company-locale" placeholder="Localização da Empresa" readonly>
</div>

</template>

<script>

export default {
    props:{        
        company: Object
    },
    data(){
        return {
            location: ""
        }
    },
    created(){
        this.location = `${this.company.locale.city} - ${this.company.locale.estate} - ${this.company.locale.neighborhood} - ${this.company.locale.street} - ${this.company.locale.number} - ${this.company.locale.zipCode}` 
    }
}
</script>

<style>

</style>
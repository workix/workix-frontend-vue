<template>
    <div class="form-group" id="job-email-group">
        <label for="job-email">Email</label>
        <input type="email" class="form-control" id="job-email" placeholder="voce@suaempresa.com.br">
    </div>
    <div class="form-group" id="job-title-group">
        <label for="job-title">Título da Vaga</label>
        <input type="text" class="form-control" id="job-title" placeholder="ex.: Desenvolvedor(a) Front-end">
    </div>
    <div class="form-group" id="job-location-group">
        <label for="job-location">Cidade (Opcional)</label>
        <input type="text" class="form-control" id="job-location" placeholder="ex.: São Paulo">
    </div>
    <div class="form-group" id="job-region-group">
        <label for="job-region">Estado</label>
        <select  class="form-control" id="job-region">
            <option>Escolha um estado</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Minas Gerais</option>
            <option>Paraná</option>
            <option>Santa Catarina</option>
            <option>Rio Grande do Sul</option>
            <option>Pernambuco</option>
        </select>
    </div>
    <div class="form-group" id="job-type-group">
        <label for="job-type">Tipo de Vaga</label>
        <select  class="form-control" id="job-type">
            <option>Escolha um tipo</option>
            <option>Freelance</option>
            <option>Meio Período</option>
            <option>Tempo Integral</option>
            <option>Estágio</option>
            <option>Temporário</option>
        </select>
    </div>
    <div class="form-group" id="job-category-group">
        <label for="job-category">Área</label>
        <select  class="form-control" id="job-category">
            <option>Escolha uma área</option>
            <option>Tecnologia da Informação</option>
            <option>Construção Civil</option>
            <option>Saúde</option>
            <option>Educação</option>
            <option>Logística</option>
            <option>Design & Marketing</option>
        </select>
    </div>
    <div class="form-group" id="job-description-group">
        <label for="job-description">Descrição</label>
        <div class="textarea form-control" id="job-description"></div>
    </div>
    <div class="form-group" id="job-url-group">
        <label for="job-url">E-mail ou Site para Candidatura</label>
        <input type="text" class="form-control" id="job-url" placeholder="E-mail ou site para receber candidaturas">
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
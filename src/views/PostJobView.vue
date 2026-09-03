<template>
  <div id="">
      <PageLoader />
      <NavBar />
      <HeaderBar />
    <!-- ============ JOBS START ============ -->
		<section id="jobs">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Cadastrar Vaga</h1>
						<h4>Encontre o Candidato Certo</h4>
						<HaveAnAccount />
					</div>
				</div>

				<form>
					<div class="row">
						<div class="col-sm-6">
							<h2>Detalhes da Vaga</h2>
							<JobDetailsForm />
						</div>
						<div class="col-sm-6">
							<h2>Detalhes da Empresa</h2>
							<CompanyDetailsForm />
						</div>
					</div>
					<div class="row text-center">
						<p>&nbsp;</p>
						<a href="#" class="btn btn-primary btn-lg">Visualizar <i class="fa fa-arrow-right"></i></a>
					</div>
				</form>

			</div>
		</section>
    <!-- ============ JOBS END ============ -->
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import HaveAnAccount from '@/components/HaveAnAccount.vue'
import JobDetailsForm from '@/components/post_jobs/JobDetailsForm.vue'
import CompanyDetailsForm from '@/components/post_jobs/CompanyDetailsForm.vue'
export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar,
        HaveAnAccount,
        JobDetailsForm,
        CompanyDetailsForm,
    },
	created(){
	let ckeditor = document.createElement('script');  
    ckeditor.setAttribute('src',"js/settings.js");
    document.head.appendChild(ckeditor);
  }
}
</script>

<style>

</style>
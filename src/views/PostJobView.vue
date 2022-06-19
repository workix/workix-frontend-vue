<template>
  <div id="">

    <!-- ============ JOBS START ============ -->
		<section id="jobs">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-12">
						<h1>Post a Job</h1>
						<h4>Find a Right Candidate</h4>
						<HaveAnAccount />
					</div>
				</div>

				<form>
					<div class="row">
						<div class="col-sm-6">
							<h2>Job Details</h2>
							<JobDetailsForm />
						</div>
						<div class="col-sm-6">
							<h2>Company Details</h2>
							<CompanyDetailsForm />
						</div>
					</div>
					<div class="row text-center">
						<p>&nbsp;</p>
						<a href="#" class="btn btn-primary btn-lg">Preview <i class="fa fa-arrow-right"></i></a>
					</div>
				</form>

			</div>
		</section>
    <!-- ============ JOBS END ============ -->
  </div>
</template>

<script>

import HaveAnAccount from '@/components/HaveAnAccount.vue'
import JobDetailsForm from '@/components/post_jobs/JobDetailsForm.vue'
import CompanyDetailsForm from '@/components/post_jobs/CompanyDetailsForm.vue'
export default {
    components: {        
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
<template>
    <a :href="`/detalhes_vaga?id=${job.id}`" :class="isHidden()">
        <div class="row">
            <div class="col-md-1 hidden-sm hidden-xs">
                <img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-responsive" />
            </div>
            <div class="col-lg-5 col-md-5 col-sm-7 col-xs-12 job-title">
                <h5>{{job.title}}</h5>
                <p><strong>{{job.company.name}}</strong> {{job.segment}}</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12 job-location">
                <p><strong>{{job.company.locale.city}}, {{job.company.locale.estate}}</strong></p>
                <p class="hidden-xs">126.3 miles away</p>
            </div>
            <div class="col-lg-2 col-md-2 hidden-sm hidden-xs job-type text-center">
                <p class="job-salary"><strong>R$ {{job.maxPayment.toFixed(2)}}</strong></p>
                <p :class="badge(job.jobType)">{{job.jobType}}</p>
            </div>
        </div>
    </a>
    <!-- JOB TYPE
class="featured applied"
class="featured"
class="applied"
class = null
class="hidden-job"

BADGE
class="badge part-time"
class="badge freelance"
class="badge full-time"
class="badge part-time"
class="badge temporary"
class="badge internship" -->
</template>

<script>
export default {
    props: {
        job: Object
    },
    data(){
		return{
			baseUrl: window.location.origin
		}
	},
    methods:{
        isHidden(){
            return this.job.active ? 'applied' : 'hidden-job'
        },
        badge(jobType){
            switch (jobType) {
                case "FULLTIME":
                    return "badge full-time"               
                case "PARTTIME":
                    return "badge part-time"
                case "FREELANCE":
                    return "badge freelance"
                case "TEMPORARY":
                    return "badge temporary"    
                case "INTERNSHIP":
                    return "badge internship"        
                default:
                    return
            }
        }
    }
}
</script>

<style>
  .jobs a {
    display: "inline-block" !important;        
}
</style>
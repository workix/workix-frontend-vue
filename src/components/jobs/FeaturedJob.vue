<template>
    <a :href="`/detalhes_vaga?id=${job.id}`">
        <img :src="`${baseUrl}/resources/placeholder/400x265.jpg`" alt="Featured Job" class="img-responsive" />
        <div class="featured-job">
            <img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle" />
            <div class="title">
                <h5>{{job.title}}</h5>
                <p>{{job.company.name}}</p>
            </div>
            <div class="data">
                <span class="city"><i class="fa fa-map-marker"></i>{{job.company.locale.city}}</span>
                <span class="type full-time"><i class="fa fa-clock-o"></i>{{job.jobType}}</span>
                <span class="salary"><i class="fa fa-dollar"></i>R$ {{job.maxPayment.toFixed(2)}}</span>
            </div>
            <div class="description">{{job.description}}</div>
        </div>
    </a>
</template>

<script>
export default {
    props:{
        job: Object
    },
    data(){
		return{
			baseUrl: window.location.origin
		}
	}
}
</script>

<style>

</style>
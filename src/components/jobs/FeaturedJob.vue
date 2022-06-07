<template>
    <a href="#">
        <img :src="`${baseUrl}/resources/placeholder/400x265.jpg`" alt="Featured Job" class="img-responsive" />
        <div class="featured-job">
            <img :src="`${baseUrl}/resources/placeholder/60x60.jpg`" alt="" class="img-circle" />
            <div class="title">
                <h5>Web Designer</h5>
                <p>Amazon</p>
            </div>
            <div class="data">
                <span class="city"><i class="fa fa-map-marker"></i>New York City</span>
                <span class="type full-time"><i class="fa fa-clock-o"></i>Full Time</span>
                <span class="salary"><i class="fa fa-dollar"></i>45,000</span>
            </div>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique euismod lorem, a consequat orci consequat a. Donec ullamcorper tincidunt nunc, ut aliquam est pellentesque porta. In neque erat, malesuada sit amet orci ac, laoreet laoreet mauris.</div>
        </div>
    </a>
</template>

<script>
export default {
    data(){
		return{
			baseUrl: window.location.origin
		}
	}
}
</script>

<style>

</style>
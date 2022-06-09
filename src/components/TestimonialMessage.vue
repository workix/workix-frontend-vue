<template>
    <div>    
        <div class="col-sm-3 col-md-2">
            <img :src="testimonial.picture" class="img-circle img-responsive" alt="testimonial" />
        </div>
        <div class="col-sm-9 col-md-10">
            <blockquote>
                <p>{{testimonial.text}}</p>
                <footer>
                    {{testimonial.author.name}}
                    <cite :title="testimonial.signature">{{testimonial.signature}}</cite>
                </footer>
            </blockquote>
        </div>    
    </div>
</template>

<script>
export default {
    props: {
        testimonial: Object
    }
}
</script>

<style>

</style>
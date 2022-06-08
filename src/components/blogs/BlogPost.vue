<template>
  <div>
        <img :src="blog.pictures[0]" class="img-responsive" alt="Blog Post" />
        <h4>{{blog.title}}</h4>
        <h5>
            <span><i class="fa fa-calendar"></i>{{new Date(blog.date).toLocaleString("pt-BR")}}</span>
            <span><i class="fa fa-comment"></i>8 Comments</span>
        </h5>
        <p>{{blog.resume}}</p>
        <p><a :href="`/postagem?id=${blog.id}`" class="btn btn-primary">Leia Mais</a></p>
    </div>
</template>

<script>
export default {
    props: {
        blog: Object
    }
}
</script>

<style>

</style>
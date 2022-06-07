<template>
  <div id="">
    <PageLoader />
    <NavBar />
    <HeaderBar />
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
export default {
    components: {
        PageLoader,
        NavBar,
        HeaderBar
    }
}
</script>

<style>

</style>
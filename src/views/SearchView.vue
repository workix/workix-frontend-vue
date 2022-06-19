<template>
    <div id="">

      <!-- ============ TITLE START ============ -->

		<section id="title">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1>Localizar</h1>
						<h4>Buscando por {{keyword}}</h4>
					</div>
				</div>
			</div>
		</section>

		<!-- ============ TITLE END ============ -->

        <section id="find">

        </section>

        <ContactsWrapper />      
        
    </div>
</template>

<script>

import ContactsWrapper from '@/components/ContactsWrapper.vue'

export default {
    components: {        
        ContactsWrapper
    },
    data(){
        return {
            keyword: ""
        }        
    }    
}
</script>

<style>

</style>
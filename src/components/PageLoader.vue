<template>
<!-- ============ PAGE LOADER START ============ -->

		<div id="loader">
			<i class="fa fa-cog fa-4x fa-spin"></i>
		</div>

<!-- ============ PAGE LOADER END ============ -->

</template>

<script>
const $ = require( "jquery" );
export default {
	created(){		
		$(window).load(function() {
			$("#loader").fadeOut("slow");
		});
	}
}
</script>

<style>

</style>
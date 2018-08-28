<template>
	<div class="axios">
		<!-- {{data}} -->
	</div>
</template>

<script>
import axios from "axios"

export default {
	name: 'axios',
	data () {
		return {
			data: {}
		}
	},
	mounted() {
		this.$http('api/v2/movie/in_theaters')
		.then(res => {
			this.data = res.data;
			console.log(this.data)
		});

		console.log(axios.defaults)
		console.log(axios.defaults.withCredentials)
	}
}
</script>

<style>
	
</style>
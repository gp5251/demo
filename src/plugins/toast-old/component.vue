<template>
	<transition :name='changeClass'>
		<div class="toast" @click='toggleClick' v-if='isShow' :class='changeClass'>
			<span>
				{{message}}
			</span>
		</div>
	</transition>
</template>

<script>
	export default{
		data () {
			return {
				message: '',
				isShow: false,
				changeClass: 'normal',
				isExist: false
			}
		},
		methods: {
			toggleClick() {
				this.isShow = false;
			}
		}
	}
</script>

<style>
	@import './style.css';
	
</style>
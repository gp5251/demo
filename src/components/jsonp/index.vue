<template>
	<div class="jsonp">
		adfafsd
	</div>
</template>

<script>

	import JSONP from 'jsonp'

	export default {
		name: 'jsonpTest',
		methods: {
			jsonp (url,data,options={}) {
				url += (url.indexOf('?') < 0 ? '?' : "&") + this.formateDate(data);
				return new Promise((resolve,reject) => {
					JSONP(url,options,(err,res) => {
						if(err) {
							reject(err);
						} else {
							resolve(res);
						}
					})
				})
			},
			formateDate(data) {
				let result = '';
				for(let key in data) {
					let value = data[key]!==undefined ? data[key] : '';
					result += `&${key}=${value}`;
				}

				return result ? result.slice(1) : "";
			}
		},
		mounted() {
			// demandStatus=0&pageNum=1&countEachPage=10
			this.jsonp("https://open-anzhuang-betaa.djtest.cn/index/getDemandDetail",{
				demandStatus: 0,
				pageNum: 1,
				countEachPage: 10
			},{
				param: "jsonpCallback"
			}).then(res => {
				console.log(res);
			})
		}
	}
</script>

<style type="text/css">
	
</style>
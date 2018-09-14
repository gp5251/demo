<template>
	<div class="jsonp">
		jsonp
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
		
		this.jsonp("https://api.douban.com/v2/movie/in_theaters?city=上海",{
			demandStatus: 0,
			pageNum: 1,
			countEachPage: 10
		},{
			param: "callback"
		}).then(res => {
			console.log(res);
        })
        
        this.$router.push({name: "jsonp", query:{"name": "tom"}})
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            console.log(to.meta, from.meta)
        })
    }

}
</script>

<style type="text/css">
	
</style>
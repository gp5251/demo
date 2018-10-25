<template>
    <div class="test">


    </div>
</template>

<script>

import addParams from "@/utils/addParams"
import deepClone from "@/utils/deepClone"
import jsonp from "@/utils/jsonp"
import need from "@/utils/need"

export default {
    name: "test",
    mounted () {
        // console.log(addParams("www.aaa.com?c=3", {a:2,b:9}))
        // let a = {
        //     a: 3,
        //     b: {c: 4}
        // }

        // let b = deepClone(a)
        // b.b.c = 5
        // console.log(a)
        // console.log(b)

        // let arr1 = [
        //     "a",
        //     {b: 3}
        // ]

        // let arr2 = deepClone(arr1)
        // // let arr2 = arr1
        // arr2[1].b= 8
        // console.log(arr1)
        // console.log(arr2)
        console.log("hahah")
        const url = "https://open-anzhuang-betaa.djtest.cn/index/getDemandDetail"
        const data = {
            demandStatus: 5,
            pageNum: 1,
            countEachPage: 10
        }

        jsonp(url, data).then(res => {
            console.log(res)
        })

        need("https://static.daojia.com/bi/buried_point/js/tracker.js", function () {
            console.log("need success")
        })

    }
}
</script>

<style lang="scss" scoped>

</style>

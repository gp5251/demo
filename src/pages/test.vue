<template>
    <div class="test">


    </div>
</template>

<script>

import addParams from "@/utils/addParams"
import deepClone from "@/utils/deepClone"

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

        let arr1 = [
            "a",
            {b: 3}
        ]

        let arr2 = deepClone(arr1)
        // let arr2 = arr1
        arr2[1].b= 8
        console.log(arr1)
        console.log(arr2)

    }
}
</script>

<style lang="scss" scoped>

</style>

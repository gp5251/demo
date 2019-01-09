<template>
    <ul class="over_10000" ref="over_10000">

    </ul>
</template>

<script>
export default {
    name: "over_10000",
    mounted () {
        const total = 1000
        let curCount = 0
        let each = 20
        const count = total / each

        const ul = this.$refs.over_10000

        setTimeout(() => {
            let id = requestAnimationFrame (function fn () {
                let fragment = document.createDocumentFragment()
                for (let i = 0; i < each; i++) {
                    let li = document.createElement("li")
                    li.innerHTML = i + each * curCount
                    fragment.appendChild(li)
                }

                ul.appendChild(fragment)
                if (++curCount < count) {
                    id = requestAnimationFrame(fn)
                } else {
                    cancelAnimationFrame(id)
                }
            
            })
        }, 2000)
    }
}
</script>

<style lang="scss" scoped>

</style>

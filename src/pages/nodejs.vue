<template>
    <div class="nodejs" @click="hello">
        nodejs
    </div>
</template>

<script>
export default {
    name: "nodejs",
    methods: {
        hello () {
            console.log("hello")
        }
    },
    mounted () {
        console.log(this.$listeners)
        console.log(this.$attrs)
    }
}
</script>

<style lang="scss" scoped>

</style>

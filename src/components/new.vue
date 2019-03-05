<template>
    <div class="blank">
        new newnew
        <button @click="back">back</button>
    </div>
</template>

<script>
export default {
    name: "newone",
    // beforeRouteEnter (to, from, next) {
    //     // if (from.name == "HelloWorldId") {
    //     //     next ({name: "HelloWorldId"})
    //     // }
    //     console.log("------------------beforeRouteEnter------------")
    //     console.log(to)
    //     console.log(from)
    //     console.log("------------------beforeRouteEnter------------")
    //     // if (from.name == "HelloWorldId") {
    //     //     this.$router.go(-1)
    //         next()
    //     // }
    // },
    // beforeRouteLeave (to, from, next) {
    //     console.log("------------------beforeRouteLeave------------")
    //     console.log(to)
    //     console.log(from)
    //     console.log("------------------beforeRouteLeave------------")
    //     next()
    // },
    created() {
        console.log("new")
        
    },
    methods: {
        back () {
            this.$router.back()
        }
    }

}
</script>


<template>
    <div class="requestAnimationFrame">
        <div class="item" @click="toggle" ref="item"></div>
    </div>
</template>

<script>
export default {
    name: "requestAnimationFrame",
    data () {
        return {
            timer: 0
        }
    },
    methods: {
        toggle () {
            let item = this.$refs.item
            item.style.width = 0
            item.style.height = 0
            const _this = this
            cancelAnimationFrame (_this.timer)
            _this.timer = requestAnimationFrame ( function fn () {
                if (item.offsetWidth < 500) {
                    item.style.width = item.offsetWidth + 10 + "px"
                    item.style.height = item.offsetHeight + 10 + "px"
                    _this.timer = requestAnimationFrame (fn)
                } else {
                    cancelAnimationFrame (_this.timer)
                }
            } )

        }
    }

}
</script>

<style lang="scss" scoped>
.requestAnimationFrame {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: 500px;
    height: 500px;
    margin: 50px auto;
    position: relative;

    .item {
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>

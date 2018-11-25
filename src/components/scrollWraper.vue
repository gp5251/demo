<template>
    <div class="wraper" ref="wraper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    data () {
        return {
            bs: null
        }
    },
    props: ["flag"],
    
    mounted () {
        this.$nextTick(() => {
            this.bs = new BScroll(this.$refs.wraper, {
                scrollX: true
            })
        })
    },
    watch: {
        flag () {
            this.bs.refresh()
        }
    }
}
</script>

<style lang="scss" scoped>
.wraper {
    width: 100%;
    overflow: hidden;
}
</style>

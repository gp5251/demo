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
    props: {
        items: {
            type: Array
        }
    },
    
    mounted () {
        this.$nextTick(() => {
            this.bs = new BScroll(this.$refs.wraper, {
                scrollX: true
            })
        })
    },
    watch: {
        items () {
            this.bs.refresh()
        }
    }
}
</script>

<style lang="scss" scoped>
.wraper {
    width: 100%;
    overflow: hidden;

    // .content {
    //     &::after {
    //         content: "";
    //         display: table;
    //         clear: both;
    //     }
    //     // width: auto;
    //     padding: 0;
    //     height: 300px;
    //     .item {
    //         // display: inline-block;
    //         float: left;
    //         list-style: none;
    //         width: 400px;
    //         // margin: 0 20px;
    //         background: orange;
    //     } 
    // }
}
</style>

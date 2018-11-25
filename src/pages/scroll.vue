<template>
    <div class="outer" ref="outer">
        <wraper :flag="flag">
            <ul class="content" :style="{'width': contentWidth}">
                <li class="item" v-for="(item, index) in items" :key="index" :style="{width: itemWidth + 'px'}">{{ item }}</li>
            </ul>
        </wraper>
    </div>

</template>

<script>
import wraper from "@/components/scrollWraper"
export default {
    data() {
        return {
            items: [],
            flag: 0,
            itemWidth: 0
        }
    },
     computed: {
        contentWidth () {
            return this.items.length * (this.itemWidth + 20) + "px"
        }
    },
    components: {
        wraper
    },
    mounted() {
        setTimeout(() => {
            this.items = ["aaa", "bbb", "ccc", "ddd", "eeee"]
            this.flag++
        }, 2000);
        this.itemWidth = this.$refs.outer.clientWidth * .3
        console.log(this.itemWidth)
    }
}
</script>

<style lang="scss" scoped>
.wraper {
    width: 400px;
    height: 100px;
    margin: 0 auto;
    overflow: hidden;

    .content {
        &::after {
            content: "";
            display: table;
            clear: both;
        }
        // width: auto;
        padding: 0;
        height: 300px;
        .item {
            // display: inline-block;
            float: left;
            list-style: none;
            width: 400px;
            margin-right: 20px;
            background: orange;
        } 
    }
}
</style>

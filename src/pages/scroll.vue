<template>
    <wraper :items="items">
        <ul class="content" :style="{'width': contentWidth}">
            <li class="item" v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
    </wraper>

</template>

<script>
import wraper from "@/components/scrollWraper"
export default {
    data() {
        return {
            items: []
        }
    },
     computed: {
        contentWidth () {
            return this.items.length * 400 + "px"
        }
    },
    components: {
        wraper
    },
    mounted() {
        setTimeout(() => {
            this.items = ["aaa", "bbb", "ccc", "ddd", "eeee"]
        }, 2000);
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
            // margin: 0 20px;
            background: orange;
        } 
    }
}
</style>

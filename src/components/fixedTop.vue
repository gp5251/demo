<template>
    <div class="wrap" :style="styleObj" ref="fixedTop">
        <div class="fixedTop" :class="isFixed ? 'fixed' : '' "  >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "fixedTop",
    data () {
        return {
            isFixed: false,
            offsetT: 0
        }
    },
    props: {
        styleObj: {
            type: Object
        }
    },
    mounted () {
        this.offsetT = this.$refs.fixedTop.offsetTop
        window.addEventListener ("scroll", this.handleScroll)
    },
    methods: {
        handleScroll () {
            let scrollT = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollT > this.offsetT) {
                this.isFixed = true
            } else {
                this.isFixed = false
            }
        }
    },
    beforeDestroy () {
        window.removeEventListener ("scroll", this.handleScroll)
    }

}
</script>

<style lang="scss" scoped>
.fixedTop {
    
    &.fixed {
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
    }
}
</style>


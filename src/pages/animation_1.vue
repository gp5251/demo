<template>
    <div class="animation_1">
        <button class="btn" @click="toggle">toggle</button>
        <transition name="toggle" appear>
            <div class="box" v-if="boxShow"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "animation_1",
    data () {
        return {
            boxShow: true
        }
    },
    methods: {
        toggle () {
            this.boxShow = !this.boxShow
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    background: none;
    border: 1px solid orange;
    outline: none;
}

.box {
    position: fixed;
    left: 10%;
    bottom: 50px;
    height: 200px;
    width: 80%;
    background: red;
}

.toggle-enter {
    transform: translateY(250px);
    opacity: 0;
}

.toggle-leave {
    transform: translateY(0);
    opacity: 1;
}

.toggle-enter-active,
.toggle-leave-active {
    transition: .3s;
}

.toggle-enter-to {
    opacity: 1;
    transform: translateY(0)
}

.toggle-leave-to {
    transform: translateY(250px);
    opacity: 0;
}

</style>

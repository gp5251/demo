<template>
    <div class="fixedTop">
        <h1 class="title">abc</h1>
        <h1 class="title">abc</h1>
        <h1 class="title">abc</h1>
    </div>
</template>

<script>
export default {
    name: "fixedTop"
}
</script>

<style lang="scss" scoped>
.fixedTop {
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 9999;
    height: 100px;
    .title {
        flex: 1;
        text-align: center;
    }
}
</style>


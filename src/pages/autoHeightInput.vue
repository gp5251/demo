<template>
    <div class="autoHeightInput-wrap">
        <textarea class="textarea" ref="textarea" v-model="textareaContent" @input="handleInput"></textarea>
        <div class="autoHeightInput" ref="autoHeightInput" v-html="divContent">
            <!-- <pre style="margin:0;word-break:break-all; overflow:hidden; white-space: pre-wrap;">{{ textareaContent }}</pre> -->
        </div> 
        <!-- 1234-->
        <!-- <div ref="divInput" class="autoHeightInput" @input="divInput" contenteditable="true"></div> -->
    </div>
</template>

<script>
export default {
    name: "autoHeightInput",
    data () {
        return {
            textareaContent: ""
        }
    },
    computed: {
        divContent () {
            return this.textareaContent.replace(/ /g, "<pre style='display:inline-block;margin:0;'> </pre>")
        }
    },
    methods: {
        handleInput () {
            console.log(this.textareaContent)
            this.$refs.textarea.style.height = this.$refs.autoHeightInput.scrollHeight + "px"
            this.$refs.autoHeightInput.style.height = this.$refs.autoHeightInput.scrollHeight + "px"
            console.log(this.$refs.autoHeightInput.scrollHeight)
        },
         divInput () {
             this.$refs.divInput.style.height = this.$refs.divInput.scrollHeight + "px"
         }
    }
}
</script>

<style lang="scss" scoped>
.autoHeightInput-wrap {
    position: relative;

    .textarea,
    .autoHeightInput {
        width: 90%;
        height: 40px;
        resize: none;
        border: 1px solid red;
        padding: 0;
        font-size: 15px;
        line-height: 20px;
        overflow-x: hidden;
        overflow-y: hidden;
        // letter-spacing: 0;
        word-break: break-all;
        
    }

    .autoHeightInput {
        // display: inline-block;
        // position: absolute;
        // left: 0;
        // top: 0;
        // visibility: hidden;
        // overflow-x: hidden;
        // overflow-y: scroll;
    }
}

</style>

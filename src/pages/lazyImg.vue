<template>
    <div class="lazyImg">

        <img class="img" :src="defaultSrc" alt="" :data-src="src" v-for="(src, index) in imgList" :key="index" ref="imgs">
    </div>
</template>

<script>
export default {
    name: "lazyImg",
    data() {
        return {
            defaultSrc: "http://img2.imgtn.bdimg.com/it/u=764856423,3994964277&fm=26&gp=0.jpg",
            imgList:[
                "http://img2.imgtn.bdimg.com/it/u=764856423,3994964277&fm=26&gp=0.jpg",
                "http://pic28.photophoto.cn/20130818/0020033143720852_b.jpg",
                "http://pic19.nipic.com/20120210/7827303_221233267358_2.jpg",
                "http://pic33.photophoto.cn/20141022/0019032438899352_b.jpg",
                "http://img2.imgtn.bdimg.com/it/u=2569486047,3428433554&fm=214&gp=0.jpg",
                "http://img.zcool.cn/community/0188915805cc66a84a0e282b933a57.jpg@1280w_1l_2o_100sh.png",
                "http://img.zcool.cn/community/0151b15764b1060000018c1b6060d6.jpg@900w_1l_2o_100sh.jpg",
                "http://pic29.photophoto.cn/20131011/0006019796700187_b.jpg",
                "http://txt25-2.book118.com/2017/0922/book134724/134723007.jpg",
                "http://pic36.nipic.com/20131213/6704106_223232205107_2.png",
                "http://img.zcool.cn/community/01f5795541d50b00000115410b205a.jpg",
                "http://www.ctps.cn/PhotoNet/Profiles2011/20160311/20163111610178319.jpg",
                "http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg",
            ],
            curImg: 0
        }
    },
    mounted() {
        console.log("this.$refs.imgs[0].offsetTop  " + this.$refs.imgs[0].offsetTop)
        let i = 1
        const _this = this
        let lazy = this.lazyLoad()
        // lazy()
        window.addEventListener( "scroll", this.throttle(lazy, 500, 1000), false )
        
    },

    methods: {
        throttle (fn, delay, atleast) {
            let startTime = new Date()
            let timeout = null

            return function () {
                let curTime = new Date()
                clearTimeout(timeout)
                if (curTime - startTime >= atleast) {
                    fn()
                    startTime = curTime
                } else {
                    timeout = setTimeout(fn, delay)
                }
            }
        },
        lazyLoad () {

            let allImg = this.$refs.imgs
            let curImg = 0
            
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            const _this = this
            return function () {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                console.log(`scrollTop ${scrollTop}, clientHeight ${clientHeight}`)
                let len = allImg.length
                for ( let i = curImg; i < len; i++ ) {
                    if (allImg[i].offsetTop < clientHeight + scrollTop) {
                        console.log("allImg[" + i + "].offsetTop " + allImg[i].offsetTop)
                        if (allImg[i].getAttribute("src") == _this.imgList[0]) {
                            allImg[i].src = allImg[i].getAttribute("data-src")
                        }
                        curImg += 1
                    }
                }
            }

        }
    },
}
</script>

<style lang="scss" scoped>
.lazyImg {}
.img {
    width: 10rem;
    height: 10rem;
    margin: 20px auto;
}
</style>

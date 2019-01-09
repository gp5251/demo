<template>
    <div class="lazyImg" ref="lazyImg">

        <img class="img" src="../assets/logo.png" alt="" :data-src="src" v-for="(src, index) in imgList" :key="index" ref="imgs">
    </div>
</template>

<script>
export default {
    name: "lazyImg",
    data() {
        return {
            defaultSrc: "",
            imgList:[
                "http://img2.imgtn.bdimg.com/it/u=764856423,3994964277&fm=26&gp=0.jpg",
                "http://img17.3lian.com/d/file/201703/13/4758dd3347da01d7e082825fa8b0b0cc.jpg",
                "http://img18.3lian.com/d/file/201711/11/aff81832b1472c2a44f2c703a4c0236c.png",
                "http://img5.duitang.com/uploads/item/201508/30/20150830235219_BHiaC.thumb.700_0.jpeg",
                "http://img2.imgtn.bdimg.com/it/u=2569486047,3428433554&fm=214&gp=0.jpg",
                "http://img.zcool.cn/community/0188915805cc66a84a0e282b933a57.jpg@1280w_1l_2o_100sh.png",
                "http://img.zcool.cn/community/0151b15764b1060000018c1b6060d6.jpg@900w_1l_2o_100sh.jpg",
                "http://img18.3lian.com/d/file/201709/18/59b79985b824db2aa4ea5f5ba898835d.jpg",
                "http://txt25-2.book118.com/2017/0922/book134724/134723007.jpg",
                "http://photo.16pic.com/00/09/15/16pic_915841_b.jpg",
                "http://img.zcool.cn/community/01f5795541d50b00000115410b205a.jpg",
                "http://www.ctps.cn/PhotoNet/Profiles2011/20160311/20163111610178319.jpg",
                "http://image.biaobaiju.com/uploads/20180803/21/1533302926-DlFZTdtQGb.jpg",
            ],
            // imgList: ["aa","aa","aa","aa","aa","aa","aa","aa"],
            curImg: 0
        }
    },
    mounted() {
        console.log("this.$refs.imgs[0].offsetTop  " + this.$refs.imgs[0].offsetTop)
        let i = 1
        const _this = this
        let lazy = this.lazyLoad()
        // lazy()
        window.addEventListener( "scroll", this.throttle(lazy, 200, 1000), false )
        // this.$nextTick(lazy)
        // setTimeout(lazy, 3000);
        // window.onload = lazy
        let img = new Image()
        img.onload = lazy
        img.src = this.imgList[0]
        // this.$refs.lazyImg.onload = lazy

        // window.onload = function () {
        //     console.log()
        // }
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
                        // if (allImg[i].getAttribute("src") == _this.defaultSrc) {
                            allImg[i].src = allImg[i].getAttribute("data-src")
                        // }
                        curImg += 1
                    }
                }
            }

        }
    },
}
</script>

<style lang="scss" scoped>

.img {
    width: 10rem;
    height: 10rem;
    margin: 20px auto;
   
}
</style>

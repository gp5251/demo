<template>
  <div class="test">
    <button @click="showToast">showToast</button>
    <button @click="showloading">showloading</button>
    <button @click="close">close</button>
    <button @click="go">go</button>
  </div>
  
</template>

<script>
import Vue from "vue";
import addParams from "@/utils/addParams";
import deepClone from "@/utils/deepClone";
import jsonp from "@/utils/jsonp";
import need from "@/utils/need";
import queryString from "@/utils/queryString";
import setRem from "@/utils/setRem";
import Toast from "@/plugins/toast";
import loading from "@/plugins/loading";
import request from "@/plugins/request";

Vue.use(Toast);
Vue.use(loading);
Vue.use(request);

export default {
  name: "test",
  methods: {
    showToast() {
        console.log("aaaaaa")
      this.$toast({
        message: "hello"
      });
    },
    showloading() {
         console.log("bbbbbbb")
      const loading = this.$loading();
      setTimeout(() => {
        loading.close();
        console.log("timeout");
      }, 3000);
    },
    close () {
        CD58RouterPlugin.navigateBack({}, function(){}, function(){});
    },
    go () {
        this.$router.push({name: "nodejs", query: {aa: 66, appid: 88}, params: {bb: 33} })
    }
  },
  mounted() {

   
        // window.addEventListener("beforeunload", (e) => {
        //     console.log("http://localhost:3001/#/evacuation_agreement")
        //     if (this.sureAgree) {
        //         // return false
        //     } else {
        //         this.singleBtn = true
        //         this.isShowPopup = true
        //         e.preventDefault()
        //         e.returnValue = "aa"
        //         e.Cancelable = true
        //         return "false"
        //     }

            
        //     // return true
        // })

        window.addEventListener("backButtonClicked", (e) => {
            document.body.innerHTML += "aaaaa"
            alert("aa")
           return true
        })

        document.addEventListener("backButtonClicked", (e) => {
            document.body.innerHTML += "aaaaa"
            alert("aa")
           return true
        })
        
    // console.log(addParams("www.aaa.com?c=3", {a:2,b:9}))
    // let a = {
    //     a: 3,
    //     b: {c: 4}
    // }

    // let b = deepClone(a)
    // b.b.c = 5
    // console.log(a)
    // console.log(b)

    // let arr1 = [
    //     "a",
    //     {b: 3}
    // ]

    // let arr2 = deepClone(arr1)
    // // let arr2 = arr1
    // arr2[1].b= 8
    // console.log(arr1)
    // console.log(arr2)
    var d = {
      a: "aaa",
      b() {
        console.log(this);
      },
      c: {
        d: 8
      },
      f: new Date(),
      g: /a/i
    };

    var e = deepClone(d);
    e.c.d = 6;
    d.b();
    e.b();
    console.log("hahah");
    const url = "https://open-anzhuang-betaa.djtest.cn/index/getDemandDetail";
    const data = {
      demandStatus: 5,
      pageNum: 1,
      countEachPage: 10
    };

    jsonp(url, data).then(res => {
      console.log(res);
    });

    need("https://static.daojia.com/bi/buried_point/js/tracker.js", function() {
      console.log("need success");
    });

    // setRem ()

    this.$request({
      url:
        "https://plugins.kancloud.cn/api/plugin/info?name=theme-default,highlight"
    }).then(res => {
      console.log(res);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>

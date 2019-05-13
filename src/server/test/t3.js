let superagent = require("superagent")

superagent.post(encodeURI("https://www.wjx.cn/joinnew/processjq.ashx?submittype=1&curID=37912304&t=1556636491048&validate_text=RQMN&starttime=2019/4/30 23:00:31&ktimes=508&rn=997614954.12580375&hlv=1&jqnonce=89fa3c89-73df-479f-aea1-36271e1e6e19&jqsign=01ni;k01%?;ln%<?1n%imi9%;>:?9m9m>m91"))
    .set("Host", "www.wjx.cn")
    .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36")
    .set("Origin", "https://www.wjx.cn")
    .set("Accept", "*/*")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .set("Referer", "https://www.wjx.cn/jq/37912304.aspx")
    .set("Cookie", "acw_tc=2f624a5215566364313742367e49e2ef8baaf0d148ad31c02bae2965bfcd51; .ASPXANONYMOUS=nfI0S_c11QEkAAAANjcyOWY5ZDctNDgxNC00OGVhLTg4ZDItMzYyNjk5YzA4MDQ50WtY_V9fa1o16QNKRy3KFnOo7QU1; jac37912304=12580375; UM_distinctid=16a6ec2f4a3591-03311ec861841e-1333062-144000-16a6ec2f4a455c; CNZZDATA4478442=cnzz_eid%3D427993368-1556635545-%26ntime%3D1556635545; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1556636432; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1556636432; ASP.NET_SessionId=k4bcukhqpygoioq1sdezp0zb")
    .send("submitdata=" + encodeURIComponent("1$1}2$2}3$2}4$6}5$3}6$3}7$3}8$3}9$3}10$3}11$3}12$3}13$3}14$3}15$3}16$3}17$3}18$3}19$3}20$3}21$3}22$3}23$3}24$3}25$3}26$3}27$1}28$2}29$3"))
    .then(res => {
        console.log("res")
    })
    .catch(err => {
        console.log(err)
    })

function doit (){

    return superagent.post(encodeURI("https://www.wjx.cn/joinnew/processjq.ashx?submittype=1&curID=37912304&t=1556636491048&validate_text=RQMN&starttime=2019/4/30 23:00:31&ktimes=508&rn=997614954.12580375&hlv=1&jqnonce=89fa3c89-73df-479f-aea1-36271e1e6e19&jqsign=01ni;k01%?;ln%<?1n%imi9%;>:?9m9m>m91"))
    .set("Host", "www.wjx.cn")
    .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36")
    .set("Origin", "https://www.wjx.cn")
    .set("Accept", "*/*")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .set("Referer", "https://www.wjx.cn/jq/37912304.aspx")
    .set("Cookie", "acw_tc=2f624a5215566364313742367e49e2ef8baaf0d148ad31c02bae2965bfcd51; .ASPXANONYMOUS=nfI0S_c11QEkAAAANjcyOWY5ZDctNDgxNC00OGVhLTg4ZDItMzYyNjk5YzA4MDQ50WtY_V9fa1o16QNKRy3KFnOo7QU1; jac37912304=12580375; UM_distinctid=16a6ec2f4a3591-03311ec861841e-1333062-144000-16a6ec2f4a455c; CNZZDATA4478442=cnzz_eid%3D427993368-1556635545-%26ntime%3D1556635545; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1556636432; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1556636432; ASP.NET_SessionId=k4bcukhqpygoioq1sdezp0zb")
    .send("submitdata=" + encodeURIComponent("1$1}2$2}3$2}4$6}5$3}6$3}7$3}8$3}9$3}10$3}11$3}12$3}13$3}14$3}15$3}16$3}17$3}18$3}19$3}20$3}21$3}22$3}23$3}24$3}25$3}26$3}27$1}28$2}29$3"))
    // .then(res => {
    //     console.log("done")
    // })
    // .catch(err => {
    //     console.log(err)
    // })

}

// let proArr = []

// for (let i = 0; i < 5; i++) {
//     proArr.push(doit())
// }

// console.log(proArr.length)

// Promise.all(proArr).then(res => {
//     console.log("all done")
// }).catch(err => {
//     console.log(err)
// })

// doit().then(() => {})
// doit().then(() => {})

// console.log(doit() === doit())

// let a = 0

// let timeout = setInterval(() => {
//     doit().then((res) => {
//         a++
//         console.log(a)
//         if(a >= 1) {
//             clearInterval(timeout)
//         }
//     })
// }
// , 70000);

// doit().then(res => {
//     console.log("done")
//     // console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// "https://www.wjx.cn/joinnew/processjq.ashx?submittype=1&curID=37912304&t=1556699997568&starttime=2019/5/1 16:39:16&ktimes=352&rn=997614954&hlv=1&sd=http://www.wjx.cn/&jqnonce=e6d8e5ad-8687-421e-a1b2-ad3bb1e8222f&jqsign=g4f:g7cf/:4:5/603g/c3`0/cf1``3g:000d"
// "https://www.wjx.cn/joinnew/processjq.ashx?submittype=1&curID=37912304&t=1556636491048&starttime=2019/4/30 23:00:31&ktimes=508&rn=997614954.12580375&hlv=1&jqnonce=89fa3c89-73df-479f-aea1-36271e1e6e19&jqsign=01ni;k01%?;ln%<?1n%imi9%;>:?9m9m>m91"
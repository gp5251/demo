const request = require("superagent")

request.post("http://ksora.cn/user/checkin")
        .set("Cookie", "uid=2814; email=1101407798%40qq.com; key=295f6a64259bbf910ae81d942137139fe0fce25a4e5ca; ip=ab29dc58ea9114156f56b5b056207c32; expire_in=2646243385")
        .set({
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Referer": "http://ksora.cn/user",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest"
        })
        .then(res => {
            console.log(res.text)
        }).catch(err => {
            console.log(err)
        }) 
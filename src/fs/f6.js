const fs = require ("fs")

fs.open ("../temp/3.txt", "w+", function (err, fd) {
    let buf = Buffer.from("程序员甲开着一辆宝马。程序员乙：“哥们，宝马怎么来的？” 甲：“那天在酒吧遇见个美女，晚上她开着她的宝马把我拉到了山顶上，然后脱着自己的衣服跟我说‘你可以要你想要的’。于是 ..我开走了她的宝马。 ” 乙思索半天，说：“兄弟，你做的很对，她的衣服你也穿不了。”")
    fs.write(fd, buf, function (err, written) {
        console.log(buf.slice(0, written).toString())

        
        fs.unlink ("../temp/3.txt", function (err) {  
            console.log("删除成功")
        })
    })
})
const fs = require("fs")

fs.open("../temp/1.txt", "r", function (err, fd) {
    if (err) {
        return console.error(err)
    }

    let buf = Buffer.alloc(2048)

    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {  
        console.log(buf.slice(0, bytes).toString())

        fs.close(fd, () => {
            console.log("--------------")
            console.log("关闭成功")
        })
    })
})
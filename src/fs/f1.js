const fs = require("fs")

fs.open("../temp/1.txt", "a+", function (err, fd) {
    if (err) {
        return console.error(err)
    }

    console.log("打开成成功")
    console.log(fd)

    fs.close(fd, function(err) {
        console.log("关闭成功")
    })
})


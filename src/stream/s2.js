const fs = require("fs")

const rs = fs.createReadStream("../temp/1.txt")
const ws = fs.createWriteStream("../temp/3.txt")

// rs.pipe(ws)
let i = 0
rs.on("data", function (chunk) {
    i++
    ws.write(chunk, function () {
        console.log("第" + i + "次写入")
    })
})


rs.on("end", function () {
    console.log("读取结束")
})

ws.on("finish", function() {
    console.log("写入结束")
})
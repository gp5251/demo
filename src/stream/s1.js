const fs = require("fs")

const rs = fs.createReadStream("../temp/1.txt")

rs.setEncoding("utf-8")

// rs.on("data", function (chunk) {
//     console.log(chunk)
// })

let str = ""

rs.on("readable", function () {
    let chunk
    while ( (chunk = rs.read()) !== null ) {
        str += chunk
        // if (str.length > 50) {
        //     rs.pause()
        //     console.log("暂停")

        //     setTimeout(() => {
        //         rs.resume()
        //         console.log("重新开始")
        //     }, 1000);
        // }
    }

    // console.log(str)
})

rs.on("end", function () {  
    console.log(str)
    console.log("读取结束")
})
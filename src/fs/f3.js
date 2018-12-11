const fs = require("fs")

let data = "hahahaahahhahaah"

fs.writeFile ("../temp/2.txt", data, {flag: "w+"}, function (err) {
    if (err) {
        return console.error (err)
    }

    console.log("写入成功")

    fs.readFile("../temp/2.txt", function (err, data) {
        console.log(data.toString())
    })
})
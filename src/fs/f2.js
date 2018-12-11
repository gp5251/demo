const fs = require("fs")

fs.stat("../temp/1.txt", {bigint: true}, function (err, stat) {
    console.log(stat)
    console.log(stat.isFile())
    console.log(stat.isDirectory())
})
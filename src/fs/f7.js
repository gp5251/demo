const fs = require ("fs")

// fs.mkdir (__dirname + "/test", function (err) {
//     console.log("创建成功")

// })

fs.rmdir (__dirname + "/test", function () {  
    console.log("删除成功")
})

fs.readdir (__dirname, function (err, files) {
    files.forEach ((file) => {
        console.log(file)
    })
})


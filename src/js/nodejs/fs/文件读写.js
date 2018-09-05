const fs = require('fs')

// fs.open("1.txt", "a+", (err, fd) => {
//     if (err) {
//         console.log(err)
//     } else {
//         let buffer = Buffer.alloc(100)
//         fs.read(fd, buffer, 0, 100, 0)
//         console.log(buffer.toString("utf-8"))
//         console.log(fd)
//         fs.close(fd, () => console.log("关闭成功"))
//     }
// })

// 简单文件读写
// fs.writeFile(`${__dirname}/1.txt`, "bbbbbbbbbbbbbbb", {flag: "a"}, err => {
//     err && console.log(err)
//     console.log("writeFile success")
// })

// fs.readFile(`${__dirname}/2.txt`, (err, data) => {
//     if (!err) {
//         fs.writeFile(`${__dirname}/1.txt`, data, {flag: "a"}, err => {
//             err && console.log(err)
//             console.log("writeFile success")
//         })
//     } else {
//         console.log(err)
//     }
// })

// 复杂文件读写




// 列出文件
// fs.readdir(__dirname, (err, files) => {
//     if (err) {
//         console.log(err)
//     } else {
//         // console.log(files)
//         files.forEach(file => {
//             if (fs.existsSync(__dirname + "\\" + file)) {
//                 console.log(__dirname + "\\" + file);
//             } else {
//                 console.log(__dirname + "\\" + file + "  不存在");
//             }
            
//         });
//     }
// })

// console.log(__filename)
// console.log(fs.existsSync( __filename))

// fs.unlink(__dirname + "/" + "3.txt", err => {
//     if (!err) {
//         console.log("删除成功")
//     } else {
//         console.log(err)
//     }
// })

// fs.mkdirSync(__dirname + "/" + "new")
// fs.rmdir(__dirname + "/" + "new", err => {
//     if (!err) {
//         console.log("删除成功")
//     } else {
//         console.log(err)
//     }
// })

// fs.rename(__dirname + "/" + "1.txt", __dirname + "/" + "3.txt", err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("重命名成功")
//     }
// })

// fs.watch(__dirname, (type, filename) => {
//     console.log(type)
//     if(filename) {
//         console.log(filename)
//     } else {
//         console.log("filename不支持")
//     }
// })

// fs.watchFile(__dirname + "/" + "2.txt", {interval: 5000}, (cur, pre) => {
//     console.log("pre: " + JSON.stringify(pre))
//     console.log("cur: " + JSON.stringify(cur))
// })

// fs.appendFile(__dirname + "/" + "2.txt", "append", err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("追加内容成功");
//     }
// })

const readStream =  fs.createReadStream(__dirname  + "/" + "2.txt")
const writeStream = fs.createWriteStream(__dirname +  "/" +  "5.txt", {flags:"a"});

// console.log(writeStream)
readStream.on("data", data => {
    console.log(data.toString())
    writeStream.write(data,  err =>  {
        err &&  console.log(err)
    })
})

readStream.on("open", fd  =>  {
    console.log(fd + " 打开成功")
})

readStream.on("close", () => {
    console.log("readstream  close")
})

// console.log(writeStream.write())

const  writeStream2 = fs.createWriteStream(__dirname +  "/" +  "6.txt", {flags:"a"});
readStream.pipe(writeStream2);
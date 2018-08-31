const fs = require("fs")

// 小文件拷贝，数据都读取到内存，然后写入
function copy (to, data) {
    fs.writeFileSync(to, fs.readFileSync(data))
}

// 大文件拷贝，数据读一点，写一点
function copyStream (to, data) {
    fs.createReadStream(data).pipe(fs.createWriteStream(to))
}

function main(argv) {
    // copy(argv[0], argv[1])
    copyStream(argv[0], argv[1])
}

// process是一个全局变量，可通过process.argv获得命令行参数。由于argv[0]固定等于NodeJS执行程序的绝对路径，
// argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从argv[2]这个位置开始。
// console.log(process.argv);
main (process.argv.slice(2))

// 控制台命令： node copy1.js 1.txt 2.txt

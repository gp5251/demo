// let Buffer = require("buffer")

let b1 = Buffer.alloc(10, "hello", "utf-8")
console.log(b1)

let b2 = Buffer.from("hello")
console.log(b2)

let b3 = Buffer.allocUnsafe(10)
console.log(b3.fill(0))
// let Buffer = require("buffer")

let b1 = Buffer.alloc(10, "hello", "utf-8")
// console.log(b1)

let b2 = Buffer.from("hello")
// console.log(b2)

let b3 = Buffer.allocUnsafe(10)
// console.log(b3.fill(0))

// console.log(typeof b3)
// console.log({}.toString.call(b3))

let b5 = Buffer.alloc(26)

for(let index = 0; index < b5.length; index++) {
    b5[index] = index + 97
}

// for(let index in b5) {
//     // b5[index] = index + 97
//     // for in 循环会把 b5 的函数属性也遍历出来， 所以用这个方式赋值会出错
//     console.log(b5[index])
// }
// console.log(b5.toString)

console.log(b5.toString())
console.log(b5["3"])

let b6 = b5 
let b7 = Buffer.alloc(26)
b5.copy(b7)
console.log(b5 === b6)
console.log(b5 == b7)
console.log({} == {})
console.log(b5.equals(b7))
console.log(b7.fill("aazz"))
console.log(b7.includes("a"))
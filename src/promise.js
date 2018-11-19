var p = new Promise(function (resolve, reject) {
    
    // setTimeout(function () {
        // throw new Error("back")
    // }, 0)
    resolve("ok")
})

// p.then(function (res) {
//     console.log(res)
// }).catch(function (err) {
//     console.log(err)
// })


let arr = [1, 2, {a:"abc"}].map(item => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, typeof item == "number" ? item * 1000 : 3000);
    })
})

// let pa = Promise.all(arr)
// pa.then(res => {
//     console.log(res)
// })

// Promise.race(arr).then(res => {
//     console.log(res)
// })

Promise.resolve("haha").then(res => {
    console.log(res)
})
console.log("aaaa")
console.log("aaaa")
console.log("aaaa")
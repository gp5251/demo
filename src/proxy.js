var p = new Proxy({a: "abc"}, {
    get (target, key, receiver) {
        // console.log(receiver)
        console.log("key " +key)
    },
    set (target, key, value, receiver) {
        // console.log(`${target} ${key} ${value} ${receiver}`)
        console.log("set")
    }
})

var obj = Object.create(p)
// p.a = "ff"

function createArray (...elements) {
    let handler = {
        get (target, key, receiver) {
            key = Number(key)
            if (key < 0) {
                key = elements.length + key + ""
            }
            return target[key]
        }
    }
    
    let arr = new Array(...elements)
    return new Proxy(arr, handler)

}

let arr = createArray("a", "b", "c")
console.log(arr[-3])

var p = new Proxy({a: "abc"}, {
    get (target, key, receiver) {
        console.log(receiver)
        // console.log(key)
    },
    set (target, key, value, receiver) {
        // console.log(`${target} ${key} ${value} ${receiver}`)
    }
})

p.a = "aabc"
p.a
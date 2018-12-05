function validate (key, action) {
    if (key[0] === "_") {
        throw new Error(`对私有属性${key}进行${action}操作是非法的`)
    }
}

let handler = {
    get (target, key, receiver) {
        validate (key, "get")
        return target[key]
    },
    set (target, key, value, receiver) {
        validate (key, "set")
        target[key] = value
        return true
    }
}

let o = new Proxy ({}, handler)

// try {
//     o.name = "proxy"
//     o.__proto__ = {}
// } catch (e) {
//     console.log(e)
// }



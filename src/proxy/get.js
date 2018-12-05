let p = new Proxy ({}, {
    get (target, key, proxy) {
        if (key in target) {
            return target[key]
        } else {
            return "property is not found"
        }
    }
})

p.a = 22
console.log(p.a)
console.log(p.b)

function createArray (...elements) {
    let handler = {
        get (target, key, proxy) {
            let index = Number (key)
            if (index < 0) {
                index = index + target.length
            } 

            return target[index]
        }
    }

    let array = [...elements]
    return new Proxy (array, handler)
}

let arr = createArray("a", "b", "c")
console.log(arr[-1], arr[1])
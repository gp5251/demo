let handler = {
    apply (target, thisBind, args) {
        return target (...args) * 2
    }
}

let handler2 = {
    apply (target, thisBind, args) {
        return "this is proxy !"
    }
}

function add (a, b) {
    return a + b
}

function say () {
    return "this is say !"
}

let p = new Proxy (add, handler)
console.log( p (1, 2) )
let p2 = new Proxy (say, handler2)
console.log(p2())
function* g1 () {
    console.log("in 1")
    yield 1
    console.log("in 2")
    yield 2
    console.log("in 3")
    return "aaaa"
}

function* g2 () {
    let k1 = yield 3
    console.log("k1: " + k1)
    let k2 = yield* g1()
    console.log("k2: " + k2)
    let k3 = yield 5
    console.log("k3: " + k3)
    return {
        k1,
        k2,
        k3
    }
}

let i = g2()

i.next()
i.next(1)
i.next(2)
i.next(3)
// i.next(4)
console.log(i.next(4))

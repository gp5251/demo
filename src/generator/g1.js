function* fn () {
    console.log("1111")
    yield 1
    console.log("2222")
    yield 2
    console.log("3333")
    yield 3
    console.log("6666")
    return 777
}

let g = fn ()
console.log( g.next() )
console.log( g.next() )
console.log( g.next() )
console.log( g.next() )
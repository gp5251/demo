Function.prototype.myfn = function (context) {
    // console.log(this)
    context.fn = this
    context.fn()
}

let a = {
    fn () {
        console.log(this)
    }
}

let b = {
    name: "b"
}

a.fn.myfn (b)

let reg = /[^\w.$]/

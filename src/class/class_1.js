class foo {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    static sing () {
        console.log("singing")
    }

    say () {
        console.log (`x: ${this.x}, y: ${this.y}`)
    }
}


let f1 = new foo (5, 6)
f1.say();
// foo.say()

function Fn () {

}

Fn.prototype.say = function () {
    console.log("saying")
}

Fn.say()
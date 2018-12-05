class foo {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    static say () {
        console.log(`this.x: ${this.x}, this.y: ${this.y}`)
    }
}

class bar extends foo {
    constructor (x, y, z) {
        super(x, y)
        this.z = z
    }

    hello () {
        console.log(`this.z: ${this.z}`)
    }
}

let b = new bar (1, 2, 3)
b.hello ()
bar.say ()
console.log(b.x)
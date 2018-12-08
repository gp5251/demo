let EventEmitter = require("events").EventEmitter

class MyEmitter extends EventEmitter {
    constructor () {
        super()
        console.log("MyEmitter")
    }
}

let obj = {
    MyEmitter: new MyEmitter()
}

obj.MyEmitter.on("say", function () {
    console.log("say")
})

obj.MyEmitter.emit("say")

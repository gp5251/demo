let events = require("events")
let eventEmitter = new events.EventEmitter()

eventEmitter.on("start", (args) => {
    console.log("start", args)
    setTimeout(() => {
        eventEmitter.emit("running", "hahaahah")
    }, 1000);
})

eventEmitter.on("running", (agrs) => {
    console.log("running", agrs)
    setTimeout(() => {
        eventEmitter.emit("stop", "world")
    }, 1000);
})

eventEmitter.on("running", (args) => {
    console.log("running2", args)
})

eventEmitter.on("stop", (args) => {
    console.log("stop", args)
})

function start () {
    setTimeout(() => {
        eventEmitter.emit("start", "hello")
    }, 1000);
}

start()
console.log(eventEmitter.on === eventEmitter.addListener)
console.log(eventEmitter.off === eventEmitter.removeListener)

const fs = require("fs")

module.exports = function (mime, emitter) {
    fs.readFile("./mime.json", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const type = JSON.parse(data.toString("utf-8"))
            emitter.emit("data", type[mime])
        }
    })
}
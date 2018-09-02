const fs = require("fs")

module.exports = function (mime, cb) {
    fs.readFile("./mime.json", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const type = JSON.parse(data.toString("utf-8"))
            cb(type[mime])
        }
    })
}
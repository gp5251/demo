const http = require("http")
const url = require("url")

const G = this

G._get = {}
G._post = {}

function convert (res) {
    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
    res.send = function (data) {
        res.end(data)
    }
}

const app = function(req, res) {

    convert (res)

    const pathname = url.parse(req.url).pathname
    const method = req.method.toLowerCase()

    if (G["_" + method][pathname]) {
        if (method === "get") {
            G._get[pathname](req, res)
        } else {
            let data = ""
            req.on("data", chunk => {
                data += chunk
            })
            req.on("end", (err, chunk) => {
                res.body = data
                G._post[pathname](req, res)
            })
        }
    }

}

app.get = function (pathname, callback) {
    G._get[pathname] = callback
}

app.post = function (pathname, callback) {
    G._post[pathname] = callback
}

exports.app = app
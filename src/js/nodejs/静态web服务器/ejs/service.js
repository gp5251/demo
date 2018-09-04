const http = require("http")
const ejs = require("ejs")
const url = require("url")

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"})
    const pathname = url.parse(req.url).pathname

    const msg = "这里是index"

    const list = ["abc", "cba", "efg"]

    if (pathname === "/index") {
        ejs.renderFile("./pages/index.ejs", {
            msg
        }, function(err, data) {
            res.end(data)
        })
    } else if (pathname === "/list") {
        ejs.renderFile("./pages/list.ejs", {
            list
        }, function(err, data) {
            res.end(data)
        })
    } else {
        ejs.renderFile("./pages/index.ejs", {
            msg
        }, function(err, data) {
            res.end(data)
        })
    }

}).listen(8080)
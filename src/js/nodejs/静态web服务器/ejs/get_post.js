const http =  require("http")
const url = require("url")
const ejs = require("ejs")

http.createServer((req, res) => {

    const pathname = url.parse(req.url).pathname

    const method = req.method.toLowerCase()
    console.log(pathname, method)

    if (pathname === "/login") {
        ejs.renderFile("./pages/form.ejs", (err, data) => {
            res.end(data)
        })
    } else if (pathname === "/dologin" && method === "get") {
        res.end("dologin: " + url.parse(req.url).query)
    } else if (pathname === "/dologin" && method === "post") {
        let msg = ""
        req.on("data", data => {
            msg += data
        })

        req.on("end", (err, data) => {
            res.end(msg)
        })
    } else {
        ejs.renderFile("./pages/index.ejs", {
            msg: "hello"
        }, (err, data) => {
            res.end(data)
        })
    }

}).listen(8080)

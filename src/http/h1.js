const http = require("http")
const url = require("url")

http.createServer( function (req, res) {
    if (req.url === "/favicon.ico") {
        return 
    }

    res.writeHead (200, {"Content-Type": "text/plain"})

    let data = []
    

    req.on("data", function (chunk) {
        // data.push(chunk)
        res.write(chunk.toString())
    })

    req.on("end", function () {
        console.log("---------------------")
        // console.log()
        console.log(req.headers)
        // console.log(req.method)
        console.log(req.url)
        console.log(url.parse(req.url, true))
        res.write("hello world")
        res.end()
    })

} ).listen (8888)
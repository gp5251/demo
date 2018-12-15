const http = require("http")

let options = {
    host: "localhost",
    port: 8888,
    path: "/index.html",
    method: "GET",
    headers: {
        "Content-Type": "text/plain"
    }
}

let req = http.request(options, function (res) {
    console.log(res.headers)
})

req.write("hello world")
req.end()

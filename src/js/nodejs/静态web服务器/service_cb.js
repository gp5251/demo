const fs =  require("fs")
const http = require("http")
const path = require("path")
const getMine = require("./model/getMine")
const url = require("url")

http.createServer((req, res) => {
   
    let pathname = url.parse(req.url).pathname
    
    if(pathname === "/favicon.ico") {
        return
    }

    if(pathname === "/") {
        pathname = "index.html"
    }

    fs.readFile(`${__dirname}/static/${pathname}`, (err, data) => {
        if (err) {
            // console.log(`找不到${__dirname}/static/${pathname}`)
            fs.readFile(`${__dirname}/static/404.html`, (err, data) => {
               
                if(err) {
                    console.log(err)
                } else {
                
                    res.writeHead(404, "not fount", {"Content-Type":"text/html;charset='utf-8'"})
                    res.write(data)
                    res.end()
                }
            })
            
        } else {
            const mine = path.extname(pathname)
            getMine(mine, (mineName) => {
                res.writeHead(200, "ok", {"Content-Type":mineName + ";charset='utf-8'"})
                res.write(data)
                res.end()
            })
            
        }
    })
    
    

    

}).listen(8088, "localhost")

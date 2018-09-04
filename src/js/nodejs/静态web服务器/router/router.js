const fs =  require("fs")
const path = require("path")
const url = require("url")

exports.statics = function statics (req, res, dirname) {
    let pathname = url.parse(req.url).pathname
    
    if(pathname === "/favicon.ico") {
        return
    }

    if(pathname === "/") {
        pathname = "index.html"
    }

    fs.readFile(`${dirname}/static/${pathname}`, (err, data) => {
        if (err) {
            // console.log(`找不到${dirname}/static/${pathname}`)
            fs.readFile(`${dirname}/static/404.html`, (err, data) => {
               
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
}

function getMine (mime, cb) {
    fs.readFile("./mime.json", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const type = JSON.parse(data.toString("utf-8"))
            cb(type[mime])
        }
    })
  }
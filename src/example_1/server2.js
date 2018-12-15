const fs = require("fs")
const path = require("path")
const http = require("http")

const MIME = {
    ".css": "text/css",
    ".js": "application/javascript"
}

function main (args) {

    const config = JSON.parse( fs.readFileSync (args[0], "utf-8") )
    let root = config.root || ".",
        port = config.port || 8888

    const app = http.createServer(function (req, res) {
        if (req.url === "favicon.ico") {
            return
        }

        console.log("---------------------")
        console.log(req.url)

        let paramNames = parseUrl (root, req.url)
        
        console.log(JSON.stringify(paramNames))

        validateFiles (paramNames.pathNames, function (err, pathnames) {
            if (err) {
                res.writeHead(404)
                res.end(err.message)
            } else {
                res.writeHead(200, {
                    "Content-type": paramNames.mime
                })
                outputFile (pathnames, res)
            }
        })
    })

    app.listen(port)

}

function outputFile (pathnames, res) {
    ;(function next(cur, len) {
        if (cur < len) {
            let rs = fs.createReadStream(pathnames[cur])
            rs.pipe(res, {"end": false})
            
            rs.on("end", function () {
                res.write(Buffer.from(";"))
                next (cur + 1, len)
            })
        } else {
            res.end()
        }
    })(0, pathnames.length)
}

function validateFiles (pathnames, callback) {
    ;(function next (cur, len) {
        if (cur < len) {
            fs.stat(pathnames[cur], function (err, stats) {
                if (err) {
                    callback(err)
                } else if ( !stats.isFile() ) {
                    callback(new Error())
                } else {
                    next (cur + 1, len)
                }
            })
        } else {
            callback(null, pathnames)
        }
    })(0, pathnames.length)
}

function parseUrl (root, urls) {

    let index = urls.indexOf("??")
    
    if ( index !== -1 ) {
        let urlArr = urls.split("??")
        let names = urlArr[1].split(",").map (function (value) {
            return path.join(root, urlArr[0], value)
        })

        return {
            pathNames: names,
            mime: MIME[path.extname(names[0])] || "text/plain"
        }
    } else {
        let names = path.join(root, urls)
        return {
            pathNames: [names],
            mime: MIME[path.extname(names)] || "text/plain"
        }
    }   

}

main(process.argv.slice(2))
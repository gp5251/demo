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

        mergeFiles (paramNames.pathNames, function (err, data) {
            if (err) {
                res.writeHead(404)
                res.end (err.message)
            }

            res.writeHead(200, {
                "Content-Type": paramNames.mime
            })

            res.end(data)
        })

    })

    app.listen(port)

}

function mergeFiles (filenames, callback) {
    let data = []
    ;(function next (cur, len) {
        if (cur < len) {
            fs.readFile (filenames[cur], function (err, res) {
                if (err) {
                    callback(err)
                } else {
                    data.push(res)
                    data.push(Buffer.from(";"))
                    next (cur + 1, len)
                }
            })
        } else {
            callback (null, Buffer.concat(data))
        }
    })(0, filenames.length)
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
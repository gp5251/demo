const express = require("express")

const app = express()

const timefn = function (req, res, next) {
    req.curTime = new Date().toLocaleString()
    console.log(req.curTime)
    console.log(req.originalUrl)
    next()
}

app.use(timefn)

app.get("*", function (req, res) {
    res.send("hello world, request " + req.route.path + " at " + req.curTime)
})

app.listen(3000)
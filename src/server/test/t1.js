const express = require("express")

const app = express()
const route = express.Router()

route.get("/route", function (req, res) {
    res.send(req.originalUrl)
})

app.use('/rrr', route);

app.use("/apple/abc", function (req, res) {
    res.send(req.baseUrl)
    console.log("apple " + req.baseUrl)
})

app.get("/peer", function (req, res) {
    res.send(req.url)
})

app.use("/static", express.static("../../assets"))

app.listen(8888, () => {
    console.log('App listening on port 3000!');
});
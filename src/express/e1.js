const express = require("express")
const path = require("path")
const router = express.Router()
const app = express()

app.get("/", function (req, res, next) {

    // res.writeHead(200)
    // res.write("hello world")
    console.log("app.get")
    res.send("hello world")
    next()
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

app.use('/static', express.static( path.join(__dirname, "../temp") ))

app.all('/', function(req, res, next) {
    // res.send("app.all")
    console.log("app.all")
    next()
})

app.route('/route')
    .get(function (req, res) {
        res.send("route get")
        console.log("route get")
    })
    .post(function (req, res) {
        res.send("route post")
        console.log("route post")
    })


router.use(function (req, res, next) {
    console.log("router  router")
    next()
})

router.get("/", function (req, res) {
    res.send("router get root")
})

router.get("/birds", function (req, res) {
    res.send("router get birds")
})

app.use('/birds', router)


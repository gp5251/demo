const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

const index = require("./routes/index")
const goods = require("./routes/goods")
const users = require("./routes/users")

const app = express()

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/", index)
app.use("/api/users", users)
app.use("/api/goods", goods)

app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use('/assets/style', express.static("./assets/style"));

app.use(function (req, res, next) {
    const err = new Error("Not Found  -----  " + req.originalUrl)
    console.log(404)
    err.status = 404
    err.errMsg = "Not Found"
    next(err)
})

app.use(function (err, req, res, next) {
    console.log(err)
    res.send(err)
})

process.argv[2] && ( process.env.name = process.argv[2])

app.listen(8888)
const express = require("express")
const ejs = require("ejs")

const app = new express()

app.set("view engine", "ejs")

// app.set("views", __dirname + "/views")
app.use(express.static("public"))
app.use("/static", express.static("public"))
app.use(express.static("../静态web服务器/static"))

app.get("/index", (req, res) => {
    const title = "hello world"
    res.render("index", {title})
})

app.get("/header", (req, res) => {
    res.render("header")
})

app.listen(8088, "localhost")
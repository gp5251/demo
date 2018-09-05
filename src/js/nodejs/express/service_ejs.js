const express = require("express")
const ejs = require("ejs")

const app = new express()

app.set("view engine", "ejs")

// app.set("views", __dirname + "/views")
app.use(express.static("public"))
app.use("/static", express.static("public"))

app.get("/index", (req, res) => {
    const title = "hello world"
    res.render("index", {title})
})

app.listen(8080, "localhost")
const express = require("express")

const app = new express()

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/index", (req, res) => {
    res.send(req.query)
})

app.get("/get/:id", (req, res) => {
    res.send(req.params)
})

// import txt from "./public/1.txt"
// const txt = require("./public/1.txt")
console.log(process.env.NODE_ENV)

app.listen(8080, "localhost")


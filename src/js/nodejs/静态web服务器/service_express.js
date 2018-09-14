const http = require("http")
const ejs = require("ejs")
const { app } = require("./like_express/app")


http.createServer(app).listen(8080)

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/login", (req, res) => {
    ejs.renderFile("./ejs/pages/form.ejs", (err, data) => {
        res.send(data)
    })
})

app.post("/dologin", (req, res) => {
    res.send(res.body)
})
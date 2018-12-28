const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/chuizi", { useNewUrlParser: true })

const conn = mongoose.connection

conn.once("open", function () {
    console.log("数据库连接成功")
})

conn.on("error", function (err) {
    console.log("数据库连接失败：" + err)
})

conn.on("disconnected", function () {
    console.log("数据库断开连接")
})

const router = express.Router()

router.get("/empty", function (req, res) {
    res.json({
        code: 0,
        errMsg: "empty"
    })
})

router.all("/", function (req, res, next) {
    res.locals.name = process.env.name || "admin"
    res.render("index")
})

module.exports = router

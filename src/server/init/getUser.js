const mongoose = require("mongoose")
const user = require("../models/user")

mongoose.connect("mongodb://127.0.0.1:27017/chuizi")

function getUser() {
    return new Promise((resolve, reject) => {
        user.create({
            "userId": "9527",
            "name": "陈二狗",
            "avatar": "http://osc9sqdxe.bkt.clouddn.com/defaultAvatar.jpg",
            "userName": "admin",
            "userPwd": "admin",
            "orderList": [],
            "cartList": [],
            "addressList": []
        }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

module.exports = getUser
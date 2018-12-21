const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    'productId': String,
    'salePrice': Number,
    'productName': String,
    'productImageSmall': Array,
    'productImageBig': String,
    'stock': Number,
    'sub_title': String,
    'limit_num': String,
    'productMsg': Object
})

module.exports = mongoose.model("good", Schema)

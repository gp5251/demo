const express = require("express")
const Good = require("../models/goods")
const User = require("../models/user")

const router = express.Router()

router.get("/computer", function (req, res) {

    let sort = +req.query.sort || ""
    let page = +req.query.page || 1
    let pageSize = +req.query.pageSize || 20
    let priceGt = +req.query.priceGt || ""
    let priceLte = +req.query.priceLte || ""
    let skip = (page -1) * pageSize

    let param = {}
    if (priceGt || priceLte) {
        if (priceGt && priceLte) {
            if (priceGt > priceLte) {
                [priceGt, priceLte] = [priceLte, priceGt]
            }

            param = {
                "salePrice": {
                    $gt: priceGt,
                    $lte: priceLte
                }
            }
        } else {
            param = {
                "salePrice": {
                    $gt: priceGt || 0,
                    $lte: priceLte || 999999999
                }
            }
        }
    }

    let queryResult = Good.find(param).skip(skip).limit(pageSize)
    sort && queryResult.sort( {"salePrice": sort} )

    queryResult.exec(function (err, docs) {
        if (err) {
            res.send("err: " + err)
        } else {
            res.render("goods", {goodsObj: docs})
        }
    })

})




module.exports = router

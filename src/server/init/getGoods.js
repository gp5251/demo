const request = require("superagent")
const eventproxy = require("eventproxy")
const mongoose = require("mongoose")
const Good = require("../models/goods")

mongoose.connect("mongodb://127.0.0.1:27017/chuizi", { useNewUrlParser: true })

const ep = new eventproxy()
const baseUrl = "https://www.smartisan.com"

function getGoods () {
    return new Promise((resolve, reject) => {
        let requestUrlLength = 5
        let requestUrl = []

        for(let index = 1; index < requestUrlLength; index++) {
            requestUrl.push(`${baseUrl}/product/spus?page_size=20&category_id=62&page=${index}&sort=sort`)
        }
        console.log(`requestUrl.length  ${requestUrl.length}`)
        ep.after("AAAAAAA", requestUrl.length, function (res) {
            console.log("in grabUrl")
            let productUrl = []
            res.forEach(item => {
                let data = JSON.parse(item)
                const { list } = data.data
                list.forEach(item => {
                    productUrl.push(`${baseUrl}/product/skus/${item.sku_info[0].sku_id}?with_spu_sku=true&with_stock=true`)
                })
            })
            

            ep.after("productData", productUrl.length, (res) => {
                res = res.map(item => {
                    let item1 = JSON.parse(item); //商品信息
                    const {id, price, shop_info } = item1.data
                    let pro = {
                        productId: id,
                        salePrice: price,
                        productName: shop_info.title,
                        sub_title: shop_info.sub_title,// 描述
                        limit_num: shop_info.limit_num,// 限购
                        productImageSmall: shop_info.ali_images,// 小图
                        productImageBig: shop_info.ali_image,// 主题
                        productMsg: shop_info.tpl_content.base.images.ali,
                        stock: 10
                    }
                    return pro
                })

                Good.insertMany(res, () => {
                    resolve()
                })
            })

            productUrl.forEach(item => {
                request.get(item).then(res => {
                    console.log("productUrl  " + item)
                    ep.emit("productData", res.text)
                })
            })
        })


        requestUrl.forEach(url => {
            
            request.get(url).then(res => {
                console.log("requestUrl " + url)
                ep.emit("AAAAAAA", res.text)
                
            }).catch(err => {
                console.error(err.message)
            })
        })


    })
}

module.exports = getGoods
// getGoods()
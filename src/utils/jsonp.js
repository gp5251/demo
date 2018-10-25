import jsonp from "jsonp"
import addParams from "./addParams"

export default function (url, data = {}, option = {}) {
    url = addParams(url, data)

    return new Promise ( (resolve, reject) => {
        jsonp (url, option, (err, res) => {
            if (!err) {
                resolve(res)
            } else {
                reject(err)
            }
        })
    } )
}
import Vue from "vue"
import axios from "axios"
import toast from "../toast"
import loading from "../loading"

Vue.use(toast)
Vue.use(loading)

function mergeData (data, other) {

    let _data

    if (data instanceof FormData) {
        for (let key in other) {
            data.append(key, other[key])
        }

        _data = data
    } else {
        _data = {...data, ...other}
    }

    return data

}

function request ({ url, method = "GET", data = {}, customConfig = {} }) {
    let options 

    if (method = "GET") {
        options = { url, method, ...customConfig, param: data }
    } else {
        options = { url, method, ...customConfig, data: data }
    }

    const loading = Vue.loading()

    return axios(options).then(res => {
        loading.close()
        return res.data
    }).catch(err => {
        loading.close()
        return Promise.reject(err)
    }) 
}

export default {
    install() {
        Vue.request = request
        Vue.prototype.$request = request
    }
}
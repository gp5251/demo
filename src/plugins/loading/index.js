import Vue from "vue"
import component from "./component"

const loadingConstructor = Vue.extend(component)

function getInstance () {
    return new loadingConstructor().$mount()
}

loadingConstructor.prototype.close = function () {
    
    const el = document.querySelector("[loading-component]")
    if (el) {
        
        document.body.removeChild(el)
        this.$destroy()
        
    }
    
}

let instanceTemp

function loading () {
    let instance
    if (document.querySelector("[loading-component]")) {
        instance = instanceTemp
    } else {
        instance = getInstance ()
        // instance.visibility = "visible"
        instanceTemp = instance.$el
        document.body.appendChild(instanceTemp)
    }

    return instance
}

export default {
    install () {
        Vue.loading = loading
        Vue.prototype.$loading = loading
    }
}
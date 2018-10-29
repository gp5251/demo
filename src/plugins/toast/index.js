import options from "./component"
import Vue from "vue"
const ToastConstructor = Vue.extend(options)


let canShow = true

function Toast (option) {
    if (!canShow) {
        return
    }

    const instance = new ToastConstructor().$mount()

    canShow = false

    instance.message = option.message

    const el = instance.$el
    
    document.body.appendChild ( el )

    const timeout = option.timeout || 2000
    
    setTimeout(() => {

        instance.visible = true

        clearTimeout(instance.timer)

        instance.timer = setTimeout(() => {  

            instance.visible = false
            canShow = true
            el.addEventListener("transitionend", function close () {
                document.body.removeChild ( el )
            })

        }, timeout);

    }, 0);
   
}



export default {
    install () {
        Vue.Toast = Toast
        Vue.prototype.$toast = Toast
    }
}
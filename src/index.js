import _ from "lodash"
import print from "./print"

function component () {
    let el = document.createElement("div")

    el.innerHTML = _.join(["hello", "webpack", "hahaha"], " ")
    el.classList.add("div")

    let btn = document.createElement("button")
    btn.innerHTML = "click"
    btn.onclick = print
    el.appendChild(btn)

    return el
}

document.body.appendChild(component())
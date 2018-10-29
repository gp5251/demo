export default function setRem (baseFont = 75, clientWidth = 750) {

    const docEl = document.documentElement
    const resizeEvent = "orientationchange" in window ? "orientationchange" : "resize"

    const resizeCallback = function () {

        const userWidth = docEl.getBoundingClientRect().width
        docEl.style.fontSize = baseFont * userWidth / clientWidth + "px"

    }

    window.addEventListener(resizeEvent, resizeCallback, false)
    document.addEventListener("DOMContentLoaded", resizeCallback, false)
}
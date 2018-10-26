export default function setRem (clientWidth = 750) {

    const docEl = document.documentElement
    const resizeEvent = "orientationchange" in window ? "orientationchange" : "resize"

    const resizeCallback = function () {

        const userWidth = docEl.getBoundingClientRect().width
        docEl.style.fontSize = 75 * userWidth / clientWidth + "px"

    }

    window.addEventListener(resizeEvent, resizeCallback, false)
    document.addEventListener("DOMContentLoaded", resizeCallback, false)
}
export default function (url, param) {

    if ( url.indexOf("?") > -1 ) {
        url += "&"
    } else {
        url += "?"
    }

    // for (let [key, value] of Object.entries(param)) {
    //     url += `${key}=${value}&`
    // }

    for (let key in param) {
        url += `${key}=${param[key]}&`
    }

    return url.replace(/&$/, "")

}
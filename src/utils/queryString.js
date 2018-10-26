export default function queryString (url) {
    let query = {}
    let searchString

    if (url) {
        
        searchString = url.slice(url.indexOf("?") + 1)

    } else {

        searchString = location.search.slice(1) || location.hash.slice(location.hash.indexOf("?") + 1)

    }
    
    const reg = /&?(\w+)=([^&]+)(?:$|&)/ig

    while (reg.test(searchString)) {

        query[RegExp.$1] = decodeURIComponent( RegExp.$2 )
        
    }

    return query
}
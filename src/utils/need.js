/**
 * 按需加载外链js资源
 */

 export default function need (resource, callback) {

    if (!resource) return
    
    const script = document.createElement("script")

    script.src = resource
    script.async = false

    if ("onload" in script) {
        script.onload = callback
        script.onerror = () => {}
    } else {
        script.onreadystatechange = () => {
            if ( /loaded|complete/i.test(script.readyState) ) {
                callback.call(script)
            }
        }
    }

    document.getElementsByTagName("head")[0].appendChild(script)

 }
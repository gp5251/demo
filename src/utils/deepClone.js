// export default function cloneDeep(obj, result) {
//     result = result || (obj instanceof Array ? [] : {})
//     if(obj instanceof Object) {
//         Object.entries(obj).map(([ key, value ]) => {
//             if(value instanceof Object) {
//                 result[key] = value instanceof Array ? [] : {}
//                 cloneDeep(value, result[key])
//             } else {
//                 result[key] = value
//             }
//         })
//     } else {
//         result = obj
//     }

//     return result
// }

export default function deepClone (obj) {
    if (obj instanceof Object) {

        let result = obj instanceof Array ? [] : {}

        for (let key in obj) {

            result[key] = obj[key] instanceof Object ? deepClone(obj[key]) : obj[key]

        }

        return result

    } else {

        return obj

    }
}
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

// export default function deepCloneCommon (obj) {
//     if (obj instanceof Object) {

//         let result = obj instanceof Array ? [] : {}

//         for (let key in obj) {

//             result[key] = obj[key] instanceof Object ? deepClone(obj[key]) : obj[key]

//         }

//         return result

//     } else {

//         return obj

//     }
// }

export default function deepClone (obj, parent = {}) {
    if ( (typeof obj == "object" || typeof obj == "function") && obj !== null ) {
        let Constructor = obj.constructor
        let cloneObj
        switch (Constructor) {
            case RegExp:
            case Date: 
                cloneObj = new Constructor (obj);
                break;
            // case Date: 
            //     cloneObj = new Constructor (obj);
            //     break;
            case Function:
                cloneObj = obj.bind(parent);
                break;
            default: 
                cloneObj = new Constructor()
                break;
        }

        for (let key in obj) {
            cloneObj[key] = deepClone (obj[key], cloneObj)
        }

        return cloneObj

    } else {
        return obj
    }
}

// var d = {
//     a: "aaa",
//     b () {
//         console.log(this)
//     },
//     c: {
//         d: 8
//     },
//     f: new Date(),
//     g: /a/i
// }

// var e = deepClone(d)
// e.c.d = 6
// d.b()
// e.b()
// console.log(d.c.d)
// console.log(e.c.d)

// console.log(d.valueOf())
// console.log(e.valueOf())

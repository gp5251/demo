class Promise {
    constructor(exec) {
        this.state = 'pendding'
        this.value = undefined
        this.reason = undefined

        this.onResolveCb = []
        this.onRejectCb = []

        let resolve = value => {
           
            if (this.state === 'pendding') {
                this.state = 'fulfilled'
                this.value = value
                this.onResolveCb.forEach(fn => fn())
            }
        }

        let reject = reason => {
            if (this.state === 'pendding') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectCb.forEach(fn => fn())
            }
        }

        try {
            exec(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onResolve, onReject) {
        onResolve = typeof onResolve === 'function' ? onResolve : value => value
        onReject = typeof onReject === 'function' ? onReject : err => { throw err }

        let promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        let x = onResolve(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }

            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onReject(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }

            if (this.state === 'pendding') {
                this.onResolveCb.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onResolve(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })

                this.onRejectCb.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onReject(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })

        return promise2
    }

    catch (onReject) {
        return this.then(null, onReject)
    }
}

Promise.resolve = (value) => {
    return new Promise((resolve) => {
        resolve(value)
    })
}

Promise.reject = (err) => {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}

Promise.race = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            p.then(resolve, reject)
        })
    })
}

Promise.all = (promises) => {

    let index = 0
    let len = promises.length
    let result = []

    function process (data, i, resolve) {
        index++
        result[i] = data
        if (index === len) {
            resolve(result)
        }
    }

    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            p.then((data) => {
                process(data, i, resolve)
            }, reject)
        })
    })
}

function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new Error('x === promise2'))
    }

    let called

    if ((x !== null && typeof x === 'object') || typeof x === 'function') {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, err => {
                    if (called) return
                    called = true
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}


// console.log("aaaa")

// new Promise(resolve => {
//     resolve("5555555555")
// }).then(value => {
//     console.log(value)
//     throw new Error("error")
// }).catch(err => {
//     console.log(err.message)
// })

// console.log("bbbbbbbbbbb")

new Promise(resolve => {
    resolve(Promise.resolve("aaaaa"))
}).then(value => {
    console.log(value)
}).catch(err => {
    console.log(err.message)
}) 
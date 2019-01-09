 class Promise {

     constructor ( executor ) {

        this.state = "pending"

        this.value = undefined

        this.reason = undefined

        this.onResolvedCallbacks = []

        this.onRejectedCallbacks = []

         let resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled"
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
         }

         let reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected"
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
         }

         try {
            executor (resolve, reject)
         } catch (err) {
             reject (err)
         }
     }

     then (onFulfilled, onRejected = () => {}) {
        if (this.state === "fulfilled") {

            onFulfilled (this.value)

        } else if (this.state === "rejected") {

            onRejected (this.reason)

        } else if (this.state === "pending") {

            this.onResolvedCallbacks.push(function () {
                onFulfilled (this.value)
            })

            this.onRejectedCallbacks.push(function () {
                onRejected (this.reason)
            })

        }

        
     }
 }
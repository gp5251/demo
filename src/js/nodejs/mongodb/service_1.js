const MongoClient = require("mongodb").MongoClient

const DBurl = "mongodb://127.0.0.1:27017"
const DBName = "mydb"

MongoClient.connect(DBurl, (err, client) => {
    if (err) {
        console.log(err)
        return 
    }

    const db = client.db(DBName)
    try {
        // db.collection("users").insertMany([
        //     {
        //         "name": "aaa",
        //         "age": 19,
        //         "sex": "male"
        //     },
        //     {
        //         "name": "bbb",
        //         "age": 19,
        //         "sex": "female"
        //     },
        //     {
        //         "name": "ccc",
        //         "age": 19,
        //         "sex": "male"
        //     }
        // ])
        // console.log("插入成功")

        const cursor = db.collection("users").find()
        // 遍历方法
        let i = 0
        cursor.each((err, item) => {
            console.log(i++)
            console.log(item)  // 一个一个返回 最后返回一个null
        })

        // let i = 0
        // cursor.toArray((err, item) => {
        //     console.log(i++)
        //     console.log(item) // 返回了一个数组
        // })
        cursor.count((err, count) => {
            console.log(count)
        })

    } catch(err) {
        console.log(err)
        
    } finally {
        client.close()
    }

})

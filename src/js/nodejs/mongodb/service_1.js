const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const DBurl = "mongodb://127.0.0.1:27017"


MongoClient.connect(DBurl, (err, db) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(db.db("mydb"))
    const database = db.db("mydb")
    database.collection("users").insertOne({
        "name": "mingming",
        "age": 20,
        "sex": "female"
    }, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        // console.log(data)
    })
   
    const cursor = database.collection("users").find({}, {"_id":0})
    // while(cursor.hasNext()) {
    //     console.log(cursor.next())
    //     cursor.next().then(data => {
    //         console.log(data)
    //     })
    // }

    const arr = cursor.toArray((err, data) => {
        console.log(data)
    })
    
    // cursor.each((err, doc) => {
    //     if (doc !== null) {
    //         console.log(doc)
    //     }
    // })
    // console.log(arr[0])
    // arr.forEach(element => {
    //     console.log(element.name)
    // });
    db.close()
})
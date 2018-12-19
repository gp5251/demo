const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test2')
const con = mongoose.connection

con.on('error', function() {
    console.log('连接数据库失败')
})

con.once('open', function() {
    console.log('连接成功')

    // let Schema = mongoose.Schema({
    //     name: String,
    //     age: Number
    // })

    // Schema.methods.say = function () {
    //     console.log("name: " + this.name)
    // }

    // let Model = mongoose.model("people", Schema)

    // let mike = new Model({
    //     name: "mike",
    //     age: 20
    // })

    // mike.save(function(err, mike) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     mike.say()

    //     Model.find({name: "mike"}, function(err, data) {
    //         if (err) {
    //             return console.log(err)
    //         }
    //         console.log(data)
    //     })
    // })

    let Schema2 = new mongoose.Schema(
        {
            name: String,
            time: Number,
            price: Number
        },
        { collection: 'movie' }
    )

    let Model = mongoose.model('movie', Schema2, 'movie')

    // Model.find({time: {$gt:90}}, function(err, data) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log(data)
    // })

    Model.insertMany([
        {
            name: 'aaa',
            time: 929,
            price: 88
        },
        {
            name: 'ccc',
            time: 120,
            price: 77
        }
    ])
})

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/test');
// const con = mongoose.connection;
// con.on('error', console.error.bind(console, '连接数据库失败'));
// con.once('open',()=>{
//     //成功连接
//     console.log("连接成功")
// })

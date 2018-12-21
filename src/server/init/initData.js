const getGoods = require("./getGoods")
const getUser = require("./getUser")

async function initData () {
    console.log("getgoods")
    await getGoods()
    console.log("getgoods END")
    console.log("getUser")
    await getUser()
    console.log("getUser END")

    process.on("exit", () => {
        console.log("数据抓取完毕")
    })

    process.exit()
}

initData()
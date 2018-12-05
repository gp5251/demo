async function fn (timeout) {
    let p1 = await new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("hahahahahahaaha")
        }, timeout);
    })

    console.log(p1)

    return p1

}

fn(3000).then (res => {
    console.log(res)
})
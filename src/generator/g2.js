function* fibonacci () {
    let [pre, cur] = [0, 1]

    for (;;) {
        yield cur;
        [pre, cur] = [cur, pre + cur];
    }
}

// let g = fibonacci()

for ( let result of fibonacci() ) {
    if (result > 10000) {
        console.log(result)
        break;
    }
}
const http  = require("http")
const url = require("url")

http.createServer((req, res) => {

    res.writeHead(200, "reasonPhrase", {"Content-Type":"text/html;charset='utf-8'"})
    res.write("hello world")
    // console.log(req.url)
    if(req.url  === "/favicon.ico") return
    // 把URL 转换为对象
    console.log(url.parse(req.url,  true))
    console.log(url.parse("http://www.abc.com?sex=male&age=20#abc"))
     // 把对象 转换为对URL
    console.log(url.format(req.url))
    
    console.log(url.resolve("http://abc.com/124/rwrwe", "233"))
    console.log(url.resolve("http://abc.com/124/46", "/233/abc/cba/jkj"))
    console.log(url.resolve("http://abc.com", "/233"))
    console.log(url.resolve("http://abc.com", "233"))

    res.end()



}).listen(8088, "localhost")
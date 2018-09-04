const http =  require("http")
const { statics } = require("./router/router")

http.createServer((req, res) => {
   
    statics(req, res, __dirname);
    
}).listen(8088, "localhost")

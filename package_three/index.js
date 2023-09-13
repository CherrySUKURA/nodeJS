const http = require('http')

let server = http.createServer()

server.on('request',(req,res) => {
    console.log("Someone visit our web server")
    // console.log(req.url,req.method,req.cookie,req.data)
    // console.log(res)
    // let str = `Your request url is ${req.url}, and request method is ${req.method}`
    let str = `你请求的 url 是${req.url}, 请求 method 类型是 ${req.method}`
    res.setHeader('Content-type','text/html;charset=utf-8')
    res.end(str)
})

server.listen(8081,() => {
    console.log('server running at http://127.0.0.1:8081')
})


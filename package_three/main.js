const http = require('http'),
      fs = require('fs'),
      path = require('path')

const server = http.createServer()

server.on('request',(req,res) => {
    const url = req.url
    let content = '<h1>404 Not found</h1>'
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }
    if(url == '/about.html'){
        content = '<h1>关于</h1>'
    }

    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content)
})


// server.on('request',(req,res) => {
//     let url = req.url
//     res.setHeader('Content-Type','text/html; charset=urf-8')
//     get404Html(url,res)
// })

server.listen(8080,() => {
    console.log("open the server")
})

// function get404Html(name,res) {
//     fs.readFile(path.join(__dirname,name),'utf-8',(err,dataStr) => {
//         if(err){
//             console.log('错误' + err.message)
//             return get404Html('404.html',res)
//         }
        
//         res.end(dataStr)
//     })
// }
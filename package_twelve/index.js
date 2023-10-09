const express = require('express'),
      querystring = require('querystring'),
      app = express()

//解析表单数据的中间件
app.use((req,res,next) => {
    //定义中间件具体的逻辑

    //str用来存储请求体数据
    let str = ''

    //监听data事件进行数据的拼接
    req.on('data',(chunk) => {
        str += chunk
    })

    //监听end事件拿到完整的请求体数据
    req.on('end',() => {
        // console.log(str)
        //处理完整的请求体数据，把字符串格式的请求体数据解析为对象格式
        str = querystring.parse(str)
        // console.log(str)

        req.body = str

        next()
    })
})

app.post('/user',(req,res) => {
    console.log(req.body)
    res.send('请求成功')
})

app.listen(80,() => {
    console.log("express Server running at http://127.0.0.1")
})
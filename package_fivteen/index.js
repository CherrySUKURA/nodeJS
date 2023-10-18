const express = require('express')

const cors = require('cors')

const router = require('./router')

const common = require('./common')

const app = express()

app.get('/api/jsonp',(req,res) => {
    //TODO: 定义JSONP接口具体的实现过程

    //得到函数的名称

    const funcName = req.query.callback

    //定义要发送到客户端的数据对象

    const data = { name: 'wzh', age: 20 }

    //拼接一个函数的调用

    const scriptStr = `${funcName}(${JSON.stringify(data)})`

    //把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

app.use(cors({
    allowedHeaders: ['Content-Type'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS' // 允许的请求方法
}))


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api',router)

app.use(common.error)

app.listen(80,() => {
    console.log("Express server running at http://127.0.0.1")
})
const express = require('express'),
      customBodyParser = require('./custom-body-parser'),
      app = express()

//解析表单数据的中间件

app.use(customBodyParser)

app.post('/user',(req,res) => {
    console.log(req.body)
    res.send('请求成功')
})

app.listen(80,() => {
    console.log("express Server running at http://127.0.0.1")
})
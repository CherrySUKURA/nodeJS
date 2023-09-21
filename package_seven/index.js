const express = require('express')

const app = express()

app.get('/user',(req,res) => {
    console.log(req.query)
    res.send({name: 'wzh',age: 24,gender: '男'})
})

app.post('/user',(req,res) => {
    console.log(req.query)
    res.send("请求成功")
})

app.get('/user/:id',(req,res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(8081,() => {
    console.log('express server running at http://127.0.0.1:8080')
})
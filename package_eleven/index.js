const express = require('express'),
      app = express()

app.get('/user',(req,res) => {
    throw new Error("服务器内部错误")
    res.send("Home Page")
})

app.use((err,req,res,next) => {
    console.log('发生错误' + err.message)
    res.send('Error' + err.message)
})

app.listen(80,() => {
    console.log("express server running at http://127.0.0.1")
})
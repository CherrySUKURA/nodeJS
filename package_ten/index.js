const express = require('express')

const app = express()

const mw1 = function(req,res,next) {
    console.log("局部生效")
    next()
}

app.get('/',mw1,(req,res) => {
    res.send("request success")
})

app.get('/user',(req,res) => {
    res.send("request success")
})

app.listen(80,() => {
    console.log("express server running at http://127.0.0.1")
})
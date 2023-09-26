const express = require('express'),
      router = require('./router/router'), 
      app = express()

const mw = function (req,res,next){
    console.log("这是中间件")
    next()
}

app.use('/api',mw)

app.use('/api',router)

app.listen(80,() => {
    console.log("Express Server running at http://127.0.0.1")
})
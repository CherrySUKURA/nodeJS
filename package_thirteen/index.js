const express = require('express')

const router = require('./router')

const common = require('./common')

const app = express()

app.use(express.urlencoded({extended: false}))

app.use('/api',router)

app.use(common.error)

app.listen(80,() => {
    console.log("Express server running at http://127.0.0.1")
})
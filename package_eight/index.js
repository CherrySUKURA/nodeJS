const express = require('express')

const app = express()

app.use(express.static('./public'))  

app.listen(80,() => {
    console.log("open http at http://127.0.0.1")
})
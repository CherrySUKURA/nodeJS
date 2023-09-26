const express = require('express')

const router = express.Router()

router.get('/list/user',(req,res) => {
    res.send('get 请求成功')
})

router.post('/list/add',(req,res) => {
    res.send('post 请求成功')
})

module.exports = router
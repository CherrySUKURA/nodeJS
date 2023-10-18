const express = require('express')

const router = express.Router()

router.get('/get',(req,res) => {
    const query = req.query

    res.send({
        status: 0,
        message: "请求成功",
        data: query
    })
})

router.get('/post',(req,res) => {
    const bdoy = req.body

    res.send({
        status: 0,
        message: "请求成功",
        data: body
    })
})

module.exports = router
const express = require("express"),
      cors = require("cors"),
      jsonwebtoken = require("jsonwebtoken"), //生成JWT字符串
      expressJwt = require("express-jwt"), //解析JWT字符串
      bodyParse = require("body-parser")
      app = express(),
      secretKey = "wzhaia321"

//允许跨域共享
app.use(cors())

//解析post表单数据的中间件
app.use(bodyParse.urlencoded({extented: false}))

//注册将JWT字符串解析还原成JSON对象的中间件

app.use(expressJwt.expressjwt({secret: secretKey,algorithms: ["HS256"]}).unless({path: [/^\/api\//]}))

app.post("/api/login",(req,res) => {
    let userInfo = req.body

    if(userInfo.username !== 'admin' || userInfo.password !== '000000'){
        return res.send({
            result: 0,
            message: "登陆失败!"
        })
    }

    res.send({
        result: 1,
        message: "登陆成功！",
        data: {
            token: jsonwebtoken.sign({username: userInfo.username},secretKey,{expiresIn: '2s'})
        }
    })
})

app.get("/admin/getInfo",(req,res) => {
    console.log(req.auth)
    res.send({
        resutl: 1,
        message: "获取用户信息成功！",
        data: req.auth
    })
})

app.use((err,req,res,next) => {
    if(err.name == 'UnauthorizedError'){
        return res.send({
            resutl: 0,
            message: "token失效！"
        })
    }
    res.send({
        resutl: 500,
        message: "未知错误！"
    })
})

app.listen("80",() => {
    console.log("express serve running at http://127.0.0.1")
})


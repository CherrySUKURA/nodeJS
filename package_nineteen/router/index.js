const express = require('express'),
      session = require('express-session'),
      router = express.Router()
      router.use(session({
        secret: 'keyboard cat', //secret 属性的值可以为任意字符串
        resave: false, //固定写法
        saveUninitialized: true //固定写法
      }))

      router.post('/login',(req,res) => {
        if(req.body.username !== 'admin' || req.body.password !== '000000'){
            return res.send({
                status: 0,
                msg: "登陆失败！"
            })
        }
        console.log(req.session)
        req.session.user = req.body //将用户信息存储到session中
        req.session.isLogin = true //将用户登陆状态，存储到session中

        res.send({
            status: 1,
            msg: "登陆成功"
        })
      })

      router.get('/userInfo',(req,res) => {
        console.log(req.session)
        if(!req.session.isLogin){
            return res.send({
                status: 0,
                msg: "重新登录！"
            })
        }
        res.send({
            status: 1,
            data: req.session.user,
            mes: "获取成功"
        })
      })

      router.get('/logout',(req,res) => {
        req.session.destroy()
            res.send({
                status: 1,
                msg: "退出成功"
            })
      })

module.exports = router
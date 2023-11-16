const express = require("express"),

      userHandler = require("../router_handler/user"), //使用了分离路由的处理函数，为了保持路由文件的纯粹性
      
      router = express.Router()

      //注册
      router.post('/reguser',userHandler.regUser)

      //登录
      router.post('/login',userHandler.login)

module.exports = router
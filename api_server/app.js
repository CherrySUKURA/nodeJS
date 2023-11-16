//导入模块
const express = require("express"),
      cors = require("cors"),
      mysql = require("mysql"),
      userRouter = require("./router/user"), //api router路由文件

      //创建数据库实例
      db = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "admin123",
        database: "my_bd_01"
      }),

      //创建服务器的实例对象
      app = express()

      //注册cors为全局中间件
      app.use(cors())

      //配置解析application/x-www-from-urlencoded 格式的表单数据中间件
      app.use(express.urlencoded({extended: false}))

      //配置解析json格式数据的中间件
      app.use(express.json())

      //注册路由中间件
      app.use('/api', userRouter)

      //启动服务器
      app.listen(80,() => {
        console.log("express server running at http: 127.0.0.1")
      })
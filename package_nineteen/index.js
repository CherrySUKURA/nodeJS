const express = require('express'),
      // session = require('express-session'),
      mysql = require('mysql'),
      db = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'admin123',
        database: 'my_db_01'
      }),
      app = express(),
      router = require('./router')

      // app.use(session({
      //   secret: 'keyboard cat', //secret 属性的值可以为任意字符串
      //   resave: false, //固定写法
      //   saveUninitialized: true //固定写法
      // }))

      //托管静态页面
      app.use(express.static('./pages'))

      //解析POST提交过来的表单数据
      app.use(express.urlencoded({extended: false}))

      app.use('/api',router)

      app.listen(80,() => {
        console.log("express server running http://127.0.0.1")
      })
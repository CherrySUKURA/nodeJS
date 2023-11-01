const mysql = require("mysql"),
      db = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "admin123",
        database: "my_db_01"
      }),
      user = {username: 'lsh',password: 'lsh',id: 5},
      sqlStr = "update users set username = ?,password = ?,id = ? where id = 18"

      db.query(sqlStr,[user.username,user.password,user.id],(err,results) => {
        if(err) return console.log(err.message)

        if(results.affectedRows ===1 ) console.log("更新成功")
      })

    //   sqlStr = "update users set ? where id = 18"

    //   db.query(sqlStr,user,(err,results) => {
    //     if(err) return console.log(err.message)

    //     if(results.affectedRows ===1 ) console.log("更新成功")
    //   })

    //   db.query("select * from users",(err,results) => {
    //     if(err) return console.log(err.message)

    //     console.log(results)
    //   })

const deleteStr = "delete from users where id = ?"
      //如果sql语句中有多个占位符？，就需要使用数组为每个占位符指定具体的值
      //如果只有一个就可以省略数组
      db.query(deleteStr,19,(err,results) => {
        if(err) return console.log(err.message)

        if(results.affectedRows === 1) {
            console.log("删除成功")
        }
      })
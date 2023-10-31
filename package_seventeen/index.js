const mysql = require("mysql"),
      db = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "admin123",
        database: "my_db_01"
      }),
      user = { username: 'fwz', password: 'fwz'}, //定义要插入的数据
      sqlStr = "INSERT INTO newUsers (username,password) VALUES (?,?)" //书写SQL语句，？是占位符，在插入时在参数中指定要插入的值
      //第二个参数中的值与？按顺序一一对应
      db.query(sqlStr,[user.username,user.password],(err,results) => {
        if(err) return console.log(err.message)
        //affectRows：sql语句影响的行数，为1证明插入了一行
        if(results.affectedRows === 1){
          console.log("插入数据成功")
        }
      })

const newUser = { username: "cst",password: "cst" },
      newSqlStr = "insert into newUsers set ?"

      db.query(newSqlStr,newUser,(err,results) => {
        if(err) return console.log(err.message)
        if(results.affectedRows === 1){
          console.log("插入数据成功1")
        }
      })
      
      //查询users表中的所有数据
      db.query("SELECT * FROM users",(err,results) => {
          if(err) return console.log(err.message)

          console.log(results)
      })
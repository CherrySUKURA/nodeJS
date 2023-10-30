const Express = require("express"),
      MySQL = require("mysql"),
      app = Express(),
      db = MySQL.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "admin123",
        database: "my_db_01"
      })

      db.query("SELECT * FROM users",(err,result) => {
        if(err){
            return console.log(err.message)
        }

        console.log(result)
      })
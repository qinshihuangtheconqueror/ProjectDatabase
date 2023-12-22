const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', 
    //database: dbConfig.DB 
  });

db.connect((err)=>{
  if (!err) 
      console.log('Connect successfully');
  else console.log(err);
})

module.exports=db;
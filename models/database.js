const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', 
    database: 'hospital'
  });

db.connect((err)=>{
  if (!err) 
      console.log('Connect successfully');
  else console.log(err);
})

module.exports=db;
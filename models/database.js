const mysql = require('mysql');

const db = mysql.createConnection({
<<<<<<< HEAD
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME
=======
    host: 'localhost',
    user: 'root',
    password: '123456789', 
    database: 'hospital'
>>>>>>> cb456ea (Trying merge)
  });

db.connect((err)=>{
  if (!err) 
      console.log('Connect successfully');
  else console.log(err);
})

module.exports=db;
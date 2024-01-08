const mysql = require('mysql');

const db = mysql.createConnection({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> huypart
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME
<<<<<<< HEAD
=======
    host: 'localhost',
    user: 'root',
    password: '123456789', 
    database: 'hospital'
>>>>>>> b766b3b1486b0b2df6ae8c8b1937e62a82f72a05
=======
>>>>>>> huypart
  });

db.connect((err)=>{
  if (!err) 
      console.log('Connect successfully');
  else console.log(err);
})

module.exports=db;
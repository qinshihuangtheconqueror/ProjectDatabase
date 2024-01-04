const sql = require("./database");

const User = function(user){
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
<<<<<<< HEAD
    this.type_of_account = 1;
=======
>>>>>>> b766b3b1486b0b2df6ae8c8b1937e62a82f72a05
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO account SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findByEmail = (email, result) => {
<<<<<<< HEAD
    sql.query(`SELECT * from account WHERE email = '${email}' AND type_of_account = 1`, (err, res) => {
=======
    sql.query(`SELECT * from account WHERE email = '${email}'`, (err, res) => {
>>>>>>> b766b3b1486b0b2df6ae8c8b1937e62a82f72a05
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0])
            return;
        }
        result(null, null);
    });
}

module.exports = User;
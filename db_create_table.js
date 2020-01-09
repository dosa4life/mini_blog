var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "Ddb1",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(25),last_name VARCHAR(25) ,e_mail VARCHAR(25),password VARCHAR(25),bio VARCHAR(500),gender VARCHAR(10),age VARCHAR(2))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
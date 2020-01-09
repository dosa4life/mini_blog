var mysql = require('MySQL');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE Ddb1", function (err, result) {
    if (err) throw err;
    console.log("DB Created !");
  });
});

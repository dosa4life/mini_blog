var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "Ddb1",
 // port: 3301
  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (user_id,first_name,last_name,e_mail,password,bio,gender,age) VALUES ('114','Shrub','Sal','dhruv@gmail.com','pas','asassasd','Male','25')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
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
  var sql = "INSERT INTO posts (post_id,title,description,image_url,likes,author) VALUES ('72' , 'Theory Of Evrything' , 'We are much more certain what dark matter is.', 'asdasda' ,'45', 'NASA')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Posts record inserted");
  });
});
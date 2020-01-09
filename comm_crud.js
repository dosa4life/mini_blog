const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass',
  database: 'Ddb1',
  port:3301

});
 
//connect to database
conn.connect((err) => {
  if(err) throw err;
  console.log('Mysql Connected ..!');
  var sql = "CREATE TABLE comments (comm_id INT PRIMARY KEY, comm_by VARCHAR(50),comm_desc VARCHAR(500))";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Comments Table created");
 });
});
 
//show all comments
app.get('/JsExp/comments',(req, res) => {
  let sql = "SELECT * FROM comments";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single comment
app.get('/JsExp/post/:id',(req, res) => {
  let sql = "SELECT * FROM comments WHERE comm_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 

 
//Delete comment
app.delete('/JsExp/comments/:id',(req, res) => {
  let sql = "DELETE FROM comments WHERE comm_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3301,() =>{
  console.log('Server started on port 3301..!');
});
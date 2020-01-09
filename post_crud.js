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
  var sql = "CREATE TABLE posts (post_id INT PRIMARY KEY, title VARCHAR(50),description VARCHAR(500) ,image_url VARCHAR(100),likes VARCHAR(25),author VARCHAR(500))";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Posts Table created");
 });
});
 
//show all posts
app.get('/JsExp/posts',(req, res) => {
  let sql = "SELECT * FROM posts";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single post
app.get('/JsExp/post/:id',(req, res) => {
  let sql = "SELECT * FROM posts WHERE post_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new posts
app.post('/JsExp/posts',(req, res) => {
  let data = {title: req.body.title, description: req.body.description, author:req.body.author};
  let sql = "INSERT INTO posts (post_id,title,description,author) VALUES (post_id: req.params.post_id, title: req.body.title , description:req.body.description";
  let query = conn.query(sql, data,(err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update posts
app.put('/JsExp/posts/:id',(req, res) => {
  let sql = "UPDATE posts SET title='"+req.body.title+"',description='"+req.body.description+"' WHERE post_id=req.params.id";
  let query = conn.query(sql, (err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete post
app.delete('/JsExp/posts/:id',(req, res) => {
  let sql = "DELETE FROM posts WHERE post_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3301,() =>{
  console.log('Server started on port 3301..!');
});
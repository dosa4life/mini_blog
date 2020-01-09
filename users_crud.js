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
  database: 'Ddb1'
});
 
//connect to database
conn.connect((err) => {
  if(err) throw err;
  console.log('Mysql Connected ..!');
});
 
//show all users
app.get('/JsExp/users',(req, res) => {
  let sql = "SELECT * FROM users";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single users
app.get('/JsExp/users/:id',(req, res) => {
  let sql = "SELECT * FROM users WHERE user_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new users
app.post('/JsExp/users',(req, res) => {
  let data = {product_name: req.body.product_name, product_price: req.body.product_price};
  let sql = "INSERT INTO users (user_id,first_name,last_name,e_mail,password,bio,gender,age) VALUES (user_id: req.params.user_id, first_name: req.body.first_name , last_name:req.body.last_name, e_mail:req.body.e_mail , bio:req.body.bio, gender:req.body.gender, age:req.body.age";
  let query = conn.query(sql, data,(err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update users
app.put('/JsExp/users/:id',(req, res) => {
  let sql = "UPDATE users SET first_name='"+req.body.first_name+"',last_name='"+req.body.last_name+"' WHERE user_id=req.params.user_id";
  let query = conn.query(sql, (err, results) => {
  if(err) throw err;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete user
app.delete('/JsExp/users/:id',(req, res) => {
  let sql = "DELETE FROM users WHERE user_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3301,() =>{
  console.log('Server started on port 3301..!');
});
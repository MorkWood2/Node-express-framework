const express = require('express');

const app = express();

app.get('/', function(req,res){
  res.send("WeLcOme to the main page");
})
app.get('/pig', function(req,res){
  res.send("Oink")
})
app.get('/pig/:subject', function(req, res){
  let subject = req.params.subject; // has to match exactly
  res.send("nice, pig/ " + subject +  " works!")
})
app.get('*', function(req, res){
  res.send("404 mutha fucka")
})
app.listen(3000, function(){
  console.log('Server has sharted');
})

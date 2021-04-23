var express = require("express");
var prices = require('./data/prices.json');
var orders = require('./data/orders.json');
var payments = require('./data/payments.json');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/prices", function(req, res, next) {
  res.send(prices);
});

app.get("/orders", function(req, res, next) {
    res.send(orders);
});

app.get("/payments", function(req, res, next) {
    res.send(payments);
});

app.listen(5000, () => console.log('Server listening on port 5000!'))
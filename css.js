var express = require("express");

var app = express();

var stylus = require('stylus');

app.use(stylus.middleware({"src" : process.argv[3]}));

app.use("/", express.static(process.argv[3]));

app.listen(process.argv[2]);
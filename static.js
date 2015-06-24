var express = require('express');
var resp = process.argv[3], portnumber = process.argv[2];

var app = express();

app.use("/", express.static(resp))


app.listen(portnumber);
// serve static files with express

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.listen(3000);

console.log('Server running at http://localhost:3000/');
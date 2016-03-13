var express = require('express');
var app = express();
var path = require('path');

/* view at http://localhost:8080 */
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '/index.html'));
    res.render('index')
});





// app.listen(8080);
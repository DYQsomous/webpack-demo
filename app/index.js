require('./sass/main.scss')

var $ = require('jquery');
var sub = require('./sub');
var moment = require('moment');
var app = document.createElement('div');

app.innerHTML = '<h1>Hello Word</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p>look at me! now is ' + moment().format() + '</p>')

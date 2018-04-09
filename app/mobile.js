require('./sass/main.scss')

var sub = require('./sub');
var app = document.createElement('div');

app.innerHTML = '<h1>Hello Word</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p>look at me! now is mobile ' + moment().format() + '</p>')

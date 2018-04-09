require('./sass/main.scss')

var sub = require('./sub');
var app = document.createElement('div');

app.innerHTML = '<h1>Hello Word 2</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p>look at me! now is ' + moment().format() + '</p>')

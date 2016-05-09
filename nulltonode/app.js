/* require is a NodeJS specific funtion used to load pckg */
var express = require('express');
var app = express();
var routes = require('./routes');
var hbs = require('express-handlebars');

//Set handlebars as the default template engine --> use main.handlebars as default
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', routes.home);

app.listen(3000);
console.log('App running on port 3000');
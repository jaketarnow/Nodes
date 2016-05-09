/* require is a NodeJS specific funtion used to load pckg */
var express = require('express');
var app = express();
var routes = require('./routes');
var hbs = require('express3-handlebars');

// Set handlebars as the default templating engine
// and use main.handlebars as our default layout.
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', routes.home);

app.listen(3000);
console.log('App running on port 3000');
var express=require('express');
var app=express();
var controller=require('./controller/controller');
app.set('view engine', 'ejs');  //set view engine
app.use('/assets', express.static('assets'))  //insert stylesheet
controller(app);
app.listen(2020)
console.log('You are listening to 2020 ')

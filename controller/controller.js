var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports=function(app){

app.get('/five-spice', function(req, res){
  res.render('home')
})

app.get('/sauces-and-pastes', function(req, res){
  res.render('saucesAndPastes')
})

app.get('/recipes', function(req,res){
  res.render('recipes')
})

app.get('/kungPaoChicken', function(req, res){
  res.render('Kungpao')
})

app.get('/MapoTofu', function(req,res){
  res.render('Mapo')
})

app.get('/Yuxiang', function(req, res){
  res.render('Yuxiang')
})

app.get('/SuanCaiYu', function(req, res){
  res.render('SuanCaiYu')
})

app.get('/GreenBeans', function(req, res){
  res.render('GreenBeans')
})

app.get('/SpicyChicken', function(req, res){
  res.render('SpicyChicken')
})

app.get('/Subscribe', function(req, res){
  res.render('subscribe')
})

app.post('/Subscribe', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('SubscribeSuccess', {data:req.body})
})

}

var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
	console.log('Home requested');
	res.render('index');//express is clever enough to figure out the content type
});
app.get('/contact',function(req,res){
	console.log('Requested contact');
	res.render('contact');
});

app.use('/assests',express.static('assests'));

//ROUTE PARAMETERS
app.get('/profile/:name',function(req,res){
	var data = {age: 21,job: 'Freelancer',hobbies: ['Eating','Reading','Coding	']};
	res.render('profile', {person: req.params.name, data: data});//render a view
	//the second parameter is an object with key value pairs which we pass to the html
});

//TEMPLATE ENGINES : helps to inject dynamic content into html from JS code



app.listen(8080);//listen to a port
console.log('Server listening on port 8080')
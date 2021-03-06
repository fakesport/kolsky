var	fort	= require('./lib/fort.js'),
	express	= require('express'),
	hbs	= require('express-handlebars').
		create({defaultLayout: 'main'}),
	app	= express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
	res.locals.shT = app.get('env') !== 'production' &&
		req.query.test === '1';
	next();
});
app.get('/', function(req, res){
	res.render('home');
});
app.get('/about', function(req, res){
	res.render('about', {
		c_fort:	fort.getF,
		pageTS: '/qa/test-A.js'
	});
});
app.get('/tours/hood-river', function(req, res){
	res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function(req, res){
	res.render('tours/request-group-rate');
});
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});
app.listen(app.get('port'), function(){
	console.log('Server is started on http://localhost:' +
		app.get('port') + '; press ^C to quit..');
});


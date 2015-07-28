module.exports = function(app, express) {
	app.use('/Bootstrap', express.static(__dirname + '/../node_modules/bootstrap/'));
	app.use('/Angular', express.static(__dirname + '/../node_modules/angular/'));
	app.use('/Style', express.static(__dirname + '/Style/'));
	app.use('/JS', express.static(__dirname + '/JS/'));
	app.use('/LIB', express.static(__dirname + '/../CustomLibraries/'));


	app.use('/TESTEEEEE', express.static(__dirname + '/../build/'));


	app.get('/componentes', function(req, res) {
		res.sendFile(__dirname + '/components.json');
	});

	app.get('/ComponentInfo/:id', function(req, res){
		var json = require('./components.json');
		res.json(json[req.params.id]);
	});

	app.get('/Component/:id', function(req, res) {
		var id = req.params.id;
		var path = __dirname + '/HTML';
		var json = require('./components.json');

		var redirecter = json[id];
		if (redirecter) {
			redirecter = redirecter.htmlPage;
			res.sendFile(path + '/' + redirecter);
		} else {
			// PROVISÓRIO, Implementar página de erro, com baixa prioridade
			res.send('<div>Ops! Parece que o componente que você tentou acessar não está disponível!</div>');
		}
	});

	app.get('/ComponentDisplayer', function(req, res){
		res.sendFile(__dirname + '/HTML/ComponentDisplayerTemplate.html');
	});
};
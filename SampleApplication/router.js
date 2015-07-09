module.exports = function(app, express) {
	app.use('/Bootstrap', express.static(__dirname + '/../node_modules/bootstrap/'));
	app.use('/Angular', express.static(__dirname + '/../node_modules/angular/'));
	app.use('/Style', express.static(__dirname + '/Style/'));
};
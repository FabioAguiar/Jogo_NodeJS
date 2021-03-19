module.exports = function(app){
	app.get('/', function(request, response){
		app.app.controllers.index.index(app, request, response);
	});

	app.post('/autenticar', function(request, response){
		app.app.controllers.index.autenticar(app, request, response);
	});
}
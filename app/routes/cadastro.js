module.exports = function(app){
	app.get('/cadastro', function(request, response){
        app.app.controllers.cadastro.cadastro(app, request, response);
	});

	app.post('/cadastrar', function(request, response){
        app.app.controllers.cadastro.cadastrar(app, request, response);
	});
}
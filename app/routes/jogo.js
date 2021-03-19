module.exports = function(app){
	app.get('/jogo', function(request, response){
		app.app.controllers.jogo.jogo(app, request, response);
	});

	app.get('/sair', function(request, response){
		app.app.controllers.jogo.sair(app, request, response);
	});
}


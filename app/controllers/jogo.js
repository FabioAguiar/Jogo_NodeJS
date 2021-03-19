module.exports.jogo = function(app, request, response){

    if(request.session.autorizado){
        response.render('jogo');
    }else{
        response.send('Usuário precisa fazer login');
    }

}

module.exports.sair = function(app, request, response){

    request.session.destroy( function(err){
        response.render("index", {validacao: {}});
    });

}
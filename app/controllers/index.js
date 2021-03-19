module.exports.index = function(app, request, response){
    response.render('index', {validacao: {}});
}

module.exports.autenticar = function(app, request, response){
    
    var dadosForm = request.body;

    request.assert('usuario', 'Usuário não deve ser vazio').notEmpty();
    request.assert('senha', 'Senha não pode ser vazia').notEmpty();

    var erros = request.validationErrors();

    if(erros){
        response.render("index", {validacao: erros});
        return;
    }

    var connection = app.config.dbConnection;
    var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm, request, response);

    //response.send('tudo ok sessão');

}


module.exports.cadastro = function(app, request, response){
    response.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(app, request, response){
    
    var dadosForm = request.body;

    request.assert('nome', 'Nome não pode ser vazio').notEmpty();
    request.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    request.assert('senha', 'Senha não pode ser vazia').notEmpty();
    request.assert('casa', 'Casa não pode ser vazia').notEmpty();

    var erros = request.validationErrors();

    if(erros){
        response.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    var connection = app.config.dbConnection;    
    var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm)

    response.send('Podemos cadastrar');
}


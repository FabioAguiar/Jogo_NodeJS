function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);

            mongoclient.close();
        });
    });
}

UsuariosDAO.prototype.autenticar = function(usuario, request, response){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            //collection.find({usuario: {$eq: usuario.usuario}, senha: {$eq: usuario.senha}});            
            collection.find(usuario).toArray(function(err, result){

                if(result[0] != undefined){
                    request.session.autorizado = true;

                    request.session.usuario = result[0].usuario;
                    request.session.casa = result[0].casa;                    
                }
    
                if(request.session.autorizado){
                    response.redirect("jogo");
                }else{
                    response.render('index', {validacao: {}});
                }
            });
            mongoclient.close();
        });
    });
}

module.exports = function(){
    return UsuariosDAO;
}
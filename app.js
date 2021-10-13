//----------------------------IMPORTAÇÕES / SETINGS----------------------------
const express = require ("express");

const handlebars = require("express-handlebars");

const bodyParser = require("body-parser")

const app = express();


app.use(bodyParser.urlencoded( {extended: false} ) );

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('view options', { layout: 'login' });

//--------------------------------ROTAS---------------------------------------

//get -> que vai renderizar a página de login, para que possa entrar no site
//"index" 
app.get('/', function (req, res) {
    res.render('home', {title:'Bem Vindo!', layout: 'login'});
});
//POST que vai renderizar a página 'user'
    //pegando o login || senha do corpo da requisição com o body-parser
    //condição pra testar a requisição
app.post('/login',function (req,res){
    let login = req.body.login;
    let senha = req.body.senha
    if(login === 'admin@sas.com' || senha === 'admin')
    {res.render('user')}
    
})
//get -> renderiza a página de 'feed'
app.get('/feed',function(req,res){
    res.render('feed')
})
//get -> renderiza a página 'sobre'
app.get('/sobre',function(req,res){
    res.render('sobre')
})
//get -> renderiza a página 'user'
app.get('/user',function(req,res){
    res.render('user')
})

//--------------------------------PORTA-----------------------------------------
app.listen(7000);
console.log('Servidor rodando na porta 7000')
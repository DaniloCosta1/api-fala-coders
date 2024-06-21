const express = require('express');//importando a biblioteca express
const app = express();//crio um a const, fazendo uma instancia para usar como objeto para ter acesso aos seus metodos

const mongoose = require('mongoose');//importando mogoose biblioteca para conexão ao bando de dados
mongoose.connect('mongodb://127.0.0.1:27017/test');//Aqui eu criei a conexão

const port = 3000//declaro a porta da minha maquina que  será usada

app.get('/', (req, res) => {
    res.send("Hello World!!!");
    console.log("funcionou")
});








//listen serve para ficar ativo escutando direto
app.listen(port, () =>{
    console.log("app running!!!");
});
const express = require('express');//importando a biblioteca express
const app = express();//crio um a const, fazendo uma instancia para usar como objeto para ter acesso aos seus metodos

const port = 3000//declaro a porta da minha maquina que  será usada

app.get('/', (req, res) => {
    res.send("Hello World!!!");
    
});

app.listen(port, () =>{
    console.log("app running!!!");
});
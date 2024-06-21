const express = require('express');//importando a biblioteca express
const app = express();//crio um a const, fazendo uma instancia para usar como objeto para ter acesso aos seus metodos
app.use(express.json());
const port = 3000//declaro a porta da minha maquina que  será usada


//instalei o mongoose (npm install mongoose)
const mongoose = require('mongoose');//importando mogoose biblioteca para conexão ao bando de dados

//criar o modelo de dados que vai pro db
const Film = mongoose.model('Film', {
        title: String,
        description: String,
        image_url: String,
        trailer_url: String
    });

//_________ Criar _____________
app.post("/", async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    await film.save();

    res.send(film);
})

//_________ Listar/mostrar ____________
app.get('/', async (req, res) => {
        const films = await Film.find();
        res.send(films);
        console.log("funcionou");
});

//_________ Apagar/deletar ___________
app.delete("/:id", async (req, res) => {
    const film = await Film.findByIdAndDelete(req.params.id)
    return res.send(film);
});


//_________ Atualizar/editar ____________
app.put("/:id", async (req, res) => {
    const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })

    return res.send(film);
})








//listen serve para ficar ativo escutando direto
app.listen(port, () =>{
    mongoose.connect('mongodb+srv://danilo:acesso@dandatabase.mzkvewm.mongodb.net/?retryWrites=true&w=majority&appName=dandatabase');//Aqui eu criei a conexão
    console.log("app running!!!");
});
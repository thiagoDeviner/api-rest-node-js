const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const res = require('express/lib/response');
const req = require('express/lib/request');

require("./models/Artigo");
const Artigo = mongoose.model('artigo')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Acessou o Middleware!");
    next();
});

mongoose.connect('mongodb://localhost/aPiRestJs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

app.get("/artigo", (req, res) => {    
    Artigo.find({}).then((artigo) => {
        return res.json(artigo);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum artigo foi encontrado!"
        })
    })
});

app.get("/artigo/:id", (req, res) => {

    Artigo.findOne({_id:req.params.id}).then((artigo) => {
        return res.json(artigo);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum artigo encontrado!"
        })
    })

})

app.post("/artigo", (req, res) => {
    const artigo = Artigo.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        })

        return res.status(400).json({
            error: false,
            message: "Artigo cadastrado com sucesso!"
        })
    })
});

app.put("/artigo/:id", (req, res) => {
    const artigo = Artigo.updateOne({_id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi editado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Artigo editado com sucesso!"
        });
    })
});

app.listen(8080, () =>{
    console.log("Servidor iniciado com sucesso na porta 8080: http://localhost:8080")
});
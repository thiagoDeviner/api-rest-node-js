const express = require('express');

const mongoose = require('mongoose');

const res = require('express/lib/response');
const req = require('express/lib/request');

require("./models/Artigo");
const Artigo = mongoose.model('artigo')

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/aPiRestJs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro. Conexão com MongoDB não foi realizada com sucesso!");
});

app.get('/', (req, res) => {
    return res.json({titulo: "Como criar API"});
});

app.post("/artigo", (req, res) => {
    return res.json({titulo: "Como criar API 2"});
});

app.listen(8080, () =>{
    console.log("Servidor iniciado com sucesso na porta 8080: http://localhost:8080")
});
const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({titulo: "Como criar API"});
});

app.listen(8080, () =>{
    console.log("Servidor iniciado com sucesso na porta 8080: http://localhost:8080")
});
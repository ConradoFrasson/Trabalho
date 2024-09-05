const express = require('express');
const app = express();
const port = 30089;
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const {listar} = require('./aluguel/listar');
app.get('/aluguel', listar);

const {alugar} = require('./aluguel/alugar');
app.post('/aluguel', alugar);

const {deletar} = require('./aluguel/deletar');
app.delete('/aluguel/:id', deletar);

const {atualizar} = require('./aluguel/atualizar');
app.put('/aluguel/:id', atualizar);

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
    });
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:$
    {port}`);
});

const adicionarLivro = require('./livros/adicionarLivro');
app.post('/livros', adicionarLivro);

const listarLivros = require('./livros/listarLivros');
app.get('/livros', listarLivros);

const atualizarLivro = require('./livros/atualizarLivro');
app.put('/livros/:id', atualizarLivro);

const deletarLivro = require('./livros/deletarLivro');
app.delete('livros/:id', deletarLivro);

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


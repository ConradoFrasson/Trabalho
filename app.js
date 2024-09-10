const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const {criarEstudante} = require('./estudantes/adicionarEstudante');
app.post('/estudantes', criarEstudante);

const {listarEstudantes} = require('./estudantes/listarEstudantes');
app.get('/estudantes', listarEstudantes);

const {atualizarEstudante} = require('./estudantes/atualizarEstudante');
app.put('/estudantes/:id', atualizarEstudante);

const {deletarEstudantes} = require('./estudantes/deletarEstudante');
app.delete('/estudantes/:id', deletarEstudantes);

const {adicionarLivro} = require('./livros/adicionar');
app.post('/livros', adicionarLivro);

const {listarLivros} = require('./livros/listar');
app.get('/livros', listarLivros);

const {atualizarLivro} = require('./livros/atualizar');
app.put('/livros/:id', atualizarLivro);

const {deletarLivro} = require('./livros/deletar');
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


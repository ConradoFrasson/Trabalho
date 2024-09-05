# TRABALHO

## INTEGRANTES E O QUE FIZERAM
A divisão da equipe ficou assim:

Murilo: Escolheu e fez a parte dos estudantes.
Conrado: Escolheu e fez a parte dos livros.
Gabriel Lazarini: Escolheu e fez a parte do aluguel.


### DESCRIÇÃO

O trabalho em questão é sobre o aluguel de livros, precisando conter as informações sobre Estudante que alugou, os livros que foram alugados, a data do aluguel e a data da devolução do livro.

As informações em questão são essas:

#### Livro:
• id

• título

• autor

• ano

• gênero

#### Estudante: 
• id

• nome

• matrícula

• curso

• ano

#### Aluguel:

• id

• idLivro

• idEstudante

• dataAluguel

• dataDevolucao

A seguir estará representado as partes do código de cada um dos tes aspectos citados em questão divididos em adicionar, listar, atualizar e deletar:

### Livros

Essa é a constituição central do código em relação a parte dos livros, com cada opção sendo explicada a seguir:

const express = require('express');
const app = express();
const port = 3000;

const adicionarLivro = require('./livros/adicionarLivro');
app.post('/livros', adicionarLivro);

const listarLivros = require('./livross/listarLivros');
app.get('/livros', listarLivros);

const atualizarLivro = require('./livros/atualizarLivro');
app.put('/livros/:id', atualizarLivro);

const deletarLivro = require('./livros/deletarLivro');
app.delete('livros/:id', deletarLivro);

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
    });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:$
    {port}`);
});

#### ADICIONAR

A parte de adicionar dos livros serve para adicionar um novo livro ao sistema: 

const {livros} = require('../data');

function adicionarLivro(req, res) {
    console.log(req.body);
    const novoLivro = {
        id: livros.length + 1,
        nome:req.body.titulo
    };
    livros.push(novoLivro)
    res
    .status(201)
    .send({message: 'Livro adicionado com sucesso!', Livros: novoLivro});
}

module.exports = adicionarLivro

#### LISTAR

A parte de listar tem como função listar todos os livros presentes no sistema: 

const {livros} = require('../data');

const listarLivros = (req, res) => {
    res.status(200).send(livros);
}

module.exports = listarLivros;

#### ATUALIZAR

A opção de atualizar serve para atualizar as informações de livros cadastrados no sistema:

const {livros} = require('../data');

const atualizarLivro = (req, res) => {
    const {id} = req.params;
    const novoTitulo = req.body.titulo;

    const livro = livros.find((b) => b.id == id);

    if (!livro) {
        return res.status(404).send({message: 'Livro não encontrado'});
    }
    livro.titulo = novoTitulo;
    res.status(200).send({
        message: 'Livro atualizado.',
        livro:livro
    });
}

module.exports = atualizarLivro

#### DELETARt

A parte de deletar acaba removendo o livro selecionado do sistema:

const { livros} = require('../data')

const deletarLivro = (req, res) => {
    const { id } = req.params;
    const index = livros.findIndex((b) => b.id == id);
    
    if (index === -1) {
    return res.status(404).send('Livro não encontrado!');
    }
    
    const livroDeletado = livros.splice(index, 1)[0];
    
    res.status(200).send({
    message: 'Livro deletado com sucesso!',
    livro: livroDeletado
    })
    }
    
    module.exports = deletarLivro;
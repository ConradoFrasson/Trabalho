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

### Estudantes

Explicarei tudo relevante sobre os estudantes, a seguir.

#### ADICIONAR

##### Serve para você adicionar um novo estudante ao sistema.

    const estudantes = require('../data');

    function criarEstudante(req, res) {
    console.log(req.body);
    const novoEstudante = {
    id: estudantes.length + 1,
    nome: req.body.titulo,
    matricula: req.body.matricula,
    curso: req.body.curso,
    ano: req.body.curso
    };
    estudantes.push(novoEstudante)
    res
    .status(201)
    .send({message: 'Baralho criado com sucesso!', estudantes: novoEstudante});
    }

    module.exports = criarEstudante

#### ATUALIZAR

##### Serve para você atualizar um estudante já existente.

    const estudantes = require('../data');

const atualizarEstudante = (req, res) => {
    const { id } = req.params;
    const novoNome = req.body.nome
    const novaMatricula = req.body.novaMatricula
    const novoCurso = req.body.curso
    const novoAno = req.body.ano

    const estudante = estudantes.find((b) => b.id == id);

    if (!estudante) {
        return res.status(404).send({ message: 'Estudante não encontrado' });
    }

        estudante.nome = novoNome
        estudante.matricula = novaMatricula
        estudante.curso = novoCurso
        estudante.ano = novoAno
        res.status(200).send({
            message: 'Estudante atualizado com sucesso!',
            estudante: estudante
    });
    }

    module.exports = atualizarEstudante;

#### DELETAR

##### Serve para você deletar um estudante ja esxistente.

    const estudantes = require('../data')

const deltarEstudante = (req, res) => {
    const { id } = req.params;
    const index = estudantes.findIndex((b) => b.id == id);

    if (index === -1) {
        return res.status(404).send('Estudante não encontrado!');
    }

    const estudanteDeletado = estudantes.splice(index, 1)[0];

    res.status(200).send({
        message: 'Estudante deletado com sucesso!',
        estudante: estudanteDeletado
    })
}

module.exports = deltarEstudante;

#### LISTAR

##### Serve para você é para você listar todos os estudantes

    const estudantes = require('../data');

    const listarEstudantes = (req, res) => {
    res.status(200).send(estudantes);
    };

    module.exports = listarEstudantes;


### Aluguel

Explicação das funções adicionar, alugar, atualizar e deletar alugueis do código em questão 

#### ALUGAR

##### Serve para você adicionar um novo aluguel de um livro ao sistema.

    const {alugueis} = require('../data');
    function alugar(req, res) {
        console.log(req.body);
        const novoAluguel = {
            id: alugueis.length + 1,
            idLivro: req.body.idLivro,
            idEstudante: req.body.idEstudante,
            dataAluguel: req.body.dataAluguel
        }
        alugueis.push(novoAluguel) 
        res
        .status(201)
        .send({message: 'Aluguel cadastrado com sucesso!', aluguel: novoAluguel});
    }
    module.exports = {alugar};



#### ATUALIZAR

##### Serve para você atualizar o aluguel de um livro já existente.

    const { alugueis } = require('../data');

    const atualizar = (req,res) => {
        // Extrai o ID dos parâmetros da URL
        const { id } = req.params;
        const novaDataAluguel = req.body.dataAluguel;
        const novaDataDevolucao = req.body.dataDevolucao;

        // Encontar o aluguel pelo ID
        const aluguel = alugueis.find((b) => b.id == id);

        if (!aluguel) {
            return res.status(404).send({message: 'Aluguel não encontrado'})
        }

        // Atualiza as informações e envia uma resposta de sucesso 
        aluguel.dataAluguel = novaDataAluguel;
        aluguel.dataDevolucao = novaDataDevolucao;
        res.status(200).send({
            message: 'Aluguel atualizado com sucesso!',
            aluguel: aluguel
        });
    }

    module.exports = { atualizar }

#### DELETAR

##### Serve para você deletar um aluguel ja esxistente.

    const { alugueis } = require('../data');

    const deletar = (req, res) => {
        // Extrai o ID dos parâmetros da URL
        const { id } = req.params;

        // Encontar o aluguel pelo ID
        const index = alugueis.findIndex((b) => b.id == id);

        if ( index === -1) {
            return res.status(404).send('Aluguel não encontrado!');
        }
        // Deleta o aluguel e retorna uma array com o elemento removido
        const aluguelDeletado = alugueis.splice(index, 1)[0];
        res.status(200).send({
            message: 'Aluguel deletado com sucesso!',
            aluguel: aluguelDeletado
        })
    }

    module.exports = {deletar}

#### LISTAR

##### Serve para listar os alugueis existentes no servidor

    const { alugueis } = require('../data');

    const listar = (req, res) => {
        res.status(200).send(alugueis);
    }

    module.exports = {listar};
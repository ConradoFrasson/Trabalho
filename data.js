let estudantes = [
    {
        id: 1,
        nome: 'Murilo',
        matricula: '124153',
        curso: 'Programação',
        ano: 2024
    }
]

let livros = [
    {
        id: 1,
        titulo: 'Dom Quixote',
        autor: 'Miguel de cervantes',
        ano: 1605,
        genero: 'Romance'

    }
]

let alugueis = [
    {
        id: 1,
        idLivro: 1,
        idEstudante: 1,
        dataAluguel: '2024-08-2',
        dataDevolucao: '2024-08-10'
    }
]

module.exports = {
    estudantes,
    livros,
    alugueis
}
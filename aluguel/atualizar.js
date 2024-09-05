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
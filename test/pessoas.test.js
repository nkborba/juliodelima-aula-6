const assert = require("assert")
const { expect } = require('chai');

const { getPessoa, getTodasPessoas } = require('../src/pessoas')


describe('Dados individuais de uma pessoa', () => {
    const pessoa = getPessoa('123456789')

    it('deve conter apenas uma pessoa com o cpf informado', () => {     
        expect(pessoa).to.have.lengthOf(1)
    });
    it('deve retornar o nome da pessoa', () => {
        expect(pessoa[0].nome).to.equal('Anakin Skywalker')
    });
    it('deve retornar o mesmo cpf informado', () => {     
        assert.equal(pessoa[0].cpf, '123456789')
    });
    it('deve retornar as frutas favoritas da pessoa', () => {     
        assert.deepEqual(pessoa[0].frutasFavoritas, ['maçã', 'abacaxi'])
    });

});

describe('Validade da base de dados de pessoas', () => {
    const todasPessoas = getTodasPessoas()
    const pessoa1 = getPessoa('123456789')
    const pessoa2 = getPessoa('987654321')

    it('a lista contendo todas as pessoas deve conter mais de uma pessoa', () => {
        expect(todasPessoas).to.have.lengthOf.at.least(2)
    });
    it('os dados de uma segunda pessoa devem ser diferentes dos dados da primeira pessoa', () => {
        expect(pessoa1).to.not.deep.equal(pessoa2)
    });
});



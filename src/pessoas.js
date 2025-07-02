const pessoas = [
  {
    nome: 'Anakin Skywalker',
    cpf: '123456789',
    frutasFavoritas: ['maçã', 'abacaxi'],
  },
  {
    nome: 'Mestre Yoda',
    cpf: '123456788',
    frutasFavoritas: ['goiaba', 'amarula', 'fruta de dagobah'],
  },
  {
    nome: 'Senador Palpatine',
    cpf: '987654321',
    frutasFavoritas: ['melancia sem sementes', 'manga'],
  },
  {
    nome: 'Leia Organa',
    cpf: '987654321',
    frutasFavoritas: ['mamão', 'pitaya'],
  },
  {
    nome: 'Obi-JUAN-Kenobi',
    cpf: '987654332',
    frutasFavoritas: ['avocado', 'tamarindo'],
  }
]

function getTodasPessoas() {
  return pessoas
}

function getPessoa(cpf) {
  return pessoas.filter((pessoa) => pessoa.cpf === cpf)
}

module.exports = { getPessoa, getTodasPessoas }
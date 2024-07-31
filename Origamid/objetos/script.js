// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
    nome: 'Anthony',
    sobreNome: 'Rocha',
    idade: 18
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobreNome}`
}

console.log(dados.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000

  console.log(carro.preco)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  var cachorro = {
    animal: 'cachorro',
    cor: 'preto',
    raca: 'labrador',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'latiu'
        }
        else {
            return 'não latiu'
        }
    }
  }
  
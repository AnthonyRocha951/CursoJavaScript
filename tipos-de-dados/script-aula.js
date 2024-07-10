var nome = 'Anthony'
var idade = 18
var simbolo = Symbol()
console.log(typeof simbolo)

var nome = 'Anthony'
var sobrenome = 'Rocha'
var nomeCompleto = nome + ' ' + sobrenome

console.log(nomeCompleto)

var gols = 1000
var frase = nomeCompleto + ' fez ' +gols + ' gols'
console.log(typeof frase)

var ano = '2018' // se colocar aspas no numero, ele vira uma String
var mes = 8
console.log(ano + mes)


var melhor = 'teste'  // nao pode usar "" dentro de "", e vice versa
var frase1 = "Esse é o \"melhor\" jogo"
console.log(frase1)

var frase2 = `${nomeCompleto} fez ${gols * 2} gols`
console.log(frase2)


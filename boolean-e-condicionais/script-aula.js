var possuiGraduacao = false
var possuiDoutorado = true

if(possuiGraduacao) {
    console.log('É verdadeiro')
}

else if(possuiDoutorado) {
    console.log('Possui Doutorado')
}

else {
    console.log('Não Possui nada')
}

var nome = '10kg' / 10

if(nome) {
    console.log(nome)
}

else {
    console.log('Nome não existe')
}

if(!possuiGraduacao) {
    console.log(possuiGraduacao)
    console.log('Não possui graduaçao') // !! pra verificar se é true ou false
}

var x = 10

console.log(x !== 14)

if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro')
}
else {
    console.log('Falso')
}


var condicional = (5 - 10) && (5 + 5)
if(condicional) {
    console.log('Verdadeiro', condicional)
}
else {
    console.log('Falso')
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2)
console.log(condicional2)


var corFavorita = 'Azul'

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu')
        break
    case 'Vermelho':
        console.log('Olhe para as rosas')
        break
    case 'Amarelo':
        console.log('Olhe para o sol')
        break
    default:
        console.log('Feche os olhos')
}
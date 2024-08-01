var numero = 20
var numero2 = 10

// numero += 10; numero = numero + 10;

numero += numero2

console.log(numero)


var idade = 18
var naoEstaDirigindo = true

var podeBeber
podeBeber = (idade >= 18 && naoEstaDirigindo) ? `Pode beber` : `Não pode beber`

console.log(podeBeber)


var possuiHabilitacao = false

if(possuiHabilitacao)
    console.log('Liberado para dirigir')
else 
    console.log('Não pode dirigir')
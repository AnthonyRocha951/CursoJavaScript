// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var scroll2 = 500

scroll += scroll2

console.log(scroll)


// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;


var darCredito = (possuiCarro === true && possuiCasa === true) ? true : false
// pode tambem ser feito dessa maneira: var darCredito = (possuiCarro && possuiCasa) 

console.log(darCredito)
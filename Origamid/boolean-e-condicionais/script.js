// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 18
var idadeTio = 32

if(idade) {
    console.log('É maior')
}

else if (minhaIdade === idadeTio) {
    console.log('É igual')
}

else {
    console.log('É menor')
}

// Qual valor é retornado na seguinte expressão? NaN
var expressao = (5 - 2) && (5 - 's') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; // é indefinida, mas é false
var dinheiroNaConta = 0; //true

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes')
}

else {
    console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console? falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
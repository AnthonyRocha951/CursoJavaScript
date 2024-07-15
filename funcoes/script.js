function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(10))

function pi() {
  return 3.14
}

var total = 5 * pi()

console.log(pi())


function imc(peso, altura) {
  var imc = peso / (altura * altura)
  return imc
}

console.log(imc(80, 1.80))


function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu'
  }

  else if (cor === 'verde') {
    return 'Eu gosto de mato'
  }

  else if (cor === 'amarelo') {
    return 'Eu gosto do sol'
  }

  else {
    return 'Eu não gosto de cores'
  }
}

console.log(corFavorita('azul'))



function mostraConsole() {
  console.log('Clicou')
}

addEventListener('click', mostraConsole)
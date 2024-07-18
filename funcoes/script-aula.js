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
  
  
  function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
  }
  
  imc2(20, 1.8) // undefined
  
  console.log(undefined)
  
  
  function terceiraIdade(idade) {
  
    if (typeof idade !== 'number') {
      return 'preencha com um número'
    }
  
    else if (idade >= 60) {
      return true
    }
  
    else {
      return false
    }
  
  }
  
  console.log(terceiraIdade(59))
  
  var totalPaises = 193
  
  function faltamVisitar(paisesVisitados) {
    return `ainda faltam ${totalPaises - paisesVisitados} paises para ser visitar`
  }
  
  console.log(totalPaises)
  
  var profissao = 'Dev'
  
  function dados() {
    var nome = 'Anthony'
    var idade = 18
    function outrosDados() {
      var endereco = 'São Paulo'
      var idade = 28
      return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
  }
  
  console.log(dados())
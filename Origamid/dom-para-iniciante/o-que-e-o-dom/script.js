// Retorne o url da página atual utilizando o objeto window

const url = window.location.href

console.log(url)


// Seleciona o primeiro elemento da página que
// possua a classe ativo

const h1Seletor = document.querySelector('.ativo')

// Retorne a linguagem do navegador

const linguagem = window.navigator.language

// Retorne a largura da janela 

const altura = window.innerHeight
const largura = window.innerWidth

console.log(`A altura e largura da janela é ${altura} x ${largura}`)

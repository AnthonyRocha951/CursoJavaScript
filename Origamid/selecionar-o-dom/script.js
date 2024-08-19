const animais = document.getElementById('animais') // seleciona um id
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section') //seleciona uma class
console.log(gridSection[1])

const ul = document.getElementsByTagName('ul') //selecionar uma tag
console.log(ul[1])

const primeiraLi = document.querySelector('li') // o querySelector sempre vai retornar o primeiro, ele nao retorna todos.
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]') // isso é pra selecionar algum link interno. ^ significa que começa com "#"
console.log(linkInterno)

// lembrando que voce tambem pode colocar metodos e propriedades como: .length

const animaisImg = document.querySelectorAll('.animais img') // o querySelectorAll seleciona todos os elementos, por isso se chama ALL //estou pegando todas as img que estao na class .animais
console.log(animaisImg[1])
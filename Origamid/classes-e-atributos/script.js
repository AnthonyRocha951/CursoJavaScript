// Adicione a classe ativo a todos os itens do menu

const itenMenu = document.querySelectorAll('.menu a')

itenMenu.forEach((item) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itenMenu.forEach((item) => {
  item.classList.remove('ativo')
})

itenMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt


const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(img, possuiAtributo)
})

// Modifique o href do link externo no menu

const link = ducument.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com/')

console.log(link)


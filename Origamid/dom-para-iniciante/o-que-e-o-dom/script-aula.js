

const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/index.html') {
  console.log('corresponde!')
} else {
  console.log('não corresponde')
}

const h1Selecionado = document.querySelector('h1')

const h1Classes = h1Selecionado.classList

function clicou() {
  console.log('Clicou em:', h1Selecionado.innerHTML)
}

h1Selecionado.addEventListener('click', clicou)
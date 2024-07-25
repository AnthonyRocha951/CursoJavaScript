var pessoa = {
    nome: 'Anthony',
    idade: 18,
}

console.log(pessoa.idade, pessoa.nome)

// var quadrado = { TAMBEM PODE NAO USAR O function
//     lados: 4,
//     area(lado) {
//         return lado * lado
//     },
//     perimetro(lado) {
//         return this.lados * lado
//     },
// } 

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado
    },
    cinco() {
        return 5
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
console.log(quadrado.cinco())

console.log(Math.random())
console.log(Math.E)
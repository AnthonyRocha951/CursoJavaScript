'use strict'

var carro = 'Fusca'

function mostrarCarro() {
    console.log(carro)
}

mostrarCarro()

console.log(carro)

if(false) {
    const mes = 'Dezembro'
    console.log(mes)
 }

//  console.log(mes) 

 {
    var carro2 = 'Fusca 2'
    const ano = 2018
 }

 console.log(carro2)
//  console.log(ano) 


var i = 50

 for (let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
 }
 console.log(i* 10) 


 const semana = 'Sexta'

 console.log(semana)


 const data = {
    ano: 2018,
    mes: 'Dezembo',
    dia: 26,
 }

 data.dia = 12

 console.log(data.dia)
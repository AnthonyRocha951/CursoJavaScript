

// var ultimoItem = videoGames.pop()

for (var numero = 1; numero <= 4; numero++) {
    console.log(numero)
}

var i = 0
while (i < 10) {
    console.log(i)
    i = i + 5
}

var videoGames = ['PS2', 'PS4', 'XBOX360', '3DS']

for(var item = 0; item <= videoGames.length; item++) {
    console.log(videoGames[item])
}

var videoGames = ['PS2', 'PS4', 'XBOX360', '3DS']

for(var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i])
    if(videoGames[i] === 'PS4') {
        break
    }
}


var frutas = ['Banana', 'Uva', 'Pera', 'Maçã', 'Abacaxi']

frutas.forEach(function(item, index) {
    console.log(item, index)
})


var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

// const imgs = document.querySelectorAll('img')


// imgs.forEach(function(item, index, array){
//     // console.log(item, index, array)
// })

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item, index, array){
// //   console.log(item, index, array);
// });

const imgs = document.querySelectorAll('img')


// imgs.forEach((item, index) => {
//      console.log(item, index)
// })

let i = 0

imgs.forEach(function(){
    console.log(i++)
})  // mesmos codigos, so que verçoes mais faceis

imgs.forEach(() => console.log(i++))
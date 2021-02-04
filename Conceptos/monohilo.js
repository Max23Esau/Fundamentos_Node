console.log('Hola mundo de Node.js');

let i = 0;
setInterval(function () {
  console.log(i);

  if (i === 5) {
    console.log('Error provocado');
    // var a = 3 + z;
  }
  i++;
}, 1000);

console.log('Segundo proceso');

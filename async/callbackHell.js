function hola(name, miCallback) {
  setTimeout(function () {
    console.log('Hola ' + name);
    miCallback(name);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log('Bla bla bla');
    callbackHablar();
  }, 1000);
}

function adios(name, otroCallback) {
  setTimeout(function () {
    console.log('Adios ' + name);
    otroCallback();
  }, 1500);
}

function conversacion(name, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(name, --veces, callback);
    });
  } else {
    adios(name, callback);
  }
}

console.log('Iniciando Proceso');
hola('Esau', function (name) {
  conversacion(name, 10, function () {
    console.log('\nFin de la transmision....');
  });
});

// hola('Esau', function (name) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(name, function () {
//           console.log('\nFin de la transmision....');
//         });
//       });
//     });
//   });
// });

function soyAsincrona(miCallback) {
  setTimeout(function () {
    console.log('Estoy siendo asíncrona');
    miCallback();
  }, 1000);
}

console.log('Iniciando proceso....');

soyAsincrona(function () {
  console.log('Terminando proceso....');
});

//---------------------------------------------------------------------------------------------

function hola(name, miCallback) {
  setTimeout(function () {
    console.log('Este es el callback de ' + name);
    miCallback(name);
  }, 1000);
}

function adios(name, otroCallback) {
  setTimeout(function () {
    console.log('El callback de ' + name + ' se despide.');
    otroCallback(/*console.log('\nFin de la transmision....')*/);
  }, 1500);
}

hola('Esau', function (name) {
  adios(name, function () {
    console.log('\nFin de la transmision....');
  });
});

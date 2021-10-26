function primero() {
  //Simula petición a un servidor con muchos datos
  setTimeout(function () {
    console.log('Soy el 1');
  }, 1000);
}

function segundo() {
  console.log('Soy el 2');
}

function tercero() {
  console.log('Soy el 3');
}

primero();
segundo();
tercero();

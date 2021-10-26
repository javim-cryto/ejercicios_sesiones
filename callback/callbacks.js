setTimeout(function () {
  console.log('Soy el 1');
  setTimeout(function () {
    console.log('Soy el 2');
    setTimeout(function () {
      console.log('Soy el 3');
      setTimeout(function () {
        console.log('Soy el 4');
        // Podría a ver más llamadas asíncronas
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

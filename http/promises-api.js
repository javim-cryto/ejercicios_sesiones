const https = require('https');

const obtenerPersonajes = () => {
  return new Promise((resolve, reject) => {
    https
      .get(`https://swapi.dev/api/people/`, (response) => {
        let datos = '';
        response.on('data', (chunk) => {
          datos += chunk;
        });

        response.on('end', () => {
          datos = JSON.parse(datos);
          resolve(datos);
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });
};

const init = async () => {
  const { results } = await obtenerPersonajes();
  results.forEach((character) => {
    console.log(`${character.name} - ${character.height}/${character.mass}`);
  });
};

init();

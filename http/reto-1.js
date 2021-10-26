const https = require('https');

const obtenerPokemon = (pokemon) => {
  return new Promise((resolve, reject) => {
    https
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`, (response) => {
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

const pokemones = ['bulbasaur', 'mew'];

const atraparPokemones = (pokemones) => {
  // Pokemon atrapado / Nombre del pokemon / Types (gross:poison)
  pokemones.forEach(async (pokemon) => {
    const { name, types } = await obtenerPokemon(pokemon);
    console.log(`Pokemon atrapado / ${name} / Types: (${types[0].type.name})`);
  });
};

atraparPokemones(pokemones);

const https = require('https');

function obtenerPokemon(pokemon) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (resp) => {
        let datos = '';

        resp.on('data', (chunk) => {
          datos += chunk;
        });

        resp.on('end', () => {
          datos = JSON.parse(JSON.stringify(datos));
          resolve(datos);
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });
}

const pokemones = [
  'bulbasur',
  'charmader',
  'squirtle',
  'pidgey',
  'pikachu',
  'rattata',
  'alakazam',
  'onix',
  'mew',
  'wigglytuff',
];

async function atraparPokemones(pokemones) {
  try {
    let resultados = await Promise.all(
      pokemones.map(async (pokemon) => {
        let resultado = await obtenerPokemon(pokemon);
        console.log(`Pokemon atrapado ${pokemon}`);
        return resultado;
      })
    );
    return resultados;
  } catch (error) {
    console.error('Error', error);
  }
}

atraparPokemones(pokemones).then();

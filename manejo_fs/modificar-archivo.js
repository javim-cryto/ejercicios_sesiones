const fs = require('fs');
const path = require('path');

fs.appendFile(
  path.join(__dirname, 'files', 'ejemplo.txt'),
  '\nEsto es una nueva linea',
  { encoding: 'utf-8'},
  (err) => {
    if(err) throw err;
    console.log('Archivo actualizado')
  }
)
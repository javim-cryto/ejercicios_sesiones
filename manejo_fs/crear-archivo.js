const fs = require('fs');
const path = require('path');

fs.writeFile(
  path.join(__dirname, 'files', '/ejemplo.txt'),
  'Este es el contenido de mi archivo',
  { encoding: 'utf-8' },
  (err) => {
    if (err) throw err;
    console.log('writeFile:', 'Archivo creado!');
  }
);

const fs = require('fs');

fs.writeFile(path.join(__dirname, '/ejemplo_1.txt'), 'Este es el contenido de mi archivo', {encoding: 'utf-8'}, (err) => {
  if (err) throw err;
  console.log('writeFile:','Archivo creado!');
});
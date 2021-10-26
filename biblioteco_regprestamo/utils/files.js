const fs = require('fs');
const path = require('path');

// @param filename Filename: Nombre de como quiero que se llame el archivo
// @param type Type: Book, User, Author, etc.
// @param data Contenido a almacenar dentro del archivo
const writeFile = (filename, type, data) => {
  return new Promise((resolve, reject) => {
    // book/el-llano-en-llamas
    // user/coderdiaz
    // user/pepe
    fs.writeFile(
      path.join(
        __dirname,
        '../',
        'data',
        type.toLowerCase(),
        `${filename}.json`
      ),
      data,
      { encoding: 'utf-8' },
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};

// @param type Type: Book, User, Author, etc.
const readDirData = (type) => {
  return new Promise((resolve, reject) => {
    fs.readdir(
      path.join(__dirname, '../data', type),
      { encoding: 'utf-8' },
      (err, files) => {
        if (err) reject(err);
        resolve(files);
      }
    );
  });
};

// @param filename Filename: Nombre de como quiero que se llame el archivo
// @param type Type: Book, User, Author, etc.
const readFile = (filename, type) => {
  return new Promise((resolve, reject) => {
    // book/el-llano-en-llamas
    // user/coderdiaz
    // user/pepe
    fs.readFile(
      path.join(__dirname, '../', 'data', type.toLowerCase(), filename),
      { encoding: 'utf-8' },
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
};

module.exports = {
  writeFile,
  readDirData,
  readFile,
};

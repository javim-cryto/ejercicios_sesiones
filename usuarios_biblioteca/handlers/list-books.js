const { readDirData, readFile } = require('../utils/files');

const listBooks = async () => {
  try {
    const files = await readDirData('book');
    files.forEach(async (file) => {
      let book = await readFile(file, 'book');
      book = JSON.parse(book);

      // Formatting
      console.log(`\n==========================================\n`);
      console.log(`Nombre del libro: ${book.name}`);
      console.log(`ISBN: ${book.isbn}`);
      console.log(`Nombre del autor: ${book.author}`);
      console.log(`Edición: ${book.edition}`);
      console.log(`\n==========================================\n`);
    });
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = listBooks;

const { readDirData, readFile } = require('../utils/files');

const listAuthors = async () => {
  try {
    const files = await readDirData('author');
    files.forEach(async (file) => {
      let author = await readFile(file, 'author');
      author = JSON.parse(author);

      // Formatting
      console.log(`\n==========================================\n`);
      console.log(`Nombre del author: ${author.name}`);
      console.log(`Identificador: ${author.identifier}`);
      console.log(`\n==========================================\n`);
    });
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = listAuthors;

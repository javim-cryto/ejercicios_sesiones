const { readDirData, readFile } = require('../utils/files');

let listAuthors = async () => {
  try {
    const files = await readDirData('author');
    files.forEach(async (file) => {
      let author = await readFile(file, 'author');
      author = JSON.parse(author);
      // console.log(author);
    });
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = listAuthors;

const inquirer = require('inquirer');
const { writeFile } = require('../utils/files');
const kebabcase = require('../utils/kebab');
const { readDirData, readFile } = require('../utils/files');
//const listAuthors = require('../handlers/show-author');
async function listAuthor() {
  const files = await readDirData('author');
  files.forEach(async (file) => {
    let author = await readFile(file, 'author');
    author = JSON.parse(author);
    // const listauthor = console.log(author);
  });
  return author.name;
}
const createBook = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Introduce el nombre del libro:',
      },
      {
        type: 'input',
        name: 'isbn',
        message: 'Identificador del libro (ISBN):',
      },
    ]);

    const listA = listAuthor();
    console.log(listA);
    const answers2 = await inquirer.prompt([
      {
        type: 'list',
        name: 'author',
        message: 'Selecciona el autor del libro: ',
        choices: ['1', '2'],
      },
      {
        type: 'input',
        name: 'edition',
        message: 'Año de edición:',
      },
    ]);
    const slug = kebabcase(answers.name);
    answers.slug = slug; // Assign new property to current `answers` object

    await writeFile(slug, 'book', JSON.stringify(answers));
    console.log('Libro registrado correctamente');
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = createBook;

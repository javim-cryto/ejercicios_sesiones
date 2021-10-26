const inquirer = require('inquirer');
const { writeFile } = require('../utils/files');

const createAuthor = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Introduce el nombre del Autor:',
      },
      {
        type: 'input',
        name: 'identifier',
        message: 'Identificador del Autor:',
      },
    ]);

    await writeFile(answers.identifier, 'author', JSON.stringify(answers));
    console.log('Autor registrado correctamente');
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = createAuthor;

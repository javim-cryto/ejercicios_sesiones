const inquirer = require('inquirer');
const { writeFile } = require('../utils/files');
const kebabcase = require('../utils/kebab');

inquirer.registerPrompt('date', require('inquirer-date-prompt'));
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'));

const registerLoan = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'user',
        message: 'Introduce el nombre del usuario:',
      },
      {
        type: 'list',
        name: 'book',
        message: 'Selecciona el libro para reservar):',
        choices: ['Harry Potter y La Piedra Filosofal', 'Orgullo y Prejuicio'],
      },
      {
        type: 'date',
        name: 'date',
        message: 'Ingresa la fecha de devolución: ',
      },
    ]);

    function getRandomInt() {
      const number = Math.floor(Math.random() * (3000 - 1)) + 1;
      return number;
    }

    const claveReservacion = answers.user + getRandomInt();
    const slug = kebabcase(answers.book);
    answers.slug = slug; // Assign new property to current `answers` object

    await writeFile(claveReservacion, 'register', JSON.stringify(answers));
    console.log('Prestamo registrado correctamente');
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = registerLoan;

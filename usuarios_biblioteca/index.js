const inquirer = require('inquirer');
const enableAction = require('./utils/engine');

const init = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: '¿Qué quierer hacer hoy?',
        choices: [
          { name: 'Crear una cuenta', value: 1 },
          { name: 'Iniciar sesión', value: 2 }, // TODO
          { name: 'Crear autor', value: 3 },
          { name: 'Ver autores', value: 4 },
          { name: 'Registrar un nuevo libro', value: 5 },
          { name: 'Ver libros', value: 6 },
          { name: 'Registrar prestamo', value: 7 }, // TODO
        ],
      },
    ]);

    enableAction(answers.action);
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

init();

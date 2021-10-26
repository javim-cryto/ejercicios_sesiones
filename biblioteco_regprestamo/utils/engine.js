const createAccount = require('../handlers/create-account');
const createAuthor = require('../handlers/create-author');
const createBook = require('../handlers/create-book');
const listBooks = require('../handlers/list-books');
const registerLoan = require('../handlers/registrar-prestamo');

const enableAction = (action) => {
  switch (action) {
    case 1:
      createAccount();
      break;
    case 2:
      break;
    case 3:
      createAuthor();
      break;
    case 4:
      showAuthors();
      break;
    case 5:
      createBook();
      break;
    case 6:
      listBooks();
      break;
    case 7:
      registerLoan();
      break;
    default:
      console.log('No se ha seleccionado ninguna acción');
  }
};

module.exports = enableAction;

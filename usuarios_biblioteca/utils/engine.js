const createAccount = require('../handlers/create-account');
const createAuthor = require('../handlers/create-author');
const createBook = require('../handlers/create-book');
const listBooks = require('../handlers/list-books');
const listAuthors = require('../handlers/list-authors');

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
      listAuthors();
      break;
    case 5:
      createBook();
      break;
    case 6:
      listBooks();
      break;

    default:
      console.log('No se ha seleccionado ninguna acción');
  }
};

module.exports = enableAction;

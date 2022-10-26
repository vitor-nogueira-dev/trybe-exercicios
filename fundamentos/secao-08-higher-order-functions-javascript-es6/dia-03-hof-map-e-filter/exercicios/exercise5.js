const books = require("./script");

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const alphabeticalOrder = () => {
  const genres = ['Fantasia', 'Ficção Científica'];
  return books.filter((book) => genres.includes(book.genre)).map((book) => book.author.name).sort()
};
console.log(alphabeticalOrder());

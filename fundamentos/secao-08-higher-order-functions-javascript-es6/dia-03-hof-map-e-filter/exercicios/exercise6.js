const books = require("./script");

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const allBooks = () => {
  const anoAtual = 2022;
  return books
    .filter((book) => {
      return anoAtual - book.releaseYear > 60;
    })
    .map((book) => book.name);
};
console.log(allBooks());

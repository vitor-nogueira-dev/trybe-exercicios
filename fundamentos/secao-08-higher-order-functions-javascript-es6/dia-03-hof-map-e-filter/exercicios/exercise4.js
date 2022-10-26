const books = require("./script");

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const oldestBook = () => {
  const anoAtual = 2022;
  return books
    .filter((book) => {
      return anoAtual - book.releaseYear > 60;
    })
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

console.log(oldestBook());
// oldestBook();

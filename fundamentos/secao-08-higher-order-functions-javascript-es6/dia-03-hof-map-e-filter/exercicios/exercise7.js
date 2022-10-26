const books = require("./script");

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const nameBook = () => {
  return books.find(
    (book) =>
      book.author.name.split(" ").filter((element) => element.endsWith("."))
        .length === 3
  ).name;
};
console.log(nameBook());


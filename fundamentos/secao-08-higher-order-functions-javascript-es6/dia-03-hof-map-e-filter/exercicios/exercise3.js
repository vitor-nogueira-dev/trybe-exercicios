const books = require("./script");

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fictionGenre = () => {
  return books.filter(
    (element) =>
      element.genre === "Fantasia" || element.genre === "Ficção Científica"
  );
};

console.log(fictionGenre());

// const numbers = [3, 10, 18, 20];
// const filter = numbers.filter((number) => number > 10)
// console.log(filter); // [18, 20]

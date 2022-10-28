const books = require("./books");

// Crie uma string com os nomes de todas as pessoas autoras.

const namesAuthores = () => {
  return books.reduce((acc, curr, index, array) => {
    if (index < array.length - 1) {
      return `${acc} ${curr.author.name},`;
    } else {
      return `${acc} ${curr.author.name}.`;
    }
  }, "");
};
console.log(namesAuthores());

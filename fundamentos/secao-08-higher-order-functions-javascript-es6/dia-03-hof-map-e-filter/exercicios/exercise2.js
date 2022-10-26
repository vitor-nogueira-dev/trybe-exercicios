const books = require("./script");

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
// De olho na dica 👀: use as funções map, sort

const ordenandoBooks = () => {
  const arrayAuthorEIdade = books
    .map((book) => {
      const authorAndAge = {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      };
      return authorAndAge;
    })
    .sort((a, b) => a.age - b.age);
  return arrayAuthorEIdade;
};
console.log(ordenandoBooks());



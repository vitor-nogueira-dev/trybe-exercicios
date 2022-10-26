const books = require('./script');

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// De olho na dica 👀: Use a função map

const nameBooks = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
console.log(nameBooks());

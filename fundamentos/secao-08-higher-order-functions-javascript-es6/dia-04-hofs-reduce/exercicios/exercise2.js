const books = require('./dados')

// Crie uma string com os nomes de todas as pessoas autoras.

const namesAuthores = () => books.reduce((acc, curr) => `${acc} ${curr.author.name},`, '');

console.log(namesAuthores())
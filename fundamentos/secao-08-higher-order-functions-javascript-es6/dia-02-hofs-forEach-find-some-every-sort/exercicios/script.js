const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Teste2',
      birthYear: 1900,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'Teste',
      birthYear: 1900,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Exercício 1 
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// De olho na dica 👀: use a função find.

const authorBornIn1947 = books.find((person) => {
  return person.author.birthYear === 1947;
});
// console.log(authorBornIn1947);

// Exercício 2 
// Retorne o nome do livro de menor nome.
// De olho na dica 👀: use a função forEach.

// function smallerName() {
//   let nameBook;
//   books.forEach((element) => {
//     if(!nameBook || element.name.length < nameBook.length){
//       nameBook = element.name;
//     }
//   })
//   return nameBook
//   // Duna
// };

// console.log(smallerName());

// Exercício 3
// Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
        name: 'George R. R. Martin',
    birthYear: 1948,
  },
    releaseYear: 1991,
};
function getNamedBook() {
  return books.find((element) => element.name.length === 26);
}

// Exercício 4 
// Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
  return books;
}

// Exercício 5 
// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear <= 2000);
}

// Exercício 6 
// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989);
}

// Exercício 7 
// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
// const expectedResult = false;

function authorUnique() {
  return books.every((bookEvery) => {
    const bookSome = !books.some((book) => {
     return (book.author.birthYear === bookEvery.author.birthYear) && (book.author.name !== bookEvery.author.name);
    })
    return bookSome;
  })
}
console.log(authorUnique())

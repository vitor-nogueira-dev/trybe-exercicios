// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);
// O email roberta@email.com esta cadastrado em nosso banco de dados!
// O email paulo@email.com esta cadastrado em nosso banco de dados!
// O email anaroberta@email.com esta cadastrado em nosso banco de dados!
// O email fabiano@email.com esta cadastrado em nosso banco de dados!

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30
// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// Estrutura com função separada
// const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;
// console.log(numbers.find(findDivisibleBy3And5));

// Estrutura sem função separada 
// const findDivisiblePor3e5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// console.log(findDivisiblePor3e5);

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// Estrutura com função separada
// function findMusic(id) {
//   return id.id === '31031685';
// }
// console.log(musicas.find(findMusic));

// Estrutura sem função separada
// const findMusic2 = musicas.find((id) => id.id === '31031687');
// console.log(findMusic2);

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false


// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((element) => element === name);
// }
// console.log(hasName(names, 'Bruna'));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);

// console.log(verifyAges(people, 18));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// Ordem crescente 
// people.sort((a, b) => a.age > b.age ? 1 : -1);

// Ordem decrescente 
// people.sort((a, b) => a.age < b.age ? 1 : -1);

// console.log(people);
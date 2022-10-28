const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(Math.min(...numbers)); // [ 1, 2, 3 ]

// -------------------------------------------------------------------------
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// -------------------------------------------------------------------------
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// -------------------------------------------------------------------------
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };

// console.log(customer);

// -------------------------------------------------------------------------

// Para fixar 

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'pera', 'goiaba', 'laranja', 'amora', 'jabuticaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite em pó', 'açaí', 'granola'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional].sort;
};

// console.log(fruitSalad(specialFruit, additionalItens));

// -------------------------------------------------------------------------
function quantosParams(...args) {
  // console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// -------------------------------------------------------------------------
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// -------------------------------------------------------------------------

const product = {
  nome: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { nome } = product;
// console.log(nome); // Smart TV Crystal UHD

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// -------------------------------------------------------------------------

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

const diasSemana = [...workDays, ...weekend]; 
// console.log(diasSemana);

// -------------------------------------------------------------------------
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nomeM, b: classAssigned, c: subject } = student;

// console.log(nomeM); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// -------------------------------------------------------------------------

const products = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  // console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(products); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// -------------------------------------------------------------------------

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const employee = {...user, ...jobInfos}

// console.log(`Oi, meu nomé é ${employee.name}, tenho ${employee.age} e sou ${employee.nationality}. Trabalho como ${employee.profession} e minha equipe é ${employee.squadInitials}(${employee.squad}).`);

// -------------------------------------------------------------------------
const saudacoes = ['Olá'];
const [firstSaudacao] = saudacoes;
const frase = ['Olá', (firstSaudacao) => console.log(firstSaudacao)];


// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); 

[comida, animal, bebida] = [bebida, comida, animal]
// console.log(comida, animal, bebida);

// -------------------------------------------------------------------------

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares
// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// -------------------------------------------------------------------------

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;

// console.log(nationality);

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(person); // Brazilian
// -------------------------------------------------------------------------

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
person.nationality = 'Brazilian'

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));
// -------------------------------------------------------------------------

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

// console.log(getPosition(-19.8157, -43.9542));
// -------------------------------------------------------------------------
// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting(); // Welcome pessoa usuária!

// const greeting = (user = 'não passei parâmetro, mas tenho um pré definido') => console.log(`Welcome ${user}!`);
// greeting(); // // Welcome pessoa usuária!

// -------------------------------------------------------------------------

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => number * value
// console.log(multiply(8));

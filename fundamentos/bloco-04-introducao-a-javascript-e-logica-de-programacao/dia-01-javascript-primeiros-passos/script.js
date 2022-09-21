// Parte I
const myName = 'Vitor Nogueira';
const birthCity = 'Barbacena'; 
let birthYear = 1996;
console.log(myName)
console.log(birthCity)
console.log(birthYear)

birthYear = 2030;

console.log(birthYear) 

//birthCity = 'Belo Horizonte';

//console.log(birthCity)

// O erro se dá pelo fato de ser uma constante, ela não é alterável.

// Parte II 

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)

// Parte III

const base = 5;
let height = 8;
const area = base * height;

console.log(area)

const perimeter = (base * 2) + (height * 2); 

console.log(perimeter)
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

// Parte IV

let note = 30; 

if (note >= 80){
    console.log('Parabéns, você foi aprovada(o)!')
} else if (note < 80 && note >= 60){
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Você foi reprovada(o)!')
}

// Você foi reprovada(o)!

note = 85.5;

if (note >= 80){
    console.log('Parabéns, você foi aprovada(o)!')
} else if (note < 80 && note >= 60){
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Você foi reprovada(o)!')
}

// Parabéns, você foi aprovada(o)!

note = 64.5; 

if (note >= 80){
    console.log('Parabéns, você foi aprovada(o)!')
} else if (note < 80 && note >= 60){
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Você foi reprovada(o)!')
}

// Você está na nossa lista de espera

// Parte V

let currentHour = 16; 
let message = ''; 

if (currentHour >= 22){
    message = 'Não deveríamos comer nada, é hora de dormir'
} else if (currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D'
} else if (currentHour >= 14 && currentHour < 18){
    message - "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
} else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém passado.'
} else {
    message = "Hora inválida, digite a hora correta"
}
console.log(message);
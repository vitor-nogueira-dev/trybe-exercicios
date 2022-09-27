// FOR/IN

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};
console.log(player);

let cars = ["Mercedes", "Camaro", "BMW"];

for (let index in cars) {
  console.log(index, cars[index]);
}

let carros = {
  type: "Fiat",
  model: "500",
  color: "white",
};

for (let index in carros) {
  console.log(index, carros[index]);
}

// FOR/of

let food = ["hamburguer", "bife", "acarajé"];
for (let value of food) {
  console.log(value);
}
//resultado: hamburguer, bife, acarajé;

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let index in names) {
  console.log("Olá, " + names[index] + ".");
}
// Olá, João.
// Olá, Maria.
// Olá, Jorge.

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let index in car){
    console.log(index, car [index]);
}

// model A3 Sedan
// manufacturer Audi
// year 2020


// let a = 5;
// let b = 15; 

function adicao(a,b){
  return a + b;
}
function subtracao(a, b){
  return a - b;
}
function multiplicacao(a, b){
  return a * b;
}
function divisao(a, b){
  return a / b;
}
function modulo(a, b){
  return a % b;
}
console.log(adicao(a, b)); // 20 
console.log(subtracao(a, b)); // -10 
console.log(multiplicacao(a, b)); // 75
console.log(divisao(a, b)); // 0.33333333333
console.log(modulo(a, b));// 5


// let a = 5;
// let b = 15; 

function maiorNumero (a, b){
  if(a > b){
    return `O valor de A é maior que B`
  } else {
    return `O valor de B é maior que A`
  }
}
console.log(maiorNumero(a, b)); 

// O valor de B é maior que A


function positivoNegativo (numero){
  if (numero > 0){
    return `Numero é positivo`
  } else if (numero < 0){
    return `Numero é negativo`
  } else {
    return `Numero é igual a zero`
  }
}
console.log(positivoNegativo(-10));
// Numero é negativo

function angulosInternosTriangulo(a, b, c){
  let ladosInternos = a + b + c;
  if (ladosInternos === 180){
    return `True`
  } else {
    return `False`
  }
}
console.log(angulosInternosTriangulo(40, 80, 60));
// true


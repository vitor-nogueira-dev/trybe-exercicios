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
  console.log(index, car[index]);
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


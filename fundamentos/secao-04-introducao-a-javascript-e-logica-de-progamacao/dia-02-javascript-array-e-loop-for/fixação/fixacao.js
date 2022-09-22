// Parte I
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);

// 1 
// Parte II
let indexOfPortfolio = menu.indexOf('Portfólio')

console.log(indexOfPortfolio);

// 2
// Parte III
menu.push('Contato');

console.log(menu);

// [ 'Home', 'Serviços', 'Portfólio', 'Links', 'Contato' ]

// var numero = 7;

// for (let contador = 1; contador <= 9; contador ++){
//     console.log(numero * contador) ;
// }
// Parte IV
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}
// Arroz
// Feijão
// Alface
// Melancia

// for/of - adicionando mais 1 a cada item do array
// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }
// 11
// 21
// 31

//Parte V
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let namesPerson of names){
    console.log(namesPerson);
}





let a = 2; 
let b = 3;
console.log('Soma: ' + (a + b)); 
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b)); 
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// Soma: 5
// Subtração: -1
// Multiplicação: 6
// Divisão: 0.6666666666666666
// Módulo: 2


let numOne = 10;
let numTwo = 5;
if (numOne > numTwo){
    console.log("numOne é maior que numTwo")
} else {
    console.log("numTwo é maior que numOne")
}
// numOne é maior que numTwo

let c = 3;
let d = 6;
let e = 9;

if(c > d && c > e){
    console.log('O número maior é: ' + c);
} else if (d > c && d > e){
    console.log('O número maior é: ' + d);
} else {
    console.log('O número maior é: ' + e); 
}

// O número maior é: 9


let value = -2;

if(value >= 1){
    console.log('Positive')
} else if (value <= -1){ 
    console.log('Negative')
} else {
    console.log('zero')
}

// Negative 

let x = 30; 
let y = -10; 
let z = 140; 

let sum = x + y + z; 
let positive = x > 0 && y > 0 && z > 0;

if (positive){
    if (sum === 180){
        console.log('True');
    } else {
        console.log('False');
}
} else {
    console.log('Erro, valor inválido. Verifique e tente novamente.');
}

// Erro, valor inválido. Verifique e tente novamente.



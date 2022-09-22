let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log(numbers);
// [
//   5,   9, 3, 19, 70,
//   8, 100, 2, 35, 27
// ]

//Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(`A soma total do array numbers é: ${soma}`);

// A soma total do array numbers é: 278

//Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let media = soma / numbers.length;
console.log(
  `A média aritmétida dos valores contidos no array numbers é ${media}`
);

//A média aritmétida dos valores contidos no array numbers é 27.8

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor que 20`);
}
// Valor maior que 20

let numeroMaior = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > numeroMaior) {
    numeroMaior = numbers[i];
  }
}
console.log(`O maior número do array numbers é ${numeroMaior}`);

// O número maior do array numbers é 100

let numeroImpar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    numeroImpar += 1;
  }
}

if (numeroImpar === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(
    `Temos um total de ${numeroImpar} números ímpares no array numbers`
  );
}
//Temos um total de 6 números ímpares no array numbers

let numeroMenor = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < numeroMenor) {
    numeroMenor = numbers[i];
  }
}
console.log(`O menor número do array numbers é ${numeroMenor}`);
// O menor número do array numbers é 2

let numeros = [];
for (let i = 1; i <= 25; i += 1) {
  numeros.push(i);
}
console.log(numeros);

// [
//     1,  2,  3,  4,  5,  6,  7,  8,
//     9, 10, 11, 12, 13, 14, 15, 16,
//    17, 18, 19, 20, 21, 22, 23, 24,
//    25
// ]
for (let i = 0; i < numeros.length; i += 1){
    let divisao = numeros[i] / 2;
    console.log(`A divisão de ${numeros[i]} por 2 é = ${divisao}`);
}

// A divisão de 1 por 2 é = 0.5
// A divisão de 2 por 2 é = 1
// A divisão de 3 por 2 é = 1.5
// A divisão de 4 por 2 é = 2
// A divisão de 5 por 2 é = 2.5
// A divisão de 6 por 2 é = 3
// A divisão de 7 por 2 é = 3.5
// A divisão de 8 por 2 é = 4
// A divisão de 9 por 2 é = 4.5
// A divisão de 10 por 2 é = 5
// A divisão de 11 por 2 é = 5.5
// A divisão de 12 por 2 é = 6
// A divisão de 13 por 2 é = 6.5
// A divisão de 14 por 2 é = 7
// A divisão de 15 por 2 é = 7.5
// A divisão de 16 por 2 é = 8
// A divisão de 17 por 2 é = 8.5
// A divisão de 18 por 2 é = 9
// A divisão de 19 por 2 é = 9.5
// A divisão de 20 por 2 é = 10
// A divisão de 21 por 2 é = 10.5
// A divisão de 22 por 2 é = 11
// A divisão de 23 por 2 é = 11.5
// A divisão de 24 por 2 é = 12
// A divisão de 25 por 2 é = 12.5
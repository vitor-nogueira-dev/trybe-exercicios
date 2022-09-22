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
console.log(`O número maior do array numbers é ${numeroMaior}`);

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

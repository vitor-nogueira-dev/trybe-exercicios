let a = 2;
let b = 3;
console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + (a % b));

// Soma: 5
// Subtração: -1
// Multiplicação: 6
// Divisão: 0.6666666666666666
// Módulo: 2

let numOne = 10;
let numTwo = 5;
if (numOne > numTwo) {
  console.log("numOne é maior que numTwo");
} else {
  console.log("numTwo é maior que numOne");
}
// numOne é maior que numTwo

let c = 3;
let d = 6;
let e = 9;

if (c > d && c > e) {
  console.log("O número maior é: " + c);
} else if (d > c && d > e) {
  console.log("O número maior é: " + d);
} else {
  console.log("O número maior é: " + e);
}

// O número maior é: 9

let value = -2;

if (value >= 1) {
  console.log("Positive");
} else if (value <= -1) {
  console.log("Negative");
} else {
  console.log("zero");
}

// Negative

let x = 30;
let y = -10;
let z = 140;

let sum = x + y + z;
let positive = x > 0 && y > 0 && z > 0;

if (positive) {
  if (sum === 180) {
    console.log("True");
  } else {
    console.log("False");
  }
} else {
  console.log("Erro, valor inválido. Verifique e tente novamente.");
}

// Erro, valor inválido. Verifique e tente novamente.

let peça = "REI";
let transform = peça.toLowerCase();

switch (transform) {
  case "bispo":
    console.log("Bispo: anda na diagonal");
    break;
  case "cavalo":
    console.log(
      "Cavalo: em L(duas para a frente e uma para direita e/ou esquerda"
    );
    break;
  case "torre":
    console.log("Torre: anda em linha reta pelas colunas ou fileiras");
    break;
  case "peao":
    console.log("Peão: anda uma casa para frente");
    break;
  case "rainha":
    console.log(
      "Rainha: pode se mover pelas colunas, fileiras e diagonais de outra cor"
    );
    break;
  case "rei":
    console.log("Rei: pode se mover em todas as direções");
    break;
  default:
    console.log("Peça inválida, verifique e tente novamente");
}
// Rei: pode se mover em todas as direções

let nota = 89;

if (nota >= 90 && nota <= 100) {
  console.log("Sua nota convertida  em conceito é A");
} else if (nota >= 80 && nota <= 89) {
  console.log("Sua nota convertida em conceito é B");
} else if (nota >= 70 && nota <= 79) {
  console.log("Sua nota convertida em conceito é C");
} else if (nota >= 60 && nota <= 69) {
  console.log("Sua nota convertida em conceito é D");
} else if (nota >= 50 && nota <= 59) {
  console.log("Sua nota convertida em conceito é E");
} else if (nota < 50 && nota >= 0) {
  console.log("Sua nota convertida em conceito é F");
} else {
  console.log("Erro, valor inválido!");
}

// Sua nota convertida em conceito é B

let num1 = 2;
let num2 = 35;
let num3 = 65;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log("True");
} else {
  console.log("False");
}
// True

let teste1 = 1;
let teste2 = 5;
let teste3 = 10;

if (teste1 % 2 !== 0 || teste2 % 2 !== 0 || teste3 % 2 !== 0) {
  console.log("True");
} else {
  console.log("False");
}
//True

let custoProduto = 2;
let valorVenda = 5;
let impostoSobreProduto = 0.2;

if (custoProduto >= 0 && valorVenda >= 0) {
  let custoTotalProduto = custoProduto * impostoSobreProduto + custoProduto;
  let valorLucro = (valorVenda - custoTotalProduto) * 1000;
  console.log("Seu lucro total nessa venda é de: " + valorLucro);
} else {
  console.log("Valor incorreto!");
}

// Seu lucro total nessa venda é de: 2600

let salarioBruto = 5000;
let impostoInss;
let impostoIr;

//tabela INSS
if (salarioBruto <= 1556.94) {
  impostoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  impostoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  impostoInss = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.83) {
  impostoInss = 570.88;
}
let salarioBase = salarioBruto - impostoInss;
// tabela IR
if (salarioBruto <= 1903.98) {
  impostoIr = 0;
} else if (salarioBruto <= 2826.65) {
  impostoIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBruto <= 3751.05) {
  impostoIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBruto <= 4664.68) {
  impostoIr = (salarioBase * 0.225) - 636.13;
} else {
  impostoIr = (salarioBase * 0.275) - 869.36;
}

console.log('Seu salário líquido a receber é: ' + (salarioBase - impostoIr));
 
// Seu salário líquido a receber é: 4095.61

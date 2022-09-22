// Descubra a idade mínima

let Marina = 35;
let Silvia = 27;
let Iza = 30;

if (Marina < Silvia && Marina < Iza) {
  console.log(`Marina é a pessoa mais jovem e possui: ${Marina} anos de idade`);
} else if (Silvia < Iza && Silvia < Marina) {
  console.log(`Silvia é a pessoa mais jovem e possui: ${Silvia} anos de idade`);
} else {
  console.log(`Iza é a pessoa mais jovem e possui: ${Iza} anos de idade`);
}
// Silvia é a pessoa mais jovem e possui: 27 anos de idade

// Taxa Metabólica Basal

let age = 20;
let sex = "M";
let weight = 100;
let height = 190;
let formulaM = height * 6.25 + weight * 9.99 - age * 4.92 + 5;
let formulaF = height * 6.25 + weight * 9.99 - age * 4.92 - 161;

if (sex === "M") {
  console.log(`A taxa metabólica basal é: ${formulaM} kcal`);
} else if (sex === "F") {
  console.log(`A taxa metabólica basal é: ${formulaF} kcal`);
} else {
  console.log(`Dados incorretos, verifique e tente novamente.`);
}
// A taxa metabólica basal é: 2093.1 kcal

// Lanchonete da Trybe

let pedido = 2;

switch (pedido) {
  case 1:
    console.log("Trybe Lanche Feliz");
    break;
  case 2:
    console.log("McTrybe");
    break;
  case 3:
    console.log("TrybeWooper");
    break;
  case 4:
    console.log("X-Trybe");
    break;
  case 5:
    console.log("Triplo Trybe com JS");
    break;
  default:
    console.log("Ainda não possuímos esta opção!");
}
// McTrybe

// Elvine Santos 
// Jackson Santos
// Guilherme Lucena

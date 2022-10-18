// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
//     console.log(elseScope);
//   }
// }
// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = oddsAndEvens.sort((a, b) => a - b); // Quando precisar colocar um array de números em ordem crescente, é necessário passar dois parâmetros, para que ele compare o primeiro com o segundo e verifique qual é menor para ordenar.

// console.log(`Os números ${sortOddsAndEvens} se encontram ordenados de forma crescente!`);
// //Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!

// const factorial = (n) => {
//   let resultado = n;
//   for (let index = 1; index < n; index += 1){
//     resultado *= index;
//   }
//   console.log(`O fatorial de ${n} é: ${resultado}`);
// }
// factorial(100);

// // Parte II 

// const maiorPalavra = (frase) => {
//   const listaDasPalavras = frase.split(' ');
//   let palavraMaior = 0;
//   let result = '';

//   for (const index of listaDasPalavras) {
//     if (index.length > palavraMaior){
//       palavraMaior = index.length;
//       result = index;
//     }
//   }
//    return `A maior palavra da frase é ${result} com ${palavraMaior} letras`;
// }
// console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));

// // estrutura com .sort()
// const palavraMaior = frase => frase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(palavraMaior('Antônio foi ao banheiro e não sabemos o que aconteceu'));


// const contador = document.querySelector('.counter');
// const btn = document.querySelector('.button')
// let clickCount = 0
// btn.addEventListener('click', () => contador.innerHTML = clickCount += 1);

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!'
  let novaFrase = frase.split('x');
  return novaFrase + nome;

}
console.log(substituaX('bebeto'));
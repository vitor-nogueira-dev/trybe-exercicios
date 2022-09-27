
function verificaPalindromo(palavra) {
  for (index in palavra){
    if(palavra[index] != palavra[(palavra.length -1) - index]) {
        return false;
    }
  }
  return true;
}
console.log(verificaPalindromo('onibus')); // false
console.log(verificaPalindromo('arara')); // true

// let valores = [2, 3, 6, 7, 10, 1];
function maiorValor (valores){
    let indiceMaior = 0;
    for (let index in valores){
        if (valores[indiceMaior] < valores[index]){
            indiceMaior = index;
        }
    }
    return indiceMaior
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));


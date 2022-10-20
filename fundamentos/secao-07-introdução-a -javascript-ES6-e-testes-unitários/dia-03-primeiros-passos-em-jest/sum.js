// Exercício 1
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
// Exercício 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// Exercício 3
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Exercício 4
const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}
const tecnologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
const techList = (array, name) => {
  if(array.length === 0 ) 
  return 'Vazio!'
  const arrayOrdenado = array.sort()
  const listaTecnologias = [];
  for (let index = 0; index < arrayOrdenado.length; index += 1){
    listaTecnologias.push({
      tech: arrayOrdenado[index],
      name: name
    });
  } 
  return listaTecnologias
} 

console.log(techList(tecnologias, 'Vitor'));

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList};

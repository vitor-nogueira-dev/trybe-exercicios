// exercício 1
const func = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_')
  return {nomeCompleto, email: `${email}@trybe.com`};
} 

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees
}
console.log(newEmployees(func));

// exercício 2

const check = (numeroApostado) => {
  const numeroGerado = () => Math.floor(Math.random() * 5);
  if (numeroApostado === numeroGerado) {
    return 'Parabéns você ganhou!' 
    } else {
    return 'Não foi dessa vez, tente novamente!'
    }
}
// console.log(numbers(2));

// Estrutura com HOFs

// const numberCheck = (numeroApostado, numeroGerado) => numeroApostado === numeroGerado;
// const lotery = (numeroApostado, callback) => {
//   const numeroGerado = () => Math.floor((Math.random() * 5) + 1);
//   return callback(numeroApostado, numeroApostado) ? 'Parabéns você ganhou!' : 'Não foi dessa vez, tente novamente!';
// }
// console.log(lotery(3, numberCheck));
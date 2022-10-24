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
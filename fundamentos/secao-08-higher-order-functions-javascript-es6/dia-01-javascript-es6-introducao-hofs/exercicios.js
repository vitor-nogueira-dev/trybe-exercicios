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
// console.log(newEmployees(func));

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

// exercício 3

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparacaoRespostas = (gabarito, respostasAluno) => {
  if(gabarito === respostasAluno) {
    return 1;
  } if (respostasAluno === 'N.A'){
    return 0;
  }
  return -0.5;
}
const corretorExame = (arrayGabarito, arrayResolucao, callback) => {
  let pontuacao = 0;
  for (let index = 0; index < arrayGabarito.length; index += 1) {
    const retorno = callback(arrayGabarito[index], arrayResolucao[index]);
    pontuacao += retorno;
  }
  return `Resultado final: ${pontuacao} pontos`;

}
// console.log(corretorExame(gabarito, respostasAluno, comparacaoRespostas));

// Exercícios - Bônus - parte I 

const mage = {
  healthPoints: 130, // pontos saúde 
  intelligence: 45, // inteligencia 
  mana: 125, // mana
  damage: undefined, // dano
};

const warrior = {
  healthPoints: 200, // pontos saúde 
  strength: 30, // força
  weaponDmg: 2, // arma
  damage: undefined, // dano
};

const dragon = {
  healthPoints: 350, // pontos saúde 
  strength: 50, // força
  damage: undefined, // dano
};

const battleMembers = { mage, warrior, dragon };
// console.log(battleMembers);


// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = (dragon) => {
  const numberMinimum = 15;
  const numberAleatory = Math.floor(Math.random() * dragon.strength);
  const damageTotal = numberAleatory > numberMinimum ? numberAleatory : numberMinimum;
  return damageTotal;
}
// console.log(dragonDamage(dragon));

// Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const dragonWarrior = (warrior) => {
  const numberMinimum = warrior.strength;
  const numberMaximum = numberMinimum * warrior.weaponDmg; 
  const numberAleatory = Math.floor(Math.random() * numberMaximum);
  const damageTotal = numberAleatory > numberMinimum ? numberAleatory : numberMaximum
  return damageTotal;
}
// console.log(dragonWarrior(warrior));

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0.

// const teste = (dragon) => {
//   let mana = dragon.mana; // consumida por turno
//   const minimumDamage = dragon.intelligence;
//   const maximumDamage = (minimumDamage * 2);
//   const damage = Math.floor(Math.random() * (maximumDamage - minimumDamage) + minimumDamage);
//   const round = {
//     mana: 0,
//     damage: 'Não possui mana suficiente',
//   }
//   if (mana >= 15) {
//     round.mana = mana,
//     round.damage = damage,
//   }
//   return round;
// }

// console.log(teste(mage));

// Parte II 

const gameActions = {
  warriorTurno: (dragonWarrior) => {
    const damageWarrior = dragonWarrior(warrior);
    dragon.healthPoints -= damageWarrior;
    warrior.damage = damageWarrior; 
  },
};

console.log(gameActions.warriorTurno(dragonWarrior));
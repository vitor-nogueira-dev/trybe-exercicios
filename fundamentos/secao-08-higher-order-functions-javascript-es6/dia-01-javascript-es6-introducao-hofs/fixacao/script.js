const wakeUp = () => 'Acordando!!!'
const breakfast = () => 'Bora tomar café!!!'
const sleep = () => 'Partiu dormir!!!'

const doingThings = (func) => func();

console.log(doingThings(wakeUp));
console.log(doingThings(breakfast));
console.log(doingThings(sleep));


// const danoDragao = (dragon) => {
//   const danoMinimo = 15;
//   const danoMaximo = Math.floor(Math.random() * dragon.strength);
//   const dragao = danoMaximo > danoMinimo ? danoMaximo : danoMinimo;
//   return dragao
// }
// console.log(danoDragao(mage));

// const dragonWarrior = (warrior) => {
//   const min = warrior.strength;
//   const max = min * warrior.weaponDmg;
//   const danoTotal Math.floor(Math.random() * warrior.strength);
// }
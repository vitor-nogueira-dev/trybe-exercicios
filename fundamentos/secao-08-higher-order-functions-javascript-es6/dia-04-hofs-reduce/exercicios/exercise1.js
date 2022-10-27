const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];


// Utilize o reduce para transformar uma matriz em um array.
const newArray = () => arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(newArray());
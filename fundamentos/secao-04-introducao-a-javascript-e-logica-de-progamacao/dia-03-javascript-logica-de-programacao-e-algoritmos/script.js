let fruits = [3, 4, 10, 1, 12];
let sum = 0;
for (let i = 0; i < fruits.length; i += 1) {
  sum += fruits[i];
}
if (sum > 15) {
  console.log(`Valor maior que 15, total soma: ${sum}`);
} else {
  console.log("Valor menor que 16");
}
// Valor maior que 15, total soma: 30

let fatorial = 1;
for (let i = 10; i > 0; i -= 1) {
  fatorial = fatorial * i; 
}
console.log(fatorial);

//3628800




// Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.

const sum = (array) => array.reduce((acc, number) => acc + number, 0)

const rest = [4, 5, 6, 4, 5, 7]
console.log(sum(rest));
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

// De olho na dica 👀: use o default params.

// escreva greet abaixo
const greet = (person, saudacao = "Hi") => {
  typeof saudacao === undefined ? "Hi" : person;
  return `${saudacao} ${person}`;
  // `${person} ${saudacao}`
};
// Retornos esperados:
console.log(greet("John")); // 'Hi John'
console.log(greet("John", "Good morning")); // 'Good morning John'
console.log(greet("Isabela", "Oi")); // 'Oi Isabela'

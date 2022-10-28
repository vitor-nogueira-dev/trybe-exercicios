const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const expectedResult = 20;

// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const teste = () {
  let totalLettersA = 0;
  names.forEach((name) => {
    const letrasDosNomes = name.split("");
    totalLettersA += letrasDosNomes.reduce((acc, curr) => {
      if (curr.toLowerCase() === "a"){
        return acc + 1;
      } 
      return acc
    }, 0);
  })
 return totalLettersA;
}
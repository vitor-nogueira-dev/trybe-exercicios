let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
console.log(`Bem-vinda, ${info.personagem}!`);

info.recorrente = "Sim";

console.log(info);

for (let key in info) {
  console.log(key);
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell`s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let value in info) {
  if (
    value === "recorrente" &&
    info[value] === "Sim" &&
    info2[value] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[value] + " e " + info2[value]);
  }
}




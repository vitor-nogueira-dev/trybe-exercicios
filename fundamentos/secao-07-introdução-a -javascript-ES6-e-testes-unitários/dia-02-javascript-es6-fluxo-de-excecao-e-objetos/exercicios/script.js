// const order = {
//   name: "Rafael Andrade",
//   phoneNumber: "11-98763-1416",
//   address: {
//     street: "Rua das Flores",
//     number: "389",
//     apartment: "701",
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: "Coca-Cola Zero",
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: "Ana Silveira",
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, na ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}.`
// };

// console.log(customerInfo(order));

// order.name = 'Luiz Silva';
// order.payment.total = 50;

// const orderModifier = (order) => {
//   return `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${order.payment.total}.`
// };

// console.log(orderModifier(order));

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Parte I
// const adicionaTurno = (n1, n2, n3) => n1[n2] = n3;

// adicionaTurno(lesson2, 'turno', 'noite');
// console.log(lesson2);

// // Parte II
// const verificaKeys = (obj) => Object.keys(obj);
// console.log(verificaKeys(lesson1))

// Parte III
const tamanhoObjeto = (obj) => {
  const arrayObjetos = Object.entries(obj)
  return arrayObjetos.length
}
console.log(tamanhoObjeto(lesson3));

// Parte IV
const valoresObjeto = (obj) => {
  return Object.values(obj)
}
console.log(valoresObjeto(lesson3));

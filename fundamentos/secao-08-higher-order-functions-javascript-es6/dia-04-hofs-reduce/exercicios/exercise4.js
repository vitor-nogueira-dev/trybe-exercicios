// const expected = [
  //   { name: 'Pedro Henrique', average: 7.8 },
  //   { name: 'Miguel', average: 9.2 },
  //   { name: 'Maria Clara', average: 8.8 },
  // ];
  
  const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
  const grades = [
    [9, 8, 10, 7, 5],
    [10, 9, 9, 10, 8],
    [10, 7, 10, 8, 9],
  ];
  // Criar um novo array [] de objetos [{name: nome aluno, average: media das notas}]

const studentAverage = () => {
  return students.map((element, index) => ({
    name: element,
    average:
      grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }));
};

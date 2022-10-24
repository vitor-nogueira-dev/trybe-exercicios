import {describe, expect, test} from '@jest/globals'


const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./sum');

// Exercício 1
describe('Testando a soma dos números', () => { 
  it('A soma de 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
  it('A soma de 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  it('Erro ao tentar somar um Number com String', () => {
    expect(( ) => sum(4, '5')).toThrow()
  })
  it('Erro ao tentar somar um Number com String', () => {
    expect(( ) => sum(4, '5')).toThrow()
  })
  it('Erro ao tentar somar um Number com String', () => {
    expect(( ) => sum(4, '5')).toThrow('parameters must be numbers')
  })
})

// Exercício 2
describe('Teste em um array', () => { 
  const array = [1, 2, 3, 4]
  it('Removendo o número 3 do array [1, 2, 3, 4]', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4])
  })
  it('Verificando se a função NÃO retorna o array completo', () => {
    expect(myRemove(array, 3)).not.toEqual(array)
  })
  it('Verificando se a função retorna o array esperado', () => {
    expect(myRemove(array, 5)).toEqual(array)
  })
});

// Exercício 3
describe('Verificando se o número é divisível por 3 e 5', () => { 
  it('Verificando se 15 é divisível por 3 e 5', ( )=> {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  it('Verificando se 9 é divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  it('Veirificandpo se 50 é divisível por 5', () => {
    expect(myFizzBuzz(50)).toBe('buzz')
  })
  it('Verificando se 11 NÃO é divisível por 3 e 5', () => {
    expect(myFizzBuzz(11)).toBe(11)
  })
  it('Verificando se NUMBER é um número', () => {
    expect(myFizzBuzz('NUMBER')).toBeFalsy()
  })
})

// Exercício 4
describe('Testando as funções: encode e decode', () => {
  const vogais = 'a, e, i, o, u'
  const numerais = '1, 2, 3, 4, 5' 
  const string = 'Olá, sou estudante de desenvolvimento na Trybe';
  const retorno = 'Olá, s45 2st5d1nt2 d2 d2s2nv4lv3m2nt4 n1 Tryb2';
  it('Verificando se ENCODE é função', () => {
     expect(typeof encode).toBe('function')
  })
  it('Verificando se DECODE é função', () => {
    expect(typeof decode).toBe('function')
  })
  it('Verificando a conversão das vogais para numerais', () => {
    expect(encode(vogais)).toBe(numerais)
  })
  it('Verificando a conversão dos numerais para vogais', () => {
    expect(decode(numerais)).toBe(vogais)
  })
  it('Verificando se as consoantes não são convertidas em numerais', () => {
     expect(encode(string)).toBe(retorno)
  })
  it('Verificando se a string passada tem o mesmo tamanho da que retorna no resultado', () => {
    expect(encode(string)).toHaveLength(retorno.length)
  })
})

// Exercício 5
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// Exercício 6
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBeC('6 copos de água');
  });
});



// import {describe, expect, test} from '@jest/globals'

const {sum, myRemove} = require('./sum');

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

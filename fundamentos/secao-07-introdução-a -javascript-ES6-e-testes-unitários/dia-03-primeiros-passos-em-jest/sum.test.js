// import {describe, expect, test} from '@jest/globals'

const sum = require('./sum');

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
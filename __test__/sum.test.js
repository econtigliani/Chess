const sum = require('../sum.js')

describe('pruebas para suma', () =>{
    test('1 + 2 is 3', () =>{
        expect(sum(1,2)).toBe(3)

    })
}) // crea un bloque donde podemos agrupar varias pruebas relacionadas


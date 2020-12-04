const { rookMoves } = require("../src/piecesMoves/rookMoves");
const { tablesRook } = require("./mockTables");

describe('rookMoves test', () => {
     test('Move up', () => {
        expect(rookMoves(tablesRook.moveRowUp , 3, 0,'black')).toStrictEqual([
            {
                num: 6,
                value: 60,
                from_row: 3,
                from_col: 0,
                to_row: 11,
                to_col: 0,
            },

        ])

    }) 

     test('Move down', () => {
        expect(rookMoves(tablesRook.moveRowDown , 12, 0,'white')).toStrictEqual([
            {
                num: 8,
                value: 60,
                from_row: 12,
                from_col: 0,
                to_row: 4,
                to_col: 0,
            },

        ])

    })
 
    test('Move col right', () => {
        expect(rookMoves(tablesRook.moveCol , 11, 0,'white')).toStrictEqual([
            {
                num: 10,
                value: 60,
                from_row: 11,
                from_col: 0,
                to_row: 11,
                to_col: 14,
            },

        ])

    })
     test('Move col left', () => {
        expect(rookMoves(tablesRook.moveCol , 11, 15,'white')).toStrictEqual([
            {
                num: 12,
                value: 60,
                from_row: 11,
                from_col: 15,
                to_row: 11,
                to_col: 1,
            },

        ])

    }) 

    test('Eat col right', () => {
        expect(rookMoves(tablesRook.eatCol , 11, 15,'black')).toStrictEqual([
            {
                num: 13,
                value: 600,
                from_row: 11,
                from_col: 15,
                to_row: 11,
                to_col: 0,
            },

        ])

    }) 
    test('Eat col left', () => {
        expect(rookMoves(tablesRook.eatCol , 11, 0,'white')).toStrictEqual([
            {
                num: 11,
                value: 600,
                from_row: 11,
                from_col: 0,
                to_row: 11,
                to_col: 15,
            },

        ])

    }) 
    test('Eat row down', () => {
        expect(rookMoves(tablesRook.eatRow , 12, 0,'white')).toStrictEqual([
            {
                num: 9,
                value: 600,
                from_row: 12,
                from_col: 0,
                to_row: 3,
                to_col: 0,
            },

        ])

    })

    test('Eat row up', () => {
        expect(rookMoves(tablesRook.eatRow , 3, 0,'black')).toStrictEqual([
            {
                num: 7,
                value: 600,
                from_row: 3,
                from_col: 0,
                to_row: 12,
                to_col: 0,
            },

        ])

    })

    
    
})

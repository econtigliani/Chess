const { pawnMovesBlack, pawnMovesWhite } = require("../src/piecesMoves/pawnMoves");
const { tablesPawn, tableInit } = require("./mockTables/mockTables");

describe('pawnMoves test', () => {
    
    test('Promote', () => {
        expect(pawnMovesBlack(tablesPawn.Promote , 6, 0)).toStrictEqual([
            {
                value: 130,
                from_row: 6,
                from_col: 0,
                to_row: 7,
                to_col: 0,
            },
            {
                value: 500,
                from_row: 6,
                from_col: 0,
                to_row: 7,
                to_col: 0,

            }
        ])
    })
    test('first movement 2 places into 5 row', () => {
        expect(pawnMovesBlack(tableInit , 3, 0)).toStrictEqual([
            {
                value: 110,
                from_row: 3,
                from_col: 0,
                to_row: 5,
                to_col: 0,
            },
            {
                value: 100,
                from_row: 3,
                from_col: 0,
                to_row: 4,
                to_col: 0,

            }
        ])

    })

    test('first movement 2 places col 2', () => {
        expect(pawnMovesBlack(tablesPawn.secondColMoves , 2, 0)).toStrictEqual([
            {
                value: 100,
                from_row: 2,
                from_col: 0,
                to_row: 4,
                to_col: 0,
            },
            {
                value: 90,
                from_row: 2,
                from_col: 0,
                to_row: 3,
                to_col: 0,

            }
        ])
    })
    test('move a place', () => {
        expect(pawnMovesBlack(tablesPawn.blockMove , 3, 0)).toStrictEqual([
            
            {
                value: 100,
                from_row: 3,
                from_col: 0,
                to_row: 4,
                to_col: 0,
            }
            
        ],
        )
         

    })
    test('eatPawn', () => {
        expect(pawnMovesBlack(tablesPawn.eatPawn , 3, 1)).toStrictEqual([
            
            {
                value: 100,
                from_row: 3,
                from_col: 1,
                to_row: 4,
                to_col: 0,
            },
            {
                value: 100,
                from_row: 3,
                from_col: 1,
                to_row: 4,
                to_col: 2,
            }
            
        ],
        )
         

    })


})
describe('pawnMovesWhite test', () => {
      
    test('Promote', () => {
        expect(pawnMovesWhite(tablesPawn.Promote , 9, 0)).toStrictEqual([
            {
                num: 3,
                value: 130,
                from_row: 9,
                from_col: 0,
                to_row: 8,
                to_col: 0,
            },
            {
                num:300,
                value: 500,
                from_row: 9,
                from_col: 0,
                to_row: 8,
                to_col: 0,

            }
        ])
    })

    test('first movement 2 places into 12 row', () => {
        expect(pawnMovesWhite(tableInit, 12, 0)).toStrictEqual([
            {
                num: 2,
                value: 110,
                from_row: 12,
                from_col: 0,
                to_row: 10,
                to_col: 0,
            },
            {
                num: 3,
                value: 100,
                from_row: 12,
                from_col: 0,
                to_row: 11,
                to_col: 0,

            }
        ])

    })

    test('first movement 2 places row 13', () => {
        expect(pawnMovesWhite(tablesPawn.secondColMoves, 13, 0)).toStrictEqual([
            {
                num: 1,
                value: 100,
                from_row: 13,
                from_col: 0,
                to_row: 11,
                to_col: 0,
            },
            {
                num: 3,
                value: 90,
                from_row: 13,
                from_col: 0,
                to_row: 12,
                to_col: 0,

            }
        ])
    })

    test('move a place', () => {
        expect(pawnMovesWhite(tablesPawn.blockMove , 12, 0)).toStrictEqual([
            
            {
                num: 3,
                value: 100,
                from_row: 12,
                from_col: 0,
                to_row: 11,
                to_col: 0,
            }
            
        ],
        )
         

    })
    test('eatPawn', () => {
        expect(pawnMovesWhite(tablesPawn.eatPawn , 12, 1)).toStrictEqual([
            
            {
                num: 4,
                value: 100,
                from_row: 12,
                from_col: 1,
                to_row: 11,
                to_col: 2,
            },
            {
                num: 5,
                value: 100,
                from_row: 12,
                from_col: 1,
                to_row: 11,
                to_col: 0,
            }
            
        ],
        )
         

    })
})

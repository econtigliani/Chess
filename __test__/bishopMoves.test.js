const { bishopMoves } = require("../src/piecesMoves/bishopMoves")
const { tablesBishop } = require("./mockTables")


describe('bishopMoves test', () => {

    test('Move diagonal', () => {
        expect(bishopMoves(tablesBishop.moveDiag, 8, 7, 'white')).toStrictEqual([
            {
                num: 15,
                value: 40,
                from_row: 8,
                from_col: 7,
                to_row: 11,
                to_col: 10,
            },
            {
                num: 17,
                value: 40,
                from_row: 8,
                from_col: 7,
                to_row: 11,
                to_col: 4,
            },
            {
                num: 19,
                value: 40,
                from_row: 8,
                from_col: 7,
                to_row: 4,
                to_col: 3,
            },
            {
                num: 21,
                value: 40,
                from_row: 8,
                from_col: 7,
                to_row: 4,
                to_col: 11,
            },
        ])
    })

    test('Eat diagonal', () => {
        expect(bishopMoves(tablesBishop.eatDiag, 8, 7, 'white')).toStrictEqual([
            {
                num: 14,
                value: 100,
                from_row: 8,
                from_col: 7,
                to_row: 12,
                to_col: 11,
            },
            {
                num: 16,
                value: 100,
                from_row: 8,
                from_col: 7,
                to_row: 12,
                to_col: 3,
            },
            {
                num: 18,
                value: 100,
                from_row: 8,
                from_col: 7,
                to_row: 3,
                to_col: 2,
            },
            {
                num: 20,
                value: 100,
                from_row: 8,
                from_col: 7,
                to_row: 3,
                to_col: 12,
            },
        ])


    })
})

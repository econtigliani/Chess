const { kingMoves } = require("../src/piecesMoves/kingMoves");
const { tablesKing } = require("./mockTables/mockTables");

describe('kingMoves test', () => {

    test('Move king', () => {
        expect(kingMoves(tablesKing.moveKing, 5, 1, 'black')).toStrictEqual([
            {
                num: 40,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 6,
                to_col: 1,
            },
            {
                num: 40,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 4,
                to_col: 1,
            },
            {
                num: 40,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 5,
                to_col: 2,
            },
            {
                num: 40,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 5,
                to_col: 0,
            },

        ])
    })

    test('Eat king', () => {
        expect(kingMoves(tablesKing.eatKing, 5, 1, 'black')).toStrictEqual([
            {
                num: 41,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 6,
                to_col: 1,
            },
            {
                num: 41,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 4,
                to_col: 1,
            },
            {
                num: 41,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 5,
                to_col: 2,
            },
            {
                num: 41,
                value: 100,
                from_row: 5,
                from_col: 1,
                to_row: 5,
                to_col: 0,
            },

        ])
    })
})
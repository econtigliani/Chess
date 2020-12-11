const { horseMoves } = require("../src/piecesMoves/horseMoves");
const { tablesHorse } = require("./mockTables/mockTables");

describe('horseMoves test', () => {

    test('Move horse', () => {
        expect(horseMoves(tablesHorse.moveHorse, 6, 2, 'black')).toStrictEqual([
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 8,
                to_col: 3,
            },
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 7,
                to_col: 4,
            },
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 5,
                to_col: 4,
            },
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 4,
                to_col: 3,
            },
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 4,
                to_col: 1,
            },
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 5,
                to_col: 0,
            },
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 7,
                to_col: 0,
            },
            {
                num: 22,
                value: 30,
                from_row: 6,
                from_col: 2,
                to_row: 8,
                to_col: 1,
            },
        ])
    })

    test('Move horse', () => {
        expect(horseMoves(tablesHorse.eatHorse, 6, 2, 'black')).toStrictEqual([
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 8,
                to_col: 3,
            },
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 7,
                to_col: 4,
            },
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 5,
                to_col: 4,
            },
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 4,
                to_col: 3,
            },
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 4,
                to_col: 1,
            },
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 5,
                to_col: 0,
            },
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 7,
                to_col: 0,
            },
            {
                num: 23,
                value: 100,
                from_row: 6,
                from_col: 2,
                to_row: 8,
                to_col: 1,
            },
        ])
    })
    test('Fake move horse', () => {
        expect(horseMoves(tablesHorse.fakeHorse, 6, 2, 'black')).toStrictEqual([])})

    
})
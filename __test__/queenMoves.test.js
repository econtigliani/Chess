const { tablesQueen } = require("./mockTables/mockTables");
const { queenMoves } = require("../src/piecesMoves/queenMoves")
describe('queenMoves test', () => {

    test('Move queen', () => {
        expect(queenMoves(tablesQueen.moveQueen, 8, 7, 'white')).toStrictEqual(  [
            {
             from_col : 7,
             from_row : 8,
              num : 24,
              to_col : 7,
              to_row : 11,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 26,
              to_col : 7,
              to_row : 4,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 28,
              to_col : 14,
              to_row : 8,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 30,
              to_col : 1,
              to_row : 8,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 32,
             to_col : 10,
             to_row : 11,
              value : 100,
          },
            {
             from_col : 7,
             from_row : 8,
              num : 35,
             to_col : 4,
             to_row : 11,
              value : 100,
          },
            {
             from_col : 7,
             from_row : 8,
              num : 37,
             to_col : 3,
             to_row : 4,
              value : 100,
          },
            {
             from_col : 7,
             from_row : 8,
              num : 38,
             to_col : 11,
             to_row : 4,
              value : 100,
          },
        ]
       )
    })

    test('Eat queen', () => {
        expect(queenMoves(tablesQueen.eatQueen, 8, 7, 'white')).toStrictEqual([
            {
             from_col : 7,
             from_row : 8,
              num : 25,
              to_col : 7,
              to_row : 12,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 27,
              to_col : 7,
              to_row : 3,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 29,
              to_col : 15,
              to_row : 8,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 31,
              to_col : 0,
              to_row : 8,
              value : 100,
           },
             {
              from_col : 7,
              from_row : 8,
              num : 33,
             to_col : 11,
             to_row : 12,
             value : 100,
          },
            {
             from_col : 7,
             from_row : 8,
              num : 34,
             to_col : 3,
             to_row : 12,
             value : 100,
          },
            {
             from_col : 7,
             from_row : 8,
              num : 36,
             to_col : 2,
             to_row : 3,
             value : 100,
          },
            {
             from_col : 7,
             from_row : 8,
              num : 39,
             to_col : 12,
             to_row : 3,
             value : 100,
          },
        ]
       )


    })
})
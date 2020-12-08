const moveTable = require("../src/util/moveTable").moveTable
const { tableInit,tableMoveTable } = require("./mockTables")

const movePawn = {
    num:1,
    value: 110,
    from_row: 3,
    from_col: 0,
    to_row: 5,
    to_col: 0
} 

const moveBlackPromote = {
    num:1,
    value: 110,
    from_row: 6,
    from_col: 0,
    to_row: 7,
    to_col: 0
} 

const moveWhitePromote = {
    num:1,
    value: 110,
    from_row: 9,
    from_col: 0,
    to_row: 8,
    to_col: 0
} 

describe('Move table test', () => {

    test('Move pawn test', () => {
        expect(moveTable(tableInit, movePawn)).toStrictEqual( tableMoveTable.MovePawn)
        })

    test('Promote black test', () => {
        expect(moveTable(tableMoveTable.PromoteBlack,moveBlackPromote)).toStrictEqual( tableMoveTable.PromoteBlackResult)
    })
    test('Promote white test', () => {
        expect(moveTable(tableMoveTable.PromoteWhite,moveWhitePromote)).toStrictEqual( tableMoveTable.PromoteWhiteResult)
    })
    })


    
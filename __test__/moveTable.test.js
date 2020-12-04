const moveTable = require("../src/util/moveTable").moveTable
const { tableInit,tableMovePawn } = require("./mockTables")

const movePawn = {
    num:1,
    value: 110,
    from_row: 3,
    from_col: 0,
    to_row: 5,
    to_col: 0
} 

describe('Make table test', () => {

    test('Make table test', () => {
        expect(moveTable(tableInit,movePawn)).toStrictEqual( tableMovePawn)
        })
    })


    
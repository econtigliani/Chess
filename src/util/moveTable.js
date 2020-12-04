function moveTable(table,move) {

    const temp = table[move.from_row][move.from_col]
    table[move.from_row][move.from_col] = ' '
    table[move.to_row][move.to_col] = temp
    return table
}

module.exports = {
    moveTable: moveTable
}
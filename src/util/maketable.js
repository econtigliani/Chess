const { max, min } = require("../enums/limitsBoard");

//read board
function maketable(board) {

    let index = 0;
    let matrix = [];

    for (let i = 0; i < max; i++) {
        let row = [];
        for (let j = 0; j < max; j++) {
            row.push(board[index]);
            index++;
        }
        matrix.push(row)
    }
    return matrix;
}
module.exports = {
    maketable : maketable,
}
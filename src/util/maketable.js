const { min, max } = require("../enums/limitsBoard");

//read board
function maketable(board) {

    let index = 0;
    let matrix = [];

    for (let i = min; i < max; i++) {
        let row = [];
        for (let j = min; j < max; j++) {
            row.push(board[index]);
            index++;
        }
        matrix.push(row)
    }
    return matrix;
}

module.exports.maketable = maketable;
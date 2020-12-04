const { max, min } = require("../enums/limitsBoard");

//read board
function maketable(board) {

    let index = 0;
    let matrix = [];

    for (let i = max -1; i >= min; i--) {
        let row = [];
        for (let j = max-1; j >= min; j--) {
            row.push(board[index]);
            index++;
        }
        matrix.push(row)
    }
    return matrix;
}

//read table
function makeboard(table) {

    var newArr = [];
    
    
    for(var i = 0; i < table.length; i++)
    {
        newArr = newArr.concat(table[i]);
    }
    
    return newArr.join('')
}


module.exports = {
    makeboard : makeboard,
    maketable : maketable,
}
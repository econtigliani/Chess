const { max, min } = require("./enums/limitsBoard")
const { moveBlack } = require("./strategiesColours/Black");
const { moveWhite } = require("./strategiesColours/White");



function moveColor(board, colour) {


    //vacio el arreglo porque tiene movimientos de la jugada anterior
    let possibleMovements = []

    //genero una matriz 
    let table
    table = maketable(board)

    if (colour == 'white') {
        possibleMovements = moveWhite(table)
    } else {
        possibleMovements = moveBlack(table)
    }

    //console.log(possibleMovements)
    // busco cual de los resultados es el que tiene el mayor valor.
    let maxValue = 0;

    possibleMovements.forEach(pm => {
        if (pm.value >= maxValue) {
            maxValue = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovements.findIndex(s => s.value == maxValue);

    //console.log(possibleMovements)

    let result;
    result = {
        num: possibleMovements[index].num,
        value: possibleMovements[index].value,
        from_row: possibleMovements[index].from_row,
        from_col: possibleMovements[index].from_col,
        to_row: possibleMovements[index].to_row,
        to_col: possibleMovements[index].to_col,
    }


    // devuelvo un json con los datos desde y hacia del movimiento de mayor valor
    console.log("result: ", result)
    return result;
}


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

module.exports.moveColor = moveColor;
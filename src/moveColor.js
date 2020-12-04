const { moveBlack } = require("./strategiesColours/Black");
const { moveWhite } = require("./strategiesColours/White");
const { maketable } = require("./util/makeTable");
const {moveTable} = require("./util/moveTable");

function moveColor(board, colour/* , table = null */) {


    //vacio el arreglo porque tiene movimientos de la jugada anterior
    let possibleMovements = []

    //genero una matriz 

/*     let possibleTable
    let bestMoveCounter */
    
    if(board != null){
    table = maketable(board)
    }
    if (colour == 'white') {
        possibleMovements = moveWhite(table)
    /*     possibleMovements.forEach(pm => {
            possibleTable = moveTable(table,pm)
            bestMoveCounter = moveColor(board,'black')
            pm.value = pm.value - bestMoveCounter.value 
        });*/
    } else {
        possibleMovements = moveBlack(table)
      /*   possibleMovements.forEach(pm => {
            possibleTable = moveTable(table,pm)
            bestMoveCounter = moveColor(board,'white')
            pm.value = pm.value - bestMoveCounter.value
        }) */
    }


    //console.log(possibleMovements)
    // busco cual de los resultados es el que tiene el mayor valor.
    let maxValue = -999999999999;

    possibleMovements.forEach(pm => {
        if (pm.value >= maxValue) {
            maxValue = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovements.findIndex(s => s.value == maxValue);

    //console.table(table)

    let result;
    result = {
        //num: possibleMovements[index].num,
        value: possibleMovements[index].value,
        from_row: possibleMovements[index].from_row,
        from_col: possibleMovements[index].from_col,
        to_row: possibleMovements[index].to_row,
        to_col: possibleMovements[index].to_col,
    }


    // devuelvo un json con los datos desde y hacia del movimiento de mayor valor
    //console.log("result: ", result)
    return result;
}

module.exports.moveColor = moveColor;
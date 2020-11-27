
var moveBlack = require('../strategies_colours/Black').moveBlack;
var moveWhite = require('../strategies_colours/White').moveWhite;
function move(data){

    if(data.actual_turn == 'black'){
        
        let result = moveBlack(data.board)
        
        return (JSON.stringify({
            action: 'move',
            data: {
                board_id: data.board_id,
                turn_token: data.turn_token,
                from_row: result.from_row,
                from_col: result.from_col,
                to_row: result.to_row,
                to_col: result.to_col,
            }
        }))

    }

    else if(data.actual_turn == 'white'){

        let result = moveWhite(data.board)

        return (JSON.stringify({
            action: 'move',
            data: {
                board_id: data.board_id,
                turn_token: data.turn_token,
                from_row: result.from_row,
                from_col: result.from_col,
                to_row: result.to_row,
                to_col: result.to_col,
            }
        }))
    }
}

module.exports.move = move;
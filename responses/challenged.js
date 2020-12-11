function challenged(board_id){
    return(JSON.stringify({
        action: 'accept_challenge',
        data: {
            board_id : board_id
        }
    }))
}

module.exports.challenged = challenged;
function challenged(data){
    return(JSON.stringify({
        action: 'accept_challenge',
        data: {
            username : 'Ema',
            board_id : data.board_id
        }
    }))
}

module.exports.challenged = challenged;
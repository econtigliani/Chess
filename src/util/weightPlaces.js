function placeWeight(col){
   return 7.5 - (Math.abs(col - 7.5))
}

module.exports.placeWeight = placeWeight
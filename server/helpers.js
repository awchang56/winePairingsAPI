var wineData = require('../pairingData/winePairings');
const Wine = require('../data/schema');

const getWinePairings = (ingredients) => {
  //create pairings array
  //for each ingredient
    //query Wine for document(s) that match that ingredient
    //add document to pairings array
  //return pairings array

  let pairings = [];

  Wine.find()
    .where('food').in(ingredients)
    .select('varietals pairingStrength')
    .then(possiblePairings => {
      let strongPairings = possiblePairings.filter(pairings => {
        return pairings.pairingStrength === 'strong'
      });

      let strongPairingsIntersection = _.pluck(strongPairings, 'varietals');

      let weakPairings = possiblePairings.filter(pairings => {
        return pairings.pairingStrength === 'weak'
      });

    })
}



module.exports = getWinePairings;
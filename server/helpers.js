const _ = require('underscore');

const countVarietalsBeer = (arr, varietalCount) => {
  return _.chain(arr)
    .pluck('varietals')
    .map(category => {
        return Object.keys(category)
      })
    .flatten()
    .each(category => {
        varietalCount[category]++;
    })
}

const bestPairing = (varietalCount) => {
  let bestPair = '';
  let maxValue = 0;
  for (key in varietalCount) {
    if (varietalCount[key] > maxValue) {
      bestPair = key;
      maxValue = varietalCount[key];
    }
  }
  return bestPair;
}

const countVarietalsWine = (arr, varietalCount, pairingStrength, weight) => {
  return _.chain(arr)
    .filter(pairings => {
      return pairings.pairingStrength === pairingStrength;
    })
    .pluck('varietals')
    .map(category => {
      return Object.keys(category)
    })
    .flatten()
    .each(category => {
      varietalCount[category] += weight;
    })
}

module.exports.countVarietalsBeer = countVarietalsBeer;
module.exports.bestPairing = bestPairing;
module.exports.countVarietalsWine = countVarietalsWine;

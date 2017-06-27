const express = require('express');
const Wine = require('./database/schema');
const bodyParser = require('body-parser')
const pairingData = require('../pairingData/winePairings');
const _ = require('underscore');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log('Server connection established. Listening on port 3000');
});

app.post('/pairing', (req, res) => {

    let ingredients = ['pasta', 'clam'];
    Wine.find()
    .where('food').in(ingredients)
    .select('varietals pairingStrength')
    .then(possiblePairings => {
      let varietalCount = Object.assign({}, pairingData.categories);

      const countVarietals = (arr, pairingStrength, weight) => {
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
      countVarietals(possiblePairings, 'strong', 2);
      countVarietals(possiblePairings, 'weak', 1);


      let bestPair = '';
      let maxValue = 0;
      for (key in varietalCount) {
        if (varietalCount[key] > maxValue) {
          bestPair = key;
          maxValue = varietalCount[key];
        }
      }

      console.log('bestPair: ', pairingData.wineData[bestPair]);
      res.send(pairingData.wineData[bestPair]);
    });

})

app.get('/upload', (req, res) => {
  pairingData.pairingData.forEach(food => {
    new Wine(food).save(err => {
      if (err) {console.log('err: ', err)}
      else { console.log('food saved')}
    })
  })
  res.send('done');
})











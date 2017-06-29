const express = require('express');
const Beverage = require('./database/schema');
const bodyParser = require('body-parser')
const pairingData = require('../pairingData/winePairings');
const pairingDataBeer = require('../pairingData/beerPairings');
const _ = require('underscore');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(4000, () => {
  console.log('Server connection established. Listening on port 4000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post('/beerpairing', (req, res) => {
  let ingredients = req.body.ingredients;
  Beverage.Beer.find()
  .where('food').in(ingredients)
  .select('varietals')
  .then(possiblePairing => {
    let beerIds = Object.assign({}, pairingDataBeer.beerId);
    possiblePairing = possiblePairing[0].varietals
    for (let key in possiblePairing) {
      possiblePairing = possiblePairing[key];
    }
    possiblePairing = possiblePairing[Math.floor(Math.random() * 2)]
    let id = beerIds[possiblePairing];
    res.send(id.toString());
  })
})

app.post('/pairing', (req, res) => {
    const ingredients = req.body.ingredients;
    Beverage.Wine.find()
    .where('food').in(ingredients)
    .select('varietals pairingStrength')
    .then(possiblePairings => {
      let varietalCount = Object.assign({}, pairingData.categories);
      console.log("TEST");
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
    new Beverage.Wine(food).save(err => {
      if (err) {console.log('err: ', err)}
      else { console.log('food saved')}
    })
  })

  pairingDataBeer.pairingDataBeer.forEach(food => {
    new Beverage.Beer(food).save(err => {
      if (err) {console.log('err: ', err)}
      else { console.log('food saved')}
    })
  })

  res.send('done');
})











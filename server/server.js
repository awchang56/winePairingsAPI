const express = require('express');
const Beverage = require('./database/schema');
const bodyParser = require('body-parser')
const pairingData = require('../pairingData/winePairings');
const pairingDataBeer = require('../pairingData/beerPairings');
const _ = require('underscore');
const cors = require('cors');
const countVarietals = require('./helpers.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('Server connection established. Listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/beerpairing', (req, res) => {
  let ingredients = req.body.ingredients.map(food => {
    return food.replace(/[^\w\s]/gi, '')
  });
  Beverage.Beer.find()
  .where('food').in(ingredients)
  .then(possiblePairing => {
    let varietalCount = Object.assign({}, pairingDataBeer.categories);
    countVarietals.countVarietalsBeer(possiblePairing, varietalCount);
    let bestPair = countVarietals.bestPairing(varietalCount);
    let randomInt0And1 = Math.round(Math.random());
    let bestBeerPair = pairingDataBeer.beerData[bestPair][randomInt0And1];
    res.send(pairingDataBeer.beerId[bestBeerPair].toString());
  });
});

app.post('/pairing', (req, res) => {
    let ingredients = req.body.ingredients.map(food => {
      return food.replace(/[^\w\s]/gi, '')
    });
    Beverage.Wine.find()
    .where('food').in(ingredients)
    .select('varietals pairingStrength')
    .then(possiblePairings => {
      let varietalCount = Object.assign({}, pairingData.categories);
      countVarietals.countVarietalsWine(possiblePairings, varietalCount, 'strong', 2);
      countVarietals.countVarietalsWine(possiblePairings, varietalCount, 'weak', 1);
      let bestPair = countVarietals.bestPairing(varietalCount);
      res.send(pairingData.wineData[bestPair]);
    });
});

app.get('/upload', (req, res) => {
  pairingData.pairingData.forEach(food => {
    new Beverage.Wine(food).save(err => {
      if (err) {console.log('err: ', err)}
      else { console.log('food saved')}
    })
  });

  pairingDataBeer.pairingDataBeer.forEach(food => {
    new Beverage.Beer(food).save(err => {
      if (err) {console.log('err: ', err)}
      else { console.log('food saved')}
    })
  });
  res.send('done');
});











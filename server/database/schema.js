const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pairings');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('mongoose database connection established');
});

const Schema = mongoose.Schema;

const wineSchema = new Schema({
  food: Array,
  varietals: Object,
  pairingStrength: {
    type: String,
    enum: ['strong', 'weak']
  }
});

const beerSchema = new Schema({
  //your schema here
})

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;
module.exports = Beer;
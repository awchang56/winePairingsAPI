//your code here
const cleanAndCrisp = ['American Amber Lager', 'Bohemian-Style Pilsner'];
const maltyAndSweet = ['English-Style Brown Ale', 'German-Style Hefeweizen'];
const fruityAndSpicy = ['Belgian-Style Saison', 'German-Style Hefeweizen'];
const sourTartAndFunky = ['American Brett', 'Belgian-Style Flanders'];
const hoppyAndBitter = ['American Pale Ale', 'American Brown Ale'];
const hoppyAndBitterDarkAndRoasty = ['American Black Ale', 'English-Style Brown Porter'];
const darkAndRoasty = ['Irish-Style Dry Stout', 'German-Style Schwarzbier'];
const varies = ['Belgian-Style Tripel', 'English-Style Pale Ale'];
const maltyAndSweetDarkAndRoasty = ['German-Style Bock', 'Baltic-Style Porter'];
const hoppyAndBitterFruityAndSweet = ['Imperial India Pale Ale', 'Belgian-Style Dubbel'];
const variess = ['British-Style Barley Wine', 'Belgian-Style Fruit Lambic'];


const redMeat = ['beef', 'lamb', 'venison', 'steak', 'stew', 'steaks'];
const curedMeat = ['salami', 'proscuitto', 'bresaola', 'bacon'];
const pork = ['pork', 'pork roast', 'pork tenderloin', 'pork chop', 'roast', 'tenderloin'];
const poultry = ['chicken', 'chickens', 'drumstick', 'drumsticks', 'duck', 'ducks', 'turkey', 'turkeys', 'quail', 'quails'];
const mollusk = ['oyster', 'oysters', 'mussels', 'clams', 'mussel', 'clam'];
const fish = ['tuna', 'cod', 'trout', 'bass', 'sashimi', 'salmon', 'tilapia', 'catfish', 'perch', 'halibut', 'branzino', 'fish'];
const shellfish = ['crab', 'crabs', 'king crab', 'king crab legs', 'lobster', 'lobsters', 'shrimp', 'langoustine', 'prawn', 'prawns'];
const softCheeseAndCream = ['brie', 'marscapone', 'creme fraiche', 'milk', 'creme', 'cream', 'yogurt', 'butter', 'sour cream'];
const pungentCheese = ['bleu', 'gorgonzola', 'stilton', 'roquefort', 'feta'];
const hardCheese = ['cheddar', 'pecorino', 'manchego', 'asiago', 'parmesean', 'mozarella'];
const alliums = ['onion', 'onions', 'shallot', 'shallots', 'garlic', 'scallions', 'scallion', 'green onion', 'green onions', 'spring onions'];
const greenVegetables = ['green beans', 'kale', 'lettuce', 'spinach', 'endives', 'arugla', 'cabbage', 'napa cabbage', 'bok choy', 'zucchini', 'zucchinis', 'broccoli', 'cucumber', 'cucumbers', 'cauliflower'];
const rootVegetables = ['turnip', 'turnips', 'butternut', 'pumpkin', 'pumpkins', 'delicata', 'carrot', 'carrots', 'radish', 'radishes', 'daikon'];
const nightshades = ['tomato', 'tomatoes', 'eggplant', 'eggplants', 'bell peppers', 'bell pepper'];
const funghi = ['crimini', 'maitake', 'chanterelle', 'chanterelles', 'mushroom', 'mushrooms', 'portabello', 'portabellos', 'enoki', 'enokis', 'king oyster', 'oyster'];
const nutsAndSeeds = ['peanuts', 'almonds', 'pecans', 'cashews', 'sesame'];
const beansAndPeas = ['lentils', 'navy', 'pinto', 'chickpeas'];
const blackPepper = ['black pepper', 'pepper'];
const redPepper = ['ancho', 'aleppo', 'chipotle', 'chili', 'chilis'];
const hotSpicy = ['taco', 'tacos', 'hot sauce', 'habanero', 'habaneros', 'sichuan', 'jalapeno', 'jalapenos', 'serranos', 'serrano', 'ghost peppers', 'ghost pepper'];
const herbs = ['thyme', 'oregano', 'basil', 'tarragon'];
const bakingSpices = ['cinnamon', 'clove', 'cloves', 'allspice', 'mace'];
const exoticAndAromaticSpices = ['anise', 'star anise', 'tumeric', 'saffron', 'fennel', 'ginger'];
const whiteStarches = ['flour', 'white rice', 'pasta', 'bread', 'tortilla', 'tortillas'];
const wholeWheatGrains = ['quinoa', 'farro', 'brown rice'];
const sweetStarchyVegetables = ['sweet potato', 'sweet potatoes', 'yucca', 'taro'];
const potato = ['potato', 'potatoes'];
const fruitAndBerries = ['strawberry', 'strawberries', 'apples', 'apple', 'orange', 'oranges', 'peach', 'peaches', 'grape', 'grapes', 'apricot', 'apricots', 'nectarine', 'nectarines', 'bananas', 'banana', 'pineapples', 'pineapple'];
const vanillaAndCaramel = ['creme brulee', 'ice cream', 'caramel', 'sugar', 'molasses', 'vanilla'];
const chocolateAndCoffee = ['chocolate', 'coffee'];



const beerData = {
  cleanAndCrisp: ['American Amber Lager', 'Bohemian-Style Pilsner'],
  maltyAndSweet: ['English-Style Brown Ale', 'German-Style Hefeweizen'],
  fruityAndSpicy: ['Belgian-Style Saison', 'German-Style Hefeweizen'],
  sourTartAndFunky: ['American Brett', 'Belgian-Style Flanders'],
  hoppyAndBitter: ['American Pale Ale', 'American Brown Ale'],
  hoppyAndBitterDarkAndRoasty: ['American Black Ale', 'English-Style Brown Porter'],
  darkAndRoasty: ['Irish-Style Dry Stout', 'German-Style Schwarzbier'],
  varies: ['Belgian-Style Tripel', 'English-Style Pale Ale'],
  maltyAndSweetDarkAndRoasty: ['German-Style Bock', 'Baltic-Style Porter'],
  hoppyAndBitterFruityAndSweet: ['Imperial India Pale Ale', 'Belgian-Style Dubbel'],
  variess: ['British-Style Barley Wine', 'Belgian-Style Fruit Lambic']
};

const beerId = {
  'American Amber Lager': 96,
  'Bohemian-Style Pilsner': 76,
  'English-Style Brown Ale': 12,
  'German-Style Hefeweizen': 48,
  'Belgian-Style Saison': 72,
  'American Brett': 27,
  'Belgian-Style Flanders': 57,
  'American Pale Ale': 25,
  'American Brown Ale': 37,
  'American Black Ale': 41,
  'English-Style Brown Porter': 18,
  'Irish-Style Dry Stout': 23,
  'German-Style Schwarzbier': 84,
  'Belgian-Style Tripel': 59,
  'English-Style Pale Ale': 1,
  'German-Style Bock': 88,
  'Baltic-Style Porter': 104,
  'Imperial India Pale Ale': 31,
  'Belgian-Style Dubbel': 58,
  'British-Style Barley Wine': 17,
  'Belgian-Style Fruit Lambic': 68
}

const pairingDataBeer = [
{food: redMeat, varietals: {sourTartAndFunky}},
{food: curedMeat, varietals: {fruityAndSpicy}},
{food: whiteStarches, varietals: {cleanAndCrisp}},
{food: beansAndPeas, varietals: {maltyAndSweet}},
{food: shellfish, varietals: {fruityAndSpicy}},
{food: fish, varietals: {fruityAndSpicy}},
{food: mollusk, varietals: {fruityAndSpicy}},
{food: poultry, varietals: {hoppyAndBitter}},
{food: softCheeseAndCream, varietals: {hoppyAndBitterDarkAndRoasty}},
{food: greenVegetables, varietals: {darkAndRoasty}},
{food: rootVegetables, varietals: {darkAndRoasty}},
{food: nightshades, varietals: {cleanAndCrisp}},
{food: funghi, varietals: {darkAndRoasty}},
{food: nutsAndSeeds, varietals: {cleanAndCrisp}},
{food: blackPepper, varietals: {darkAndRoasty}},
{food: redPepper, varietals: {maltyAndSweetDarkAndRoasty}},
{food: hotSpicy, varietals: {hoppyAndBitterFruityAndSweet}},
{food: herbs, varietals: {fruityAndSpicy}},
{food: bakingSpices, varietals: {fruityAndSpicy}},
{food: exoticAndAromaticSpices, varietals: {hoppyAndBitterFruityAndSweet}},
{food: wholeWheatGrains, varietals: {cleanAndCrisp}},
{food: sweetStarchyVegetables, varietals: {maltyAndSweet}},
{food: hardCheese, varietals: {varies}},
{food: pungentCheese, varietals: {varies}},
{food: chocolateAndCoffee, varietals: {maltyAndSweetDarkAndRoasty}},
{food: pork, varietals: {hoppyAndBitterFruityAndSweet}},
{food: vanillaAndCaramel, varietals: {variess}},
{food: fruitAndBerries, varietals: {varies}},
{food: potato, varietals: {variess}},
{food: alliums, varietals: {darkAndRoasty}},
];
module.exports.beerId = beerId
module.exports.pairingDataBeer = pairingDataBeer;
module.exports.beerData = beerData;
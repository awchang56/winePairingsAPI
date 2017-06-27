const boldRed = ['malbec', 'syrah', 'shiraz', 'mouvedre', 'pinotage', 'petite syrah', 'touriga nacional', 'cabernet sauvignon', 'bordeaux', 'red bordeaux', 'bordeaux blend', 'meritage'];
const mediumRed = ['merlot', 'sangiovese', 'zinfandel', 'cabernet franc', 'tempranillo', 'nebbiolo', 'barbera', 'cotes du rhone blend'];
const lightRed = ['pinot noir', 'grenache', 'st. laurent', 'carignan', 'counoise'];
const rose = ['provencal rose', 'white zinfandel', 'loire valley rose', 'pinot noir rose', 'syrah rose', 'garnacha rosado', 'bandol rose', 'tempranillo rose', 'saignee method rose'];
const richWhite = ['chardonnay', 'semillion', 'viognier', 'marsanne', 'rousanne'];
const lightWhite = ['sauvignon blanc', 'albarino', 'pinot blanc', 'vermentino', 'melon de bourgogne', 'gargenega', 'trebbiano', 'pinot gris', 'pinot grigio'];
const sparkling = ['champagne', 'prosecco', 'cremant', 'cava', 'metodo classico', 'sparkling wine', 'sparkling rose'];
const sweetWhite = ['moscato', 'riesling', 'chenin blanc', 'gewurztraminer', 'gruner veltliner', 'late harvest whites', 'alsacian pinot gris'];
const dessert = ['port', 'sherry', 'madeira', 'vin santo', 'muscat', 'px', 'pedro ximenez'];




const redMeat = ['beef', 'lamb', 'venison', 'steak', 'stew'];
const curedMeat = ['salami', 'proscuitto', 'bresaola', 'bacon'];
const pork = ['pork', 'pork roast', 'pork tenderloin', 'pork chop', 'roast', 'tenderloin'];
const poultry = ['chicken', 'duck', 'turkey', 'quail'];
const mollusk = ['oyster', 'mussel', 'clam'];
const fish = ['tuna', 'cod', 'trout', 'bass', 'sashimi', 'salmon', 'tilapia', 'catfish', 'perch', 'halibut', 'branzino'];
const shellfish = ['crab', 'king crab', 'lobster', 'shrimp', 'langoustine', 'prawn'];
const softCheeseAndCream = ['brie', 'marscapone', 'creme fraiche'];
const pungentCheese = ['bleu', 'gorgonzola', 'stilton', 'roquefort'];
const hardCheese = ['cheddar', 'pecorino', 'manchego', 'asiago', 'parmesean'];
const alliums = ['onion', 'shallot', 'garlic', 'scallions', 'green onion'];
const greenVegetables = ['green beans', 'kale', 'lettuce', 'spinach', 'endives', 'arugla', 'cabbage', 'napa cabbage', 'bok choy', 'zucchini', 'broccoli'];
const rootVegetables = ['turnip', 'butternut', 'pumpkin', 'delicata', 'carrot', 'radish', 'daikon'];
const nightshades = ['tomato', 'eggplant', 'bell pepper'];
const funghi = ['crimini', 'maitake', 'chanterelle', 'mushroom', 'portabello', 'enoki', 'king oyster', 'oyster'];
const nutsAndSeeds = ['peanuts', 'almonds', 'pecans', 'cashews', 'sesame'];
const beansAndPeas = ['lentils', 'navy', 'pinto', 'chickpeas'];
const blackPepper = ['black pepper', 'pepper'];
const redPepper = ['ancho', 'aleppo', 'chipotle', 'chili'];
const hotSpicy = ['hot sauce', 'habanero', 'sichuan', 'jalapeno', 'serrano', 'ghost pepper'];
const herbs = ['thyme', 'oregano', 'basil', 'tarragon'];
const bakingSpices = ['cinnamon', 'clove', 'allspice', 'mace'];
const exoticAndAromaticSpices = ['anise', 'star anise', 'tumeric', 'saffron', 'fennel', 'ginger'];
const whiteStarches = ['flour', 'white rice', 'pasta', 'bread', 'tortilla'];
const wholeWheatGrains = ['quinoa', 'farro', 'brown rice'];
const sweetStarchyVegetables = ['sweet potato', 'yucca', 'taro'];
const potato = ['potato'];
const fruitAndBerries = ['strawberry', 'apple', 'orange', 'peach', 'grape', 'apricot', 'nectarine', 'banana', 'pineapple'];
const vanillaAndCaramel = ['creme brulee', 'ice cream', 'caramel', 'sugar', 'vanilla'];
const chocolateAndCoffee = ['chocolate', 'coffee'];


const pairingData = [
{food: redMeat, varietals: {boldRed}, pairingStrength: 'strong'},
{food: redMeat, varietals: {mediumRed}, pairingStrength: 'weak'},
{food: curedMeat, varietals: {lightRed, sweetWhite}, pairingStrength: 'strong'},
{food: curedMeat, varietals: {boldRed, mediumRed, rose, sparkling, dessert}, pairingStrength: 'weak'},
{food: pork, varietals: {mediumRed}, pairingStrength: 'strong'},
{food: pork, varietals: {boldRed, rose, sparkling}, pairingStrength: 'weak'},
{food: poultry, varietals: {lightRed, richWhite}, pairingStrength: 'strong'},
{food: poultry, varietals: {mediumRed, rose, lightWhite, sparkling}, pairingStrength: 'weak'},
{food: mollusk, varietals: {sparkling}, pairingStrength: 'strong'},
{food: mollusk, varietals: {lightWhite}, pairingStrength: 'weak'},
{food: fish, varietals: {lightWhite}, pairingStrength: 'strong'},
{food: fish, varietals: {richWhite, sparkling}, pairingStrength: 'weak'},
{food: shellfish, varietals: {richWhite}, pairingStrength: 'strong'},
{food: shellfish, varietals: {rose, lightWhite, sweetWhite}, pairingStrength: 'weak'},
{food: softCheeseAndCream, varietals: {lightRed, richWhite}, pairingStrength: 'strong'},
{food: softCheeseAndCream, varietals: {mediumRed, rose, lightWhite, sparkling, sweetWhite, dessert}, pairingStrength: 'weak'},
{food: pungentCheese, varietals: {mediumRed, dessert}, pairingStrength: 'strong'},
{food: pungentCheese, varietals: {boldRed, rose, lightWhite, sparkling, sweetWhite}, pairingStrength: 'weak'},
{food: hardCheese, varietals: {boldRed}, pairingStrength: 'strong'},
{food: hardCheese, varietals: {mediumRed, rose, richWhite, sparkling}, pairingStrength: 'weak'},
{food: alliums, varietals: {mediumRed}, pairingStrength: 'strong'},
{food: alliums, varietals: {boldRed, lightRed, rose, richWhite, lightWhite, sparkling, sweetWhite}, pairingStrength: 'weak'},
{food: greenVegetables, varietals: {lightWhite}, pairingStrength: 'strong'},
{food: greenVegetables, varietals: {sparkling}, pairingStrength: 'weak'},
{food: rootVegetables, varietals: {rose}, pairingStrength: 'strong'},
{food: rootVegetables, varietals: {richWhite, sweetWhite}, pairingStrength: 'weak'},
{food: nightshades, varietals: {mediumRed}, pairingStrength: 'strong'},
{food: nightshades, varietals: {boldRed, rose, sweetWhite}, pairingStrength: 'weak'},
{food: funghi, varietals: {mediumRed, lightRed, richWhite}, pairingStrength: 'strong'},
{food: funghi, varietals: {boldRed}, pairingStrength: 'weak'},
{food: nutsAndSeeds, varietals: {sweetWhite}, pairingStrength: 'strong'},
{food: nutsAndSeeds, varietals: {lightRed, rose, richWhite, lightWhite, sparkling}, pairingStrength: 'weak'},
{food: beansAndPeas, varietals: {lightWhite}, pairingStrength: 'strong'},
{food: beansAndPeas, varietals: {mediumRed, rose, sparkling}, pairingStrength: 'weak'},
{food: blackPepper, varietals: {boldRed}, pairingStrength: 'strong'},
{food: blackPepper, varietals: {mediumRed}, pairingStrength: 'weak'},
{food: redPepper, varietals: {mediumRed}, pairingStrength: 'strong'},
{food: redPepper, varietals: {boldRed, rose, lightWhite, sparkling, sweetWhite}, pairingStrength: 'weak'},
{food: hotSpicy, varietals: {sweetWhite}, pairingStrength: 'strong'},
{food: hotSpicy, varietals: {lightWhite, sparkling}, pairingStrength: 'weak'},
{food: blackPepper, varietals: {boldRed}, pairingStrength: 'strong'},
{food: blackPepper, varietals: {mediumRed}, pairingStrength: 'weak'},
{food: herbs, varietals: {lightWhite}, pairingStrength: 'strong'},
{food: herbs, varietals: {mediumRed, lightRed, rose, richWhite}, pairingStrength: 'weak'},
{food: bakingSpices, varietals: {dessert}, pairingStrength: 'strong'},
{food: bakingSpices, varietals: {mediumRed, rose, sweetWhite}, pairingStrength: 'weak'},
{food: exoticAndAromaticSpices, varietals: {mediumRed, sweetWhite}, pairingStrength: 'strong'},
{food: exoticAndAromaticSpices, varietals: {lightRed, rose, sparkling}, pairingStrength: 'weak'},
{food: whiteStarches, varietals: {boldRed, mediumRed, lightRed, rose, richWhite, lightWhite, sparkling, sweetWhite, dessert}, pairingStrength: 'weak'},
{food: wholeWheatGrains, varietals: {sweetWhite}, pairingStrength: 'strong'},
{food: wholeWheatGrains, varietals: {lightRed, rose, richWhite}, pairingStrength: 'weak'},
{food: sweetStarchyVegetables, varietals: {sweetWhite}, pairingStrength: 'strong'},
{food: sweetStarchyVegetables, varietals: {rose}, pairingStrength: 'weak'},
{food: potato, varietals: {boldRed, mediumRed, lightRed, rose, richWhite, lightWhite, sparkling, sweetWhite}, pairingStrength: 'weak'},
{food: fruitAndBerries, varietals: {sweetWhite}, pairingStrength: 'strong'},
{food: fruitAndBerries, varietals: {sparkling, dessert}, pairingStrength: 'weak'},
{food: vanillaAndCaramel, varietals: {dessert, sweetWhite}, pairingStrength: 'weak'},
{food: chocolateAndCoffee, varietals: {dessert}, pairingStrength: 'strong'},
];


const wineData = {
   boldRed : ['malbec', 'syrah', 'shiraz', 'mouvedre', 'pinotage', 'petite syrah', 'touriga nacional', 'cabernet sauvignon', 'bordeaux', 'red bordeaux', 'bordeaux blend', 'meritage'],
 mediumRed : ['merlot', 'sangiovese', 'zinfandel', 'cabernet franc', 'tempranillo', 'nebbiolo', 'barbera', 'cotes du rhone blend'],
 lightRed : ['pinot noir', 'grenache', 'st. laurent', 'carignan', 'counoise'],
 rose : ['provencal rose', 'white zinfandel', 'loire valley rose', 'pinot noir rose', 'syrah rose', 'garnacha rosado', 'bandol rose', 'tempranillo rose', 'saignee method rose'],
 richWhite : ['chardonnay', 'semillion', 'viognier', 'marsanne', 'rousanne'],
 lightWhite : ['sauvignon blanc', 'albarino', 'pinot blanc', 'vermentino', 'melon de bourgogne', 'gargenega', 'trebbiano', 'pinot gris', 'pinot grigio'],
 sparkling : ['champagne', 'prosecco', 'cremant', 'cava', 'metodo classico', 'sparkling wine', 'sparkling rose'],
 sweetWhite : ['moscato', 'riesling', 'chenin blanc', 'gewurztraminer', 'gruner veltliner', 'late harvest whites', 'alsacian pinot gris'],
 dessert : ['port', 'sherry', 'madeira', 'vin santo', 'muscat', 'px', 'pedro ximenez']
}

let categories = {  boldRed: 0,
                    mediumRed: 0,
                    lightRed: 0,
                    rose: 0,
                    richWhite: 0,
                    lightWhite: 0,
                    sparkling: 0,
                    sweetWhite: 0,
                    dessert: 0
                  };
Object.keys(wineData).forEach(type => {
  categories[type] = 0;
});

// console.log(categories);

module.exports.categories = categories;
module.exports.pairingData = pairingData;
module.exports.wineData = wineData;


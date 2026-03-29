export const CATEGORIES = [
  'Produce',
  'Bakery',
  'Deli',
  'Dairy',
  'Meat & Seafood',
  'Frozen',
  'Pantry',
  'Beverages',
  'Snacks',
  'Household',
  'Health & Beauty',
  'Other',
];

const dictionary = new Map([
  // Produce
  ['apple', 'Produce'], ['apples', 'Produce'], ['avocado', 'Produce'], ['avocados', 'Produce'],
  ['banana', 'Produce'], ['bananas', 'Produce'], ['basil', 'Produce'], ['bean sprouts', 'Produce'],
  ['beetroot', 'Produce'], ['berries', 'Produce'], ['blueberries', 'Produce'], ['blueberry', 'Produce'],
  ['bok choy', 'Produce'], ['broccoli', 'Produce'], ['brussels sprouts', 'Produce'],
  ['cabbage', 'Produce'], ['capsicum', 'Produce'], ['carrot', 'Produce'], ['carrots', 'Produce'],
  ['cauliflower', 'Produce'], ['celery', 'Produce'], ['cherry tomatoes', 'Produce'],
  ['chilli', 'Produce'], ['chillies', 'Produce'], ['coriander', 'Produce'], ['corn', 'Produce'],
  ['cucumber', 'Produce'], ['cucumbers', 'Produce'], ['eggplant', 'Produce'],
  ['fennel', 'Produce'], ['fruit', 'Produce'], ['garlic', 'Produce'], ['ginger', 'Produce'],
  ['grapes', 'Produce'], ['green beans', 'Produce'], ['herbs', 'Produce'],
  ['kale', 'Produce'], ['kiwi', 'Produce'], ['kiwifruit', 'Produce'],
  ['leek', 'Produce'], ['leeks', 'Produce'], ['lemon', 'Produce'], ['lemons', 'Produce'],
  ['lettuce', 'Produce'], ['lime', 'Produce'], ['limes', 'Produce'],
  ['mandarin', 'Produce'], ['mandarins', 'Produce'], ['mango', 'Produce'], ['mangoes', 'Produce'],
  ['melon', 'Produce'], ['mint', 'Produce'], ['mixed salad', 'Produce'], ['mushroom', 'Produce'],
  ['mushrooms', 'Produce'], ['nectarine', 'Produce'], ['nectarines', 'Produce'],
  ['onion', 'Produce'], ['onions', 'Produce'], ['orange', 'Produce'], ['oranges', 'Produce'],
  ['parsley', 'Produce'], ['parsnip', 'Produce'], ['peach', 'Produce'], ['peaches', 'Produce'],
  ['pear', 'Produce'], ['pears', 'Produce'], ['peas', 'Produce'], ['pineapple', 'Produce'],
  ['plum', 'Produce'], ['plums', 'Produce'], ['potato', 'Produce'], ['potatoes', 'Produce'],
  ['pumpkin', 'Produce'], ['radish', 'Produce'], ['raspberry', 'Produce'], ['raspberries', 'Produce'],
  ['red onion', 'Produce'], ['rocket', 'Produce'], ['rosemary', 'Produce'],
  ['salad', 'Produce'], ['salad mix', 'Produce'], ['shallot', 'Produce'], ['shallots', 'Produce'],
  ['snow peas', 'Produce'], ['spinach', 'Produce'], ['spring onion', 'Produce'],
  ['spring onions', 'Produce'], ['squash', 'Produce'], ['strawberries', 'Produce'],
  ['strawberry', 'Produce'], ['sweet potato', 'Produce'], ['sweet potatoes', 'Produce'],
  ['thyme', 'Produce'], ['tomato', 'Produce'], ['tomatoes', 'Produce'],
  ['watermelon', 'Produce'], ['zucchini', 'Produce'], ['vegetables', 'Produce'],

  // Bakery
  ['bagel', 'Bakery'], ['bagels', 'Bakery'], ['baguette', 'Bakery'],
  ['bread', 'Bakery'], ['bread rolls', 'Bakery'], ['brioche', 'Bakery'],
  ['buns', 'Bakery'], ['ciabatta', 'Bakery'], ['crumpets', 'Bakery'],
  ['croissant', 'Bakery'], ['croissants', 'Bakery'], ['dinner rolls', 'Bakery'],
  ['english muffins', 'Bakery'], ['flatbread', 'Bakery'], ['focaccia', 'Bakery'],
  ['hot cross buns', 'Bakery'], ['muffin', 'Bakery'], ['muffins', 'Bakery'],
  ['naan', 'Bakery'], ['pita', 'Bakery'], ['pita bread', 'Bakery'],
  ['rolls', 'Bakery'], ['rye bread', 'Bakery'], ['scones', 'Bakery'],
  ['sourdough', 'Bakery'], ['toast', 'Bakery'], ['tortilla', 'Bakery'],
  ['tortillas', 'Bakery'], ['white bread', 'Bakery'], ['wholemeal bread', 'Bakery'],
  ['wraps', 'Bakery'],

  // Deli
  ['bacon', 'Deli'], ['chorizo', 'Deli'], ['cold cuts', 'Deli'],
  ['devon', 'Deli'], ['dip', 'Deli'], ['dips', 'Deli'],
  ['ham', 'Deli'], ['hummus', 'Deli'], ['kabana', 'Deli'],
  ['olives', 'Deli'], ['pastrami', 'Deli'], ['pepperoni', 'Deli'],
  ['prosciutto', 'Deli'], ['salami', 'Deli'], ['smoked salmon', 'Deli'],
  ['turkey breast', 'Deli'], ['turkey slices', 'Deli'],

  // Dairy
  ['butter', 'Dairy'], ['cheddar', 'Dairy'], ['cheese', 'Dairy'],
  ['cottage cheese', 'Dairy'], ['cream', 'Dairy'], ['cream cheese', 'Dairy'],
  ['custard', 'Dairy'], ['double cream', 'Dairy'],
  ['eggs', 'Dairy'], ['egg', 'Dairy'], ['feta', 'Dairy'], ['feta cheese', 'Dairy'],
  ['greek yoghurt', 'Dairy'], ['haloumi', 'Dairy'], ['halloumi', 'Dairy'],
  ['milk', 'Dairy'], ['mozzarella', 'Dairy'], ['parmesan', 'Dairy'],
  ['ricotta', 'Dairy'], ['shredded cheese', 'Dairy'],
  ['sliced cheese', 'Dairy'], ['sour cream', 'Dairy'], ['thickened cream', 'Dairy'],
  ['whipping cream', 'Dairy'], ['yoghurt', 'Dairy'], ['yogurt', 'Dairy'],
  ['almond milk', 'Dairy'], ['oat milk', 'Dairy'], ['soy milk', 'Dairy'],

  // Meat & Seafood
  ['beef', 'Meat & Seafood'], ['beef mince', 'Meat & Seafood'],
  ['chicken', 'Meat & Seafood'], ['chicken breast', 'Meat & Seafood'],
  ['chicken drumsticks', 'Meat & Seafood'], ['chicken thigh', 'Meat & Seafood'],
  ['chicken thighs', 'Meat & Seafood'], ['chicken wings', 'Meat & Seafood'],
  ['fish', 'Meat & Seafood'], ['fish fillets', 'Meat & Seafood'],
  ['lamb', 'Meat & Seafood'], ['lamb chops', 'Meat & Seafood'],
  ['mince', 'Meat & Seafood'], ['pork', 'Meat & Seafood'],
  ['pork chops', 'Meat & Seafood'], ['prawns', 'Meat & Seafood'],
  ['salmon', 'Meat & Seafood'], ['salmon fillet', 'Meat & Seafood'],
  ['sausages', 'Meat & Seafood'], ['sausage', 'Meat & Seafood'],
  ['seafood', 'Meat & Seafood'], ['shrimp', 'Meat & Seafood'],
  ['steak', 'Meat & Seafood'], ['tuna steak', 'Meat & Seafood'],
  ['turkey', 'Meat & Seafood'], ['veal', 'Meat & Seafood'],

  // Frozen
  ['fish fingers', 'Frozen'], ['frozen berries', 'Frozen'],
  ['frozen chips', 'Frozen'], ['frozen peas', 'Frozen'],
  ['frozen pizza', 'Frozen'], ['frozen vegetables', 'Frozen'],
  ['frozen fruit', 'Frozen'], ['frozen meals', 'Frozen'],
  ['ice cream', 'Frozen'], ['ice blocks', 'Frozen'],
  ['nuggets', 'Frozen'], ['chicken nuggets', 'Frozen'],
  ['party pies', 'Frozen'], ['pies', 'Frozen'],
  ['sausage rolls', 'Frozen'], ['waffles', 'Frozen'],
  ['frozen pastry', 'Frozen'], ['puff pastry', 'Frozen'],
  ['spring rolls', 'Frozen'], ['dim sims', 'Frozen'],
  ['gelato', 'Frozen'], ['sorbet', 'Frozen'],

  // Pantry
  ['baked beans', 'Pantry'], ['baking powder', 'Pantry'],
  ['baking soda', 'Pantry'], ['bbq sauce', 'Pantry'],
  ['bicarbonate of soda', 'Pantry'], ['black beans', 'Pantry'],
  ['brown sugar', 'Pantry'], ['canned tomatoes', 'Pantry'],
  ['canned tuna', 'Pantry'], ['cereal', 'Pantry'],
  ['chickpeas', 'Pantry'], ['chilli flakes', 'Pantry'],
  ['chocolate', 'Pantry'], ['cocoa', 'Pantry'],
  ['coconut cream', 'Pantry'], ['coconut milk', 'Pantry'],
  ['coconut oil', 'Pantry'], ['cooking oil', 'Pantry'],
  ['cornflour', 'Pantry'], ['couscous', 'Pantry'],
  ['curry paste', 'Pantry'], ['curry powder', 'Pantry'],
  ['dijon mustard', 'Pantry'], ['dried herbs', 'Pantry'],
  ['flour', 'Pantry'], ['gravy', 'Pantry'],
  ['honey', 'Pantry'], ['hot sauce', 'Pantry'],
  ['jam', 'Pantry'], ['ketchup', 'Pantry'],
  ['lentils', 'Pantry'], ['maple syrup', 'Pantry'],
  ['mayonnaise', 'Pantry'], ['mayo', 'Pantry'],
  ['mustard', 'Pantry'], ['noodles', 'Pantry'],
  ['nutella', 'Pantry'], ['oats', 'Pantry'],
  ['olive oil', 'Pantry'], ['oregano', 'Pantry'],
  ['paprika', 'Pantry'], ['passata', 'Pantry'],
  ['pasta', 'Pantry'], ['pasta sauce', 'Pantry'],
  ['peanut butter', 'Pantry'], ['penne', 'Pantry'],
  ['pepper', 'Pantry'], ['quinoa', 'Pantry'],
  ['rice', 'Pantry'], ['salt', 'Pantry'],
  ['soy sauce', 'Pantry'], ['spaghetti', 'Pantry'],
  ['spices', 'Pantry'], ['stock', 'Pantry'],
  ['stock cubes', 'Pantry'], ['sugar', 'Pantry'],
  ['sweet chilli sauce', 'Pantry'], ['tabasco', 'Pantry'],
  ['tahini', 'Pantry'], ['tinned tomatoes', 'Pantry'],
  ['tomato paste', 'Pantry'], ['tomato sauce', 'Pantry'],
  ['tuna', 'Pantry'], ['vanilla', 'Pantry'],
  ['vanilla extract', 'Pantry'], ['vegetable oil', 'Pantry'],
  ['vinegar', 'Pantry'], ['worcestershire sauce', 'Pantry'],
  ['yeast', 'Pantry'], ['icing sugar', 'Pantry'],
  ['self raising flour', 'Pantry'], ['plain flour', 'Pantry'],
  ['breadcrumbs', 'Pantry'], ['panko', 'Pantry'],

  // Beverages
  ['beer', 'Beverages'], ['coffee', 'Beverages'],
  ['coke', 'Beverages'], ['cordial', 'Beverages'],
  ['energy drink', 'Beverages'], ['green tea', 'Beverages'],
  ['juice', 'Beverages'], ['apple juice', 'Beverages'],
  ['orange juice', 'Beverages'], ['kombucha', 'Beverages'],
  ['lemonade', 'Beverages'], ['mineral water', 'Beverages'],
  ['red wine', 'Beverages'], ['soft drink', 'Beverages'],
  ['sparkling water', 'Beverages'], ['tea', 'Beverages'],
  ['tea bags', 'Beverages'], ['water', 'Beverages'],
  ['white wine', 'Beverages'], ['wine', 'Beverages'],
  ['coconut water', 'Beverages'], ['sports drink', 'Beverages'],

  // Snacks
  ['biscuits', 'Snacks'], ['cashews', 'Snacks'],
  ['chips', 'Snacks'], ['chocolate bar', 'Snacks'],
  ['chocolate chips', 'Snacks'], ['cookies', 'Snacks'],
  ['corn chips', 'Snacks'], ['crackers', 'Snacks'],
  ['dark chocolate', 'Snacks'], ['dried fruit', 'Snacks'],
  ['granola', 'Snacks'], ['granola bars', 'Snacks'],
  ['lollies', 'Snacks'], ['muesli bars', 'Snacks'],
  ['nuts', 'Snacks'], ['almonds', 'Snacks'],
  ['peanuts', 'Snacks'], ['walnuts', 'Snacks'],
  ['popcorn', 'Snacks'], ['pretzels', 'Snacks'],
  ['rice cakes', 'Snacks'], ['rice crackers', 'Snacks'],
  ['trail mix', 'Snacks'], ['muesli', 'Snacks'],

  // Household
  ['alfoil', 'Household'], ['aluminium foil', 'Household'],
  ['baking paper', 'Household'], ['bin bags', 'Household'],
  ['bin liners', 'Household'], ['bleach', 'Household'],
  ['cling wrap', 'Household'], ['cloths', 'Household'],
  ['detergent', 'Household'], ['dishwasher tablets', 'Household'],
  ['dishwashing liquid', 'Household'], ['dish soap', 'Household'],
  ['fabric softener', 'Household'], ['garbage bags', 'Household'],
  ['glad wrap', 'Household'], ['kitchen towel', 'Household'],
  ['laundry detergent', 'Household'], ['laundry powder', 'Household'],
  ['light bulb', 'Household'], ['matches', 'Household'],
  ['napkins', 'Household'], ['paper towel', 'Household'],
  ['paper towels', 'Household'], ['plastic wrap', 'Household'],
  ['sandwich bags', 'Household'], ['sponge', 'Household'],
  ['sponges', 'Household'], ['surface spray', 'Household'],
  ['tissues', 'Household'], ['toilet paper', 'Household'],
  ['wipes', 'Household'], ['zip lock bags', 'Household'],
  ['candles', 'Household'], ['batteries', 'Household'],

  // Health & Beauty
  ['body wash', 'Health & Beauty'], ['conditioner', 'Health & Beauty'],
  ['cotton balls', 'Health & Beauty'], ['cotton pads', 'Health & Beauty'],
  ['dental floss', 'Health & Beauty'], ['deodorant', 'Health & Beauty'],
  ['face wash', 'Health & Beauty'], ['floss', 'Health & Beauty'],
  ['hair ties', 'Health & Beauty'], ['hand sanitiser', 'Health & Beauty'],
  ['hand soap', 'Health & Beauty'], ['lip balm', 'Health & Beauty'],
  ['moisturiser', 'Health & Beauty'], ['mouthwash', 'Health & Beauty'],
  ['nail polish remover', 'Health & Beauty'], ['panadol', 'Health & Beauty'],
  ['plasters', 'Health & Beauty'], ['band aids', 'Health & Beauty'],
  ['razor', 'Health & Beauty'], ['razors', 'Health & Beauty'],
  ['shampoo', 'Health & Beauty'], ['shaving cream', 'Health & Beauty'],
  ['soap', 'Health & Beauty'], ['sunscreen', 'Health & Beauty'],
  ['tampons', 'Health & Beauty'], ['pads', 'Health & Beauty'],
  ['toothbrush', 'Health & Beauty'], ['toothpaste', 'Health & Beauty'],
  ['vitamins', 'Health & Beauty'],
]);

// Pre-sort entries by key length descending for substring matching
const sortedEntries = [...dictionary.entries()].sort((a, b) => b[0].length - a[0].length);

export function categorize(itemName) {
  const normalized = itemName.trim().toLowerCase();
  if (!normalized) return 'Other';

  // Exact match
  const exact = dictionary.get(normalized);
  if (exact) return exact;

  // Substring match (longest key first)
  for (const [key, category] of sortedEntries) {
    if (normalized.includes(key)) {
      return category;
    }
  }

  return 'Other';
}

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

for (let dataSets in donuts)
console.log(`The ${donuts[dataSets].type} flavored donut costs $${donuts[dataSets].cost}`);

donuts.forEach(function(donut){console.log(`The ${donut.type} flavored donut costs $${donut.cost}`)});




/*
Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
*/
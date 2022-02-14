

const conditionalSum = function(values, condition) {
  
  var newArray=[];
  if (values.length > 0 ) // checking if input is legit
  {
  if (condition === 'even') // testing for condition - can also use .filter
  {
  values.map(element => {if (element % 2 === 0) return newArray.push(element);}); // pushing elements into new array if it passes condition
  }
  else if (condition === 'odd')
  {
    values.map(element => {if (element % 2 === 1) return newArray.push(element);});
  
    }
    return newArray.reduce((a,b) => {return a+b;});} // returning sum of array that just passed teh condition

    else return 0;
  // Your code here
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
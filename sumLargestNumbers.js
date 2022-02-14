const sumLargestNumbers = function(data) {

var maxNumberOne, maxNumberTwo, indexNumberOne, indexNumberTwo; 

maxNumberOne = data.reduce( (a,b) => {return Math.max(a,b)}); // function to extract largest number
indexNumberOne = data.indexOf(maxNumberOne); //find index of that largest number
data.splice(indexNumberOne,1); // remove newly extracted numebr from the array to prep to find second slargest number
maxNumberTwo = data.reduce( (a,b) => {return Math.max(a,b)}); // finding second largets number
//indexNumberTwo = data.indexOf(maxNumberTwo); // finding index - optional



return maxNumberOne + maxNumberTwo;
}



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));




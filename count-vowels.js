const numberOfVowels = function(data) {

var vowelCounter = 0;
for (let element of data)
{
  if (element === 'a' || element === 'e' || element === 'o' || element === 'u' || element === 'i')
  vowelCounter++;

}
return vowelCounter;
  // Put your solution here
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
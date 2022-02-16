const camelCase = function(myString) {
let processedWord = [];
let finalArray = [];
myString = myString.trim(' '); // removing space at teh beggining and end if there is any
let splitString = myString.split(' '); // splitting string into array of words / disecting
finalArray.push(splitString[0]); // storing first element to result array as it doesnt need to be processed
for (let element = 1; element < splitString.length; element++)
{ let newArray = [];
  newArray = splitString[element].split(' '); // prepping each element for further disection
  for ( let chara = 0; chara < newArray.length; chara++) // preping to process each word
  { let processedLetter;
    let splitWord;
    splitWord = newArray[chara].split(''); //splitting each word into letters and storing result for further processing
    processedLetter = splitWord[0].toUpperCase();//prepararing alphabet to uppercase
    splitWord.splice(0,1,processedLetter); //removing original lowercase element at index 0 and replacing with newly processed upper case alphabet, pushing into the the same array at index 0
    processedWord.push(splitWord.join('')); // merging array contents ie letters
  }
}
finalArray.push(processedWord.join('')); // merging array contents ie words
return finalArray.join('');// merging with original item at index 0 in splitted array of words because first word dosent need to be processed
}
       
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
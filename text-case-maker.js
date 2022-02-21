/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/

const makeCase = function(myString, caseStyle) {
  myString = myString.trim(' ');
  let processedWord = [];
  let finalArray = [];
  let result;
  let splitString = myString.split(' '); // splitting string into array of words / disecting
   ///////////////////////////////////////////////// 
    if (caseStyle === 'camel'){
    //myString = myString.trim(' '); // removing space at teh beggining and end if there is any
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
  result = finalArray.join('');// merging with original item at index 0 in splitted array of words because first word dosent need to be processed
}
/////////////////////////////////////////////////
else if (caseStyle === 'pascal'){
  for (let element = 0; element < splitString.length; element++)
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
result = finalArray.join('');// merging with original item at index 0 in splitted array of words because first word dosent need to be processed
}
/////////////////////////////////////////////////
else if (caseStyle === 'snake'){
  let originalCharacter = " ";
  let replacementCharacter = "_";
  result  = myString.replaceAll(originalCharacter,replacementCharacter);
}
/////////////////////////////////////////////////
else if (caseStyle === 'kebab'){
  let originalCharacter = " ";
  let replacementCharacter = "-";
  result  = myString.replaceAll(originalCharacter,replacementCharacter);
}
/////////////////////////////////////////////////
else if (caseStyle === 'title'){
for (let element = 0; element < splitString.length; element++)
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
finalArray.push(processedWord.join(' ')); // merging array contents ie words
result = finalArray.join('');// merging with original item at index 0 in splitted array of words because first word dosent need to be processed
}
/////////////////////////////////////////////////
else if (caseStyle === 'vowel'){
  for (let element = 0; element < splitString.length; element++)
{ let newArray = [];
newArray = splitString[element].split(' '); // prepping each element for further disection
for ( let chara = 0; chara < newArray.length; chara++) // preping to process each word
{ 
let processedLetter;
let splitWord;
splitWord = newArray[chara].split(''); //splitting each word into letters and storing result for further processing
for (let character of splitWord)
  if (character === 'i' || character === 'a' || character === 'o' || character === 'e' || character === 'u')
  { let vowelIndex = splitWord.indexOf(character);
    processedLetter = character.toUpperCase();
    splitWord.splice(vowelIndex,1,processedLetter); //removing original lowercase element at index 0 and replacing with newly processed upper case alphabet, pushing into the the same array at index 0
processedWord.push(splitWord.join('')); // merging array contents ie letters
}}
result = processedWord.join(' ');// merging with original item at index 0 in splitted array of words because first word dosent need to be processed
}
}
/////////////////////////////////////////////////
else if (caseStyle === 'consonant'){
  for (let element = 0; element < splitString.length; element++)
  { let newArray = [];
  newArray = splitString[element].split(' '); // prepping each element for further disection
  for ( let chara = 0; chara < newArray.length; chara++) // preping to process each word
  { let processedLetter;
  let splitWord;
  splitWord = newArray[chara].split(''); //splitting each word into letters and storing result for further processing
  for (let character of splitWord)
  {
   if (character !== 'i' && character !== 'a' && character !== 'o' && character !== 'e' && character !== 'u') 
  {processedLetter = character.toUpperCase();//prepararing alphabet to uppercase
  let consonantIndex = splitWord.indexOf(character);
  splitWord.splice(consonantIndex,1,processedLetter);}} //removing original lowercase element at index 0 and replacing with newly processed upper case alphabet, pushing into the the same array at index 0
  processedWord.push(splitWord.join('')); // merging array contents ie letters
  }}
  finalArray.push(processedWord.join(' ')); // merging array contents ie words
  result = finalArray.join('');// merging with original item at index 0 in splitted array of words because first word dosent need to be processed
}
/////////////////////////////////////////////////
else if (typeof caseStyle === 'object'){
  for (let element = 0; element < splitString.length; element++)
  { let newArray = [];
  newArray = splitString[element].split(' '); // prepping each element for further disection
  for ( let chara = 0; chara < newArray.length; chara++) // preping to process each word
  { let processedLetter;
  let splitWord;
  splitWord = newArray[chara].split(''); //splitting each word into letters and storing result for further processing
  for (let character of splitWord)
  {
  processedLetter = character.toUpperCase();//prepararing alphabet to uppercase
  let consonantIndex = splitWord.indexOf(character);
  splitWord.splice(consonantIndex,1,processedLetter);} //removing original lowercase element at index 0 and replacing with newly processed upper case alphabet, pushing into the the same array at index 0
  processedWord.push(splitWord.join('')); // merging array contents ie letters
  }}
  finalArray.push(processedWord.join(' ')); // merging array contents ie words
  result = finalArray.join('');// merging with original item at index 0 in splitted array of words because first word dosent need to be processed
  let originalCharacter = ' ';
  let replacementCharacter = '_';
  result = result.replaceAll(originalCharacter,replacementCharacter)
}
/////////////////////////////////////////////////
return result;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
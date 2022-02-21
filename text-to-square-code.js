/* output:
clu hlt io 
*/

const squareCode = function(message) {
  message = message.replaceAll(" ",""); // trimming all spaces
  let squareLength = Math.ceil(Math.sqrt(message.length)); //sqrt to find no. of rows and items in each row to make it a square
  let counterOne = 0;
  let counterTwo;
  let arrayOne = []; // empty array to push three sets
  while (counterOne < squareLength) // loop to create three sets of letters (reference to string passed in teh first call)
  { counterTwo = counterOne; // nesting second loop
    let arrayTwo = []; // empty array to push three letters to make one set
      while (counterTwo < message.length)
      { 
        arrayTwo.push(message[counterTwo]); // pushing each letter on the index in the array
        counterTwo = counterTwo + squareLength; //incrementing by squareLength to acheive square formatting for a 8 letters string
      }
      let data = arrayTwo.join(''); // to remove spaces to acheive expected output
      arrayOne.push(data); //pushing each set created in nested while loop to an array
      counterOne++;
  }
  console.log(arrayOne.join(' ')); // to remove spaces to acheive expected output
};
squareCode("chill out");
squareCode("feed the dog");
squareCode("have a nice day");
squareCode("if man was meant to stay on the ground god would have given us roots");
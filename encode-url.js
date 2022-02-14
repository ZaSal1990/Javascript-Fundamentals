




const urlEncode = function(myString) {
  // Put your solution here
let a = " ";
let b = "%20";
myString = myString.trim(' ');
newString  = myString.replaceAll(' ','%20');
 return newString;
          
          }
          
          console.log(urlEncode(" Light housee Labs "));
          console.log(urlEncode("Lighthouse Labs"));
          console.log(urlEncode(" Light house Labs "));
          console.log(urlEncode("blue is greener than purple for sure"));
          
// if teh sample array contains over 40% of same data, throw that as a result


const checkAir = function (samples, threshold) {
 let cleanCounter = 0;
 let dirtyCounter = 0;
 let result;
 let cleanArray
 let dirtyArray;
 cleanArray = samples.filter( element => element === 'clean'); //separting clean samples into new array
 dirtyArray = samples.filter( element => element === 'dirty');//seperating dirty sample into new array
 if (cleanArray.length > dirtyArray.length) // assessing the % of samples
 {
  result = cleanArray.length/samples.length;
  if (result > threshold)
  {return 'Polluted';}
  else {return 'clean';}
 }

 else if (cleanArray.length < dirtyArray.length)
 {
  result = dirtyArray.length/samples.length;
  if (result > threshold)
  {return 'Polluted';}
  else {return 'clean';}
 }

};









console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
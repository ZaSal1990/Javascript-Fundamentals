const repeatNumbers = function(data) {
  let result = '';// making sure string is returned if values need to be printed back-to-back 
for (let element of data)
{
  let repeater = element[0].toString(); // changing to string to ensure multiple printing
  let counter = element[1];

  for (let print = 0; print < counter; print ++)
  {
    result = result.concat(repeater); // multiple printing
  }
  result += ', '
  }
  return result; 
}; 

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
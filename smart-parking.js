/*
There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

Regular cars can only park in R spots.
Small cars can park in R or S spots.
Motorcycles can park in R, S, or M spots.

An upper-case letter means that the particular spot is AVAILABLE, 
while lower-case letters mean that the spot is UNAVAILABLE.
expected output:

[4, 0]
false
[3, 5]
while x = index of spot in 
*/




const whereCanIPark = function (spots, vehicle) {
let result = [];
let falsy = 'false';
if (vehicle === 'regular')
{ 
  for (let array of spots)
  {
    
    for (let item of array)
    {
      if (item === 'R')
      {
        let xCoordinate, yCoordinate;
        yCoordinate = spots.indexOf(array);
        xCoordinate = array.indexOf(item);
        result.push(xCoordinate, yCoordinate);
        return result;
      }
    }
  }
}

else if (vehicle === 'small')
{ 
  for (let array of spots)
  {
    
    for (let item of array)
    {
      if (item === 'S')
      {
        let xCoordinate, yCoordinate;
        yCoordinate = spots.indexOf(array);
        xCoordinate = array.indexOf(item);
        result.push(xCoordinate, yCoordinate);
        return result;
      }
    }
  }
}
else if (vehicle === 'motorcycle')
{ 
  for (let array of spots)
  {
    
    for (let item of array)
    {
      if (item === 'M')
      {
        let xCoordinate, yCoordinate;
        yCoordinate = spots.indexOf(array);
        xCoordinate = array.indexOf(item);
        result.push(xCoordinate, yCoordinate);
        return result;
      }
    }
  }
}

};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
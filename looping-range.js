//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.
//The function should return an empty array [] if given incorrect parameters, such as:
//start, end, or step being undefined
//start being greater than end
//step being 0, or negative




function range(start,end,step)
{ let newArray = [];
  if (typeof start != 'undefined' && typeof end != 'undefined' && typeof step != 'undefined')
  {
    
    if (start <= end && step > 0)
    {
      
      let startPoint = start;

      while(end >= startPoint)
      {
        newArray.push(startPoint);
        startPoint += step; }
      return newArray; }
    else if (start > end || step <= 0)
    { return newArray; } }

  else return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
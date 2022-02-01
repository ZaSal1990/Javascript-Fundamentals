/*
calculateRectangleArea(length, width) : l x w
calculateTriangleArea(base, height) : b x h / 2
calculateCircleArea(radius) : Pi x r sq


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
*/


function calculateRectangleArea(length, width)
{ if (length > 0 && width > 0)
  { let result = length*width;
    return result; }

}

function calculateTriangleArea(base, height)
{
  if (base > 0 && height > 0)
  { let result = (base * height) / 2
    return result; }
}

function calculateCircleArea(radius)
{
  if (radius > 0)
  { let PI = Math.PI;
  let result = PI * radius * radius;
  return result; }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
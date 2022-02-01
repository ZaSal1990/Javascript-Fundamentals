var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code her
var NewArray=test.filter(element=>{if (element % 3 === 0) return element;});
for (let item in NewArray)
console.log(NewArray[item]+100);
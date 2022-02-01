var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals=bills.map(element=>element*0.15);// filtered array to totals with 15% tip without having to modify original array bills
console.log(Number.parseFloat(totals.reduce((pre,post)=>pre+post)).toFixed(2));//used .reduce to add all array elements
//used parseFloat and .toFixed to ensure 2 decimal point accuracy

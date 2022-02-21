let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (pre, cur) { // pre 0, cur 1
    let key = cur[property];
    if (!pre[key]) { 
      pre[key] = [] // creating empty array
    }
    pre[key].push(cur)
    return pre
  }, {})
}

let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople)
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
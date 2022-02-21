/* Output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/

const dataSample1 = 
[
{name: "Samuel", course: "iOS"},
{name: "Victoria", course: "Web"},
{name: "Karim", course: "Web"},
{name: "Donald", course: "Web"}
]

const dataSample2 =
[
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]


const organizeInstructors = function(object, property) {
    return object.reduce(function (pre, cur) { // pre 0, cur 1
      let key = cur[property];
      if (!pre[key]) { 
        pre[key] = [] // creating empty array
      }
      pre[key].push(cur)
      return pre
    }, {})
  }


console.log(organizeInstructors(dataSample1,'course'));
console.log(organizeInstructors(dataSample2,'course'));


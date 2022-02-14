const instructorWithLongestName = function(instructors) {
  
 
  {
    return   instructors.reduce( (longestName, nameString) => longestName > nameString ? longestName : nameString)
  }
  // compaaring elements length and returning 
  // Put your solution here
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


/*
Expected Output:
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/
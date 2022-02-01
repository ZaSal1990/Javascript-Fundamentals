//Program to opnly throw seletive items from an array
//when stations passed as argument, only outputs a location with more than 20 ///capacity and either a school or a community center
// output format ['Bright Lights Elementary', 'Moose Mountain Community Centre']



let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]


function chooseStations(argument){

  let votingStations = [];
  let capacityIndex = 1;
  let categoryIndex = 2;
  let locationIndex = 0;

  for (let i = 0; i < argument.length; i++)
  {
    if (argument[i][capacityIndex] > 20)
      {
      if (argument[i][categoryIndex] === 'school' || argument[i][categoryIndex] === 'community centre')
        
        { votingStations.push(argument[i][locationIndex]); }
    }

  }

  return votingStations;
}

let result = chooseStations(stations);
console.log(result);
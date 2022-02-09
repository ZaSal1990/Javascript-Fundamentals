



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

//const metric = 'redness';

function judgeVegetable (vegetables,metric)
{
    return   vegetables.reduce( (winner, contestant) =>
                            contestant[metric] > winner[metric] ? contestant : winner).submitter
  }
  /*
  let dataStorage;
  let highestranking;
  let result;

  if (metric === 'redness')
  {
    highestranking = vegetables.map(item => item.redness);
    highestRanking = highestranking.reduce((acc, val) => { return acc > val ? acc : val});
    for (const iterator in vegetables)
    { dataStorage = vegetables[iterator];
      if (dataStorage.redness === highestRanking)
      return dataStorage.submitter;
    } 
  }
  else if (metric === 'plumpness')
  {
    highestranking = vegetables.map(item => item.plumpness);
    highestRanking = highestranking.reduce((acc, val) => { return acc > val ? acc : val});
    for (const iterator in vegetables)
    { dataStorage = vegetables[iterator];
      if (dataStorage.plumpness === highestRanking)
      return dataStorage.submitter; }
  } */


//console.log(judgeVegetable(vegetables,'plumpness'));
console.log(judgeVegetable(vegetables,'plumpness'));



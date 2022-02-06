



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
  let dataStorage;
  let maxSubmitter;
if (metric === 'redness')
{
  dataStorage = vegetables.map(item=>{return item.redness;})
  console.log(dataStorage);
  let maxRanking=Math.max(...dataStorage)
  maxSubmitter=vegetables.map(element=>{ if (element.redness === maxRanking) return element.submitter});
}
else if (metric === 'plumpness')
{
  dataStorage = vegetables.map(item=>{return item.plumpness;})
  console.log(dataStorage);
  let maxRanking=Math.max(...dataStorage)
  maxSubmitter=vegetables.map(element=>{ if (element.plumpness === maxRanking) return element.submitter});
}

maxSubmitter=maxSubmitter.filter(truthy=>truthy != undefined);
return maxSubmitter;

}

console.log(judgeVegetable(vegetables,'plumpness'))








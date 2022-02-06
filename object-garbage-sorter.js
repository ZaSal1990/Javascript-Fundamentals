// function adding to the object based on argument passed and returns the modified object

function smartGarbage(trash,bin)
{

if (trash === 'recycling')
  {
  bin.recycling++;
  }
  else if (trash === 'waste')
  {
  bin.waste++;
  }
  else if (trash === 'compost')
  {
  bin.compost++; 
  }

return bin;
}





console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));



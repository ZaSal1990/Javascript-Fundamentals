//For this challenge you'll have to implement a function called finalPosition(moves), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.
//
//Input: const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
//Output: [-1, 4]
//finalPosition(moves); //while move is an array of directions
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
function finalPosition(arg){
  let destination = [];
  let xMoves = 0;
  let yMoves = 0;
for (let direction of arg)
  {
      //console.log(direction)
      if (direction === 'north')
       { xMoves+=1; }
      else if (direction === 'south')
       { xMoves-=1; }
      else if (direction === 'east')
       { yMoves+=1; }
      else  if (direction === 'west')
       { yMoves-=1; }

     
  }
      destination.push(yMoves);
      destination.push(xMoves);
 return destination;
 
}
  console.log(finalPosition(moves));

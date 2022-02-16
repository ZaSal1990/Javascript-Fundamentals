// Use the value below whenever you need the value of Pi
//input comprise of inflatables of different shapes. Create formulas to precisely fill up gas for the volume
//For eg an inflatable duch comprises of two spaees and a cone




const PI = 3.14159 ;

const sphereVolume = function (radius) {
  
  let volume = 4/3 * PI * radius * radius * radius;
  return volume;
  // Code here! 4/3 PI * r * r * r
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = 1/3 * PI * radius * radius * height;
  return volume;
  // And here! 1/3 * PI * r * r * h
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let volume = (depth * width * height) 
  return volume;
  // Probably here too! b * h * H 
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = [];
for (let item of solids) // iterating through solids which is duck in this case
{
  if (item.type === 'sphere') // accessing ducks properties
  {
    volume.push(sphereVolume(item.radius))
  }
  else if (item.type  === 'cone')
  {
    volume.push(coneVolume(item.radius, item.height)) // pushing results into array to later add
  }

}
let totalVolume = volume.reduce((a,b) => (a + b)); // adding array elements
return totalVolume;
}





const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
//console.log(totalVolume(duck));
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
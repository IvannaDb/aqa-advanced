let radius = (Math.random()*20).toFixed(2)
console.log ('Random radius of cylinder is ', radius)
let height = (Math.random()*20).toFixed(2)
console.log ('Random height of cylinder is ', height)
const pi = Math.PI.toFixed(3)
const squareRadius = Math.pow(radius, 2)
const cylinderVolume = pi*squareRadius*height
console.log ('Calculated volume of the cylinder is ', cylinderVolume.toFixed(2))
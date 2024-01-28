const radius = (Math.random()*20).toFixed(2) // updated due to  comment 'use const'
console.log ('Random radius of cylinder is ', radius)
const height = (Math.random()*20).toFixed(2) // updated due to comment 'use const'
console.log ('Random height of cylinder is ', height)
const pi = Math.PI // updated due to  comment 'you don't need it. It PI, we should not modify it'

// updated due to  comment 'I would not create dedicated variable for this but if you want you can name it like radiusPoweredTo2'

//const radiusPoweredTo2 = Math.pow(radius, 2)
//const cylinderVolume = pi*radiusPoweredTo2*height

const cylinderVolume = pi*(Math.pow(radius, 2))*height //updated due to comment 
console.log ('Calculated volume of the cylinder is ', cylinderVolume.toFixed(2))
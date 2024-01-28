const pi = Math.PI   // updated due to  comment 'you don't need it. It PI, we should not modify it'
const radius = (Math.random()*20).toFixed(2)   // updated due to comment 'use const'
console.log ('Random radius of circle:', radius)
const circleArea = pi*(Math.pow(radius, 2))   // updated due to comment 'use const'
console.log ('Calculated area of the circle is', circleArea.toFixed(3))
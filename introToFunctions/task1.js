function calculateAreaOfRectangle(width, height) {
  const areaOfRectangle = width * height;
  return areaOfRectangle;
}
const result = calculateAreaOfRectangle(5, 10);
console.log('Result of calculating the area of rectangle with "Function declaration" is ', result);

function calculateAreaOfRectangle2(width, height) {
  const areaOfRectangle2 = width * height;
  return areaOfRectangle2;
}
console.log('Result of calculating the area of rectangle with "Function expression" is', calculateAreaOfRectangle2(3, 15));

const areaOfRectangle3 = (width, height) => width * height;
console.log('Result of calculating the area of rectangle with "Arrow function" is', areaOfRectangle3(2, 30));

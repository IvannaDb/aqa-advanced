const number = Math.round(Math.random() * 9) + 1;
console.log('The number is', number);
for (let i = 1; i <= 10; i++) {
  const multiplicationOfNumbers = number * i;
  const mathExpression = `${number} x ${i} = ${multiplicationOfNumbers}`;
  console.log(mathExpression);
}

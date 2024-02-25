const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (const number of numbers) {
  switch (true) {
    case number > 0:
      positiveCount++;
      break;
    case number < 0:
      negativeCount++;
      break;
    default:
      zeroCount++;
  }
}
console.log('Кількість позитивних чисел:', positiveCount);
console.log('Кількість негативних чисел:', negativeCount);
console.log('Кількість нульових чисел:', zeroCount);

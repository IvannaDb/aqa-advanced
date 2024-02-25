const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
// const numberListCopy = numbersList.concat([]) another way to copy
const numbersListCopy = [...numbersList];
numbersListCopy.sort((a, b) => a - b);
console.log(numbersList);
console.log('-------------------------------');
console.log(numbersListCopy);

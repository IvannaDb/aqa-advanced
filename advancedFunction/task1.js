// FIRST VARIANT
console.log('Using try..catch');
function handleNum(number, isEvenNumberCb, isOddNumberCb) {
  try {
    if (number % 2 === 0) {
      isEvenNumberCb(number);
    } else {
      throw new Error(`${number} is odd`);
    }
  } catch (e) {
    isOddNumberCb(e);
  }
}

function handleEven(number) {
  console.log(`${number} is even`);
}

function handleOdd(error) {
  console.log(error.message);
}

handleNum(5, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);

// SECOND VARIANT
console.log('Using if...else');
function handleNum2(number2, isEvenNumberCb2, isOddNumberCb2) {
  if (number2 % 2 === 0) {
    isEvenNumberCb2(number2);
  } else {
    isOddNumberCb2(number2);
  }
}

function handleEven2(number2) {
  console.log(`${number2} is even`);
}

function handleOdd2(number2) {
  console.log(`${number2} is odd`);
}

handleNum2(11, handleEven2, handleOdd2);
handleNum2(20, handleEven2, handleOdd2);

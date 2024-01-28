const number = Math.round(Math.random() * 9) + 1 
console.log ('The number is', number)
for (let i=1; i<=10; i++) {
    let multiplicationOfNumbers = number*i
    let mathExpression = `${number} x ${i} = ${multiplicationOfNumbers}`
    console.log (mathExpression)
}


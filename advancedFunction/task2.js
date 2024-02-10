// function countDown (num){
//     console.log(`Number is ${num}`)
//     for (let i=num;i>=0;i--){
//         console.log(i)
//     }
// }

// countDown(5)

function countDown(num){
    console.log(num)
    if(num > 0){
        countDown(num - 1)
    }
}

countDown(5)

// function isUserAdult(...ages) {
//     for (const age of ages) {
//         const isAdult=age>= 18
//         console.log(`Is this person ${age} years old an adult? ${isAdult}`);
//     }
// }
// isUserAdult(15, 25);

// function isUserAdult(age) {
//         const isAdult=age>= 18
//         console.log(`Is this person ${age} years old an adult? ${isAdult}`)
//     }
// isUserAdult(15)
// isUserAdult(25)

function isUserAdult(age) {
    return age >= 18;
}

console.log(isUserAdult(25)); 
console.log(isUserAdult(15)); 
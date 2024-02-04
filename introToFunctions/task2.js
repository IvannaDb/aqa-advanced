function isUserAdult(...ages) {
    for (const age of ages) {
        const isAdult=age>= 18
        console.log(`Is this person ${age} years old an adult? ${isAdult}`);
    }
}
isUserAdult(15, 25);
function divide (numerator, denominator) {
    try{
        if (denominator === 0) {
            throw new Error("Ділення на нуль недопустиме!")
        }
        if (typeof denominator !== 'number' || typeof numerator !== 'number') {
        throw new Error("Чисельник та знаменник повинні бути числами!")
        }
        const resultOfDivision = numerator/denominator
        return resultOfDivision

    } catch (error) { 
        console.log (error.message)  
        //throw error;
    } 
}
try {
    console.log(divide(35, 2))  
} catch (error) {
    console.log("Помилка виклику функції divide:", error.message)
} finally {
    console.log ('Робота завершена')
}
try { 
    console.log(divide(5, 0))  
} catch (error) {
    console.log("Помилка виклику функції divide:", error.message)
} finally {
    console.log ('Робота завершена')
}
try { 
    console.log(divide('a', 6))
} catch (error) {
    console.log("Помилка виклику функції divide:", error.message)
} finally {
    console.log ('Робота завершена')
}
try {
    console.log(divide(5, 'b'))
} catch (error) {
    console.log("Помилка виклику функції divide:", error.message)
}finally {
    console.log ('Робота завершена')
}
try {
    console.log(divide(5, 10))
} catch (error) {
    console.log("Помилка виклику функції divide:", error.message)
} finally {
    console.log ('Робота завершена')
} 


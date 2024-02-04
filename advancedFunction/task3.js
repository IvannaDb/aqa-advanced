function divide (numerator, denominator) {
    try{
        if (denominator === 0) {
            throw new Error("Ділення на нуль недопустиме!")
        }
        if (typeof denominator !== 'number' || typeof numerator !== 'number') {
        throw new Error("Чисельник та знаменник повинні бути числами!")
        }
        let resultOfDivision = numerator/denominator
        return resultOfDivision

    } catch (error) { 
        console.log (error.message)  
        //throw error;
    } 
}
try {
    console.log(divide(35, 2))  
    console.log(divide(5, 0))  
    console.log(divide('a', 6))
    console.log(divide(5, 'b'))
    console.log(divide(5, 10))
} catch (error) {
    console.log("Помилка виклику функції divide:", error.message)
} finally {
    console.log ('Робота завершена')
} 


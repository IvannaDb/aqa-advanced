// Завдання 1
// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та 
// кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд
function printTextAfterDelay(text, milliseconds) {
    setTimeout(function() {
        console.log(text);
    }, milliseconds);
}
printTextAfterDelay("This text will appear after 2000 milliseconds", 2000);
import chalk from "chalk"

const averageGrade = (Math.random()*100).toFixed(2)
console.log('Average Grade is', averageGrade)

switch (true){
    case averageGrade<60:
        console.log (chalk.bgRed('Незадовільно'));
        break;
    case averageGrade>=60 && averageGrade<=70:
        console.log (chalk.bgMagenta('Задовільно'));
        break;
    case averageGrade>=71 && averageGrade<=80:
        console.log (chalk.bgYellow('Добре'));
        break;
    case averageGrade>=81 && averageGrade<=90:
        console.log (chalk.bgYellowBright('Дуже добрe'));
        break;
    default: 
        console.log (chalk.bgGreen('Відмінно'));
}
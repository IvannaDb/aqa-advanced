import chalk from "chalk"

const averageGrade = (Math.random()*100).toFixed(2)
console.log('Average Grade is', averageGrade)

if (averageGrade<60) {
    console.log (chalk.bgRed('Незадовільно'))
} else if (averageGrade>=60 && averageGrade<=70) {
    console.log (chalk.bgMagenta('Задовільно'))
} else if (averageGrade>=71 && averageGrade<=80) {
    console.log (chalk.bgYellow('Добре'))
} else if (averageGrade>=81 && averageGrade<=90) {
    console.log (chalk.bgYellowBright('Дуже добрe'))
} else {
    console.log (chalk.bgGreen('Відмінно'))
}
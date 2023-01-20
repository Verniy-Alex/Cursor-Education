// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас
// повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..],
// [...]];

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getCorrectStudents(students) {
    return new Array(
        [students[0] + ' + ' + students[2]],
        [students[1] + ' + ' + [students[3]]],
        [students[4] + ' + ' + students[5]]
    )

}
console.log(getCorrectStudents(students));

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти
// будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена",
// "Теорія автоматів"], [...], [...]]
function studentsAndThemes(student, theme) {
    const completeStudents = getCorrectStudents(student)
    const completeTheme = theme;
    let result = [];
    for (let i = 0; i < completeStudents.length; i++) {
        result.push([completeStudents[i].join(''), completeTheme[i]])
    }
    return result
}
console.log(studentsAndThemes(students, themes));

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function studentsAndMarks(student, mark) {
    const students = student;
    const marks = mark;
    let result = []
    for (let i = 0; i < students.length; i++) {
        result.push([students[i], marks[i]])
    }
    return result
}
console.log(studentsAndMarks(students, marks));

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде
// нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія
// автоматів", 5], [...], [...]]

function randomScore(pair) {
    const finalPairAndScore = pair;
    const min = 1;
    const max = 5;
    for (let i = 0; i < finalPairAndScore.length; i++) {
        const randomScore = Math.floor(Math.random() * (max - min) + min)
        finalPairAndScore[i].push(Number(randomScore))
    }
    return finalPairAndScore
}
console.log(randomScore(studentsAndThemes(students, themes)));
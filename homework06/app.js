
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента. Зверніть увагу –
// назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
function getSubjects(students) {
    const newSubject = [];
    for (let key in students.subjects) {
        newSubject.push(key)
    }
    const subjectToUpperCase = newSubject.map((item) => {
        if (item.includes('_')) {
            item = item[0].toUpperCase() + item.slice(1);
            return item.replace('_', ' ')
        } else return item = item[0].toUpperCase() + item.slice(1);
    })
    console.log(subjectToUpperCase);
    return newSubject
}
getSubjects(students[0]);


// Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню
// оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. 

const getAverageMark = (students) => {
    const subjectMarks = [];
    for (let key in students.subjects) {
        subjectMarks.push(students.subjects[key])
    }
    const newSubjectMarks = subjectMarks.flat()
    const avarageMark =
        newSubjectMarks.reduce((acc, item) => acc + item, 0)
        / newSubjectMarks.length;

    return avarageMark.toFixed(2);
}
console.log(getAverageMark(students[0]));


// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya",
// "averageMark": 3.79} – яка повертає інформацію загального виду по переданому
// студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути
// виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = (students) => {

    students.avarageMark = getAverageMark(students);
    delete students.subjects
    return students

}
console.log(getStudentInfo(students[0]));

// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка
// повертає імена студентів у алфавітному порядку.

const getStudentsNames = (students) => {
    const resultNames = []
    for (let key in students) {
        resultNames.push(students[key].name)
    }
    resultNames.sort()

    return resultNames
}
console.log(getStudentsNames(students));

// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого
// студента зі списку по показнику середньої оцінки.
const getBestStudent = (students) => {
    for (let key in students) {
        students[key].avarageMark = getAverageMark(students[key])
    }
    const averageMarks = []
    for (let key in students) {
        averageMarks.push([students[key].name, students[key].avarageMark])
    }
    averageMarks.sort((a, b) => b[1] - a[1])
    const bestStudent = averageMarks[1][0]
    return bestStudent
}
console.log(getBestStudent(students));

// Cтворіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// повторень.
// const wordForCountLetters = prompt('Введіть слово для підрахунку кількості літер')
const calculateWordLetters = (word) => {
    const arrLetters = word.split('')
    const lettersObj = {}
    for (let letter of arrLetters) {
        lettersObj[letter] = lettersObj[letter] ? lettersObj[letter] + 1 : 1;
    }
    return lettersObj
}
console.log(calculateWordLetters('olala'));


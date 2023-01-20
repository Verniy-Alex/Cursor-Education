// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.sayHello()
//         this.getData()
//     }

//     sayHello() {
//         console.log('Hello World');
//     }
//     getData() {
//         console.log(new Date());

//     }
// }

// class Admin extends User {
//     constructor(name, age) {
//         super(name, age)
//     }
//     get name() {
//         console.log('My name is', this.name);
//     }
// }

// const user1 = new User('Alex', 22)
// const user2 = new Admin('Flex', 2)
// console.log(user1);
// console.log(user2);


// У стдентів повинні бути наступні властивості: university, course, fullName, вони
// передаються при створенні студента(в конструктор).

// Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
// м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
// курс, учбовий заклад та імені студента.

// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
// Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5,
// 4, 4, 5, 5]

// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6


class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;

        this.getInfo();
    }
    getInfo() {
        return `Студент ${this.course} курсу ${this.university} м.Одеса, ${this.fullName}`
    }

    get studentMarks() {
        return this.marks = 5;
    }
    set studentMarks(value) {
        this.marks = value;
        return this.marks
    }

    getAverageMark() {
        return this.marks
    }
}
const student1 = new Student('Вищої Школи Психотерапії', '1го', 'Остап Родоманський Бендер', [5, 4, 4, 5])
student1.marks = [5, 4, 4, 5, 5];

console.log(student1.getAverageMark());
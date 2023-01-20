// Створіть функцію getRandomArray(length, min, max) – яка повертає масив
// випадкових цілих чисел. У функції є параметри: length - довжина масиву, min –
// мінімальне значення цілого числа, max – максимальне значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
const randomArr = []
const getRandomArray = (length, min, max) => {
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.round(Math.random() * (max - min + 1) + min)
        randomArr.push(randomNumber)
    }
    return randomArr
}
console.log(`Згенерований масив з числами ${getRandomArray(15, 1, 100)}`);


// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх
// переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад: getAverage(6,
// 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
const getAverage = (...numbers) => {
    let arr = []
    for (const number of numbers) {
        if (Number.isInteger(number)) {
            arr.push(number);
        }
    }
    const result = arr.reduce((acc, num, index, arr) => {
        return acc + num / arr.length;
    }, 0);
    return result.toFixed(1);
}
console.log(`Середнє арифметичне всіх переданих значень ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел
// більших Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
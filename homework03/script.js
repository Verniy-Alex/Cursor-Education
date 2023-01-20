// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та
// виводить найбільшу цифру в цьому числі.
function getMaxDigit(...number) {
    return Math.max(...number)
}
console.log(getMaxDigit(1, 2, 3, 4, 6)); // ->6

// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та
// **. Використовуйте цикл

function pow(a = 2, b = 10) {
    let result = 0;
    for (let i = 0; i <= a; i++) {
        result = a * b
    }
    return result
}
console.log(pow()); // -> 20

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" ->
// "Влад", "вЛАД" -> "Влад" і так далі);
function upperName() {
    const name = 'влад'
    const resultName = name[0].toUpperCase() + name.slice(1)

    return resultName

};
console.log(upperName());

// Створити функцію, яка вираховує суму, що залишається після оплати податку від
// зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function selaryTax(item) {
    return Math.floor(item - item * (19.5 / 100))
}
console.log(selaryTax(1000));

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n)
}
console.log(getRandomNumber(1, 10));

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(str, a) {
    let value = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() == a) {
            value++
        }
    }
    return value
}
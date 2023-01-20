// Отримайте у користувача число(N) від якого ми будемо складати. Отримати
// число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!


// Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при
// конвертації в ціле число ми отримали NaN – це число нам не підходить)


// Отримайте у користувача число(M) до якого ми будемо складати (включно).
// Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
function getUserNumber() {
    const getNumberN = Number(prompt("Введіть число N: "));
    while (Number.isInteger(getNumberN) === false) {
        alert('Помилка')
        getNumberN = Number(prompt('Введіть цільне число'))
    }

    const getNumberM = Number(prompt('Введіть число М: '))
    while (Number.isInteger(getNumberM) === false) {
        alert('Помилка')
        getNumberM = Number(prompt('Введіть ціле число'))
    }


    // Отримайте у користувача булевий параметр(true/false), який підкаже нам чи
    // потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно.
    const missEvenNumber = confirm("Чи потрібно пропускати парні числа?");
    let sum = 0;
    for (let i = getNumberN; i <= getNumberM; i++) {
        if (missEvenNumber) {
            if ((i % 2) != 0) {
                sum = sum + i;
            }
        } else {
            sum = sum + i;
        }
    }

    console.log(sum);
}

getUserNumber()


const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки
// податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
// викликатись через call та працювати з даними через this
function getMyTaxes(salary) {
    const myTax = salary * this.tax;
    return myTax;
}
const TaxCountry = getMyTaxes.call(ukraine, 30000);
console.log(TaxCountry);

// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у
// середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
    const middleTax = this.tax * this.middleSalary
    return middleTax
}
const middleTaxesCountry = getMiddleTaxes.call(ukraine)
console.log(middleTaxesCountry);

// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього
// податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
// Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes() {
    const allTax = this.tax * this.middleSalary * this.vacancies
    return allTax
}
const resultAllTax = getTotalTaxes.call(ukraine)
console.log(resultAllTax);

// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: {
// salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary –
// генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в
// залежності від вибраної країни та значення salary.


function getMySalary() {
    const mySalary = {}
    const minSalary = 1500
    const maxSalary = 2000

    mySalary.salary = Math.floor((maxSalary - minSalary) * Math.random() + minSalary);
    mySalary.taxes = Number((this.tax * mySalary.salary))
    mySalary.profit = Number((mySalary.salary - mySalary.taxes))

    return mySalary.salary
}
setInterval(() => {
    console.log(getMySalary.call(ukraine));
}, 1000)


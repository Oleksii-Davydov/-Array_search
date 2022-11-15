const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(array);

//1. Знайти кількість та суму позитивних елементів.
function isPositiveNaN(value) {
    return value >= 0 ;
};
let result = array.reduce(function (sum, elem) {
    if (elem >= 0 ) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log('Знайти кількість та суму позитивних елементів: ',
    array.filter(isPositiveNaN).length, result);

//2. Знайти мінімальний елемент масиву та його порядковий номер
console.log('Знайти мінімальний елемент масиву та його порядковий номер: ',
    Math.min.apply(null, array), array.indexOf(Math.min.apply(null, array)));

//3. Знайти максимальний елемент масиву та його порядковий номер
console.log('Знайти максимальний елемент масиву та його порядковий номер: ',
    Math.max.apply(null, array), array.indexOf(Math.max.apply(null, array)));

//4. Визначити кількість негативних елементів.
function isnegativeNaN(value) {
    return value < 0;
};
console.log('Визначити кількість негативних елементів: ',
    array.filter(isnegativeNaN).length);

//5. Знайти кількість непарних позитивних елементів:

function isPositiveUnpairedNaN(value) {
    return value >= 0 && value%2 !== 0;
};
console.log('Знайти кількість непарних позитивних елементів: ',
    array.filter(isPositiveUnpairedNaN).length)

//6. Знайти кількість парних позитивних елементів.
function isPositivePairedNaN(value) {
    return value >= 0 && value%2 === 0;
};
console.log('Знайти кількість парних позитивних елементів: ',
    array.filter(isPositivePairedNaN).length)

//7. Знайти суму парних позитивних елементів.
let result1 = array.reduce(function (sum, elem) {
    if (elem >= 0 && elem%2===0) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log('Знайти суму парних позитивних елементів: ',result1)

//8. Знайти суму непарних позитивних елементів.
let result2 = array.reduce(function (sum, elem) {
    if (elem >= 0 && elem%2!==0) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log('Знайти суму непарних позитивних елементів: ',result2)

//9. Знайти добуток позитивних елементів
let result3 = array.reduce(function (mult, elem) {
    if (elem >= 0 ) {
        return mult * elem;
    } else {
        return mult;
    }
});
console.log('Знайти добуток позитивних елементів: ',result3)

//10. Знайти найбільший серед елементів масиву, ост альні обнулити.
let max = Math.max.apply(null, array)
const result4 = array.map(v => v == max ? v : 0);
console.log('Знайти найбільший серед елементів масиву, ост альні обнулити: ',result4);
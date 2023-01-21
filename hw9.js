const myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveArr = [];

// Знайти суму та кількість позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
let number = 0;
let sum = 0;
let prod = 1;
let min = myArr[0];
let max = myArr[0];
let maxInd = myArr.indexOf;
let minInd = myArr.indexOf;

for (let a = 0; a < myArr.length; a++) {
    if (myArr[a] > max) {
        max = myArr[a]
    }
    if (myArr[a] < min) {
        min = myArr[a]
    }
    if (myArr[a] > 0) {
        positiveArr.push(myArr[a]);
        number = number + 1;
    }
    maxInd = myArr.indexOf(max);
    minInd = myArr.indexOf(min);
}
for (const a of positiveArr) {
    sum = sum + a;
    prod = prod * a;
}

console.log(positiveArr)
console.log(`Max element is ${max}; min element is ${min}.`)
console.log(`Max element index is ${maxInd}; min element index is ${minInd}.`)
console.log(`There are ${number} elements above zero, and their sum is ${sum}.`)
console.log(`Their product is ${prod}`)

// Визначити кількість негативних елементів.
function negative(a) {
    return a < 0;
}
negativeArr = myArr.filter(negative);
console.log(`There are ${negativeArr.length} elements below zero.`);

// Знайти кількість непарних odd позитивних елементів.
// Знайти кількість парних even позитивних елементів.
let evenPositive = 0;
let evenPositiveSum = 0;
let oddPositive = 0;
let oddPositiveSum = 0;
for (const a of positiveArr) {
    if (a % 2 === 0) {
        evenPositive++;
        evenPositiveSum = evenPositiveSum + a;
    } else {
        oddPositive++;
        oddPositiveSum = oddPositiveSum + a;
    }
}
console.log(`There are ${evenPositive} double and ${oddPositive} odd elements above zero.`)
console.log(`The sum of double elements is ${evenPositiveSum}.`)
console.log(`The sum of odd elements is ${oddPositiveSum}.`)

// Знайти найбільший серед елементів масиву, остальні обнулити.
let maxNumber = myArr[0];
let maxIndex = 0;
for (let a = 0; a < myArr.length; a++) {
    if (myArr[a] > maxNumber) {
        maxNumber = myArr[a];
        myArr[maxIndex] = 0;
        maxIndex = a;
    } else {
        myArr[a] = 0;
    }
}
console.log(myArr);
let n = +prompt('Введите число');

let numString = String(n);
let numCount = numString.length;
let summ = 0;
let numRev = '';

for (let i = 0; i < numString.length; i++) {
    console.log(+numString[i]);
    summ += +numString[i];
}

for (let i = numString.length -1; i >= 0; i--) {
    numRev += numString[i];
}

console.log('Исходное значение: ' + n + ', количество цифр: ' + numCount + ', сумма цифр: ' + summ + ', в обратном порядке: ' + numRev + ' ');


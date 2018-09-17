// Задание №1
var a, b;

function getRandomArbitrary(a, b) {
    return Math.floor(Math.random() * (a - b)) + b;
}

console.log(a = getRandomArbitrary(0, 1000));

function splitToDigits(number) {
    var digits = [];
    while (number) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    return digits;
}

var digits = splitToDigits(a);

var num = {
    hud: 'Сотни: ' + digits[2],
    dec: 'Десятки: ' + digits[1],
    uni: 'Единицы: ' + digits[0]
};

if(a > 999)console.log('Число > 999');

for (var prop in num) {
    console.log(num[prop]);
}

// Задание №2
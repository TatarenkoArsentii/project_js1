/* let pricePen = 10;
let priceNoteBook = 27;
let countPen = prompt("Введите кол-во");
let countNoteBook = prompt("Введите кол-во");
let sumNoteBook = countNoteBook * priceNoteBook;
let sumPen = countPen * pricePen;
let total = sumNoteBook + sumPen;
let discount = 0.02;
let totalDiscount = total - total * discount;
if (total > 500) {
  console.log(`${totalDiscount} грн.`);
} else {
  console.log(`${total} грн.`);
}

let num = prompt("Введите число");
console.log(num);

console.log(`${Math.trunc(num)} грн. ${Math.round((num % 1) * 100)} коп.`); */

let a = 10,
  b = 20,
  c = a - b,
  d = c,
  result = c + d;

console.log(result);
console.log("------------------------------------------------");

let num = 100;
num += 7;
num -= 18;
num *= 10;
num /= 15;
num++;
num--;

let userAge = prompt("Введите ваш возраст");

if (userAge >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("несовершеннолетний");
}
console.log("------------------------------------------------");

let num1 = prompt("Введите число"),
  rate = prompt("введите степень");
(pow = num1 ** 2), (pow2 = Math.pow(num1, rate));

console.log(pow);
console.log(pow2);
console.log("------------------------------------------------");

let monthNumber = prompt("Введите номер мессяца");

if (monthNumber == 1 || monthNumber == 12 || monthNumber == 2) {
  console.log("Зима");
} else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
  console.log("Весна");
} else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
  console.log("Лето");
} else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
  console.log("Осень");
} else {
  console.log("Такого месяца нет");
}

console.log("------------------------------------------------");

let a1 = Number(prompt("введите число a")),
  b1 = Number(prompt("введите число b"));

if (a1 <= 1 && b1 > 5) {
  console.log(a1 + b1);
} else {
  console.log(a1 - b1);
}

console.log("------------------------------------------------");

let price = 100,
  amount = prompt("Введите кол-во"),
  discount1 = 0.02,
  discount2 = 0.03,
  sum = price * amount,
  sumWithDiscount;

if (sum > 500 && sum <= 800) {
  sumWithDiscount = sum * 0.98;
} else if (sum > 800) {
  sumWithDiscount = sum * 0.97;
} else {
  sumWithDiscount = sum;
}
console.log(sumWithDiscount);

console.log("------------------------------------------------");

let x = prompt("Введите координату Х"),
  y = prompt("Введите координату Y"),
  r = prompt("Введите радиус");

if (x ** 2 + y ** 2 > r ** 2) {
  console.log("точка принадлежит внешней части круга");
} else if (x ** 2 + y ** 2 < r ** 2) {
  console.log("точка принадлежит внутренней части круга");
} else {
  console.log("точка находится на окружности");
}
console.log("------------------------------------------------");

let num2 = prompt("Введите число");

console.log(String(num2)[0]);
console.log(num2 % 10);

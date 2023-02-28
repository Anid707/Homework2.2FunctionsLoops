// Задание 2
// Перепишите код с использованием тернарного оператора
// let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }
let country = 'Sweden';
let access = country == 'Sweden' ? true : false;
console.log(access);

// Задание 2
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.
let num = 10;
for (let i = 1; i <= 10; i++){
    num++;
}
console.log(num + " шт.");

// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

for (let i = 1; i <= 10; i+2){
    let number = prompt("Please enter a number");
    let message = number == 10 ? console.log("Равно 10") : console.log("Не равно 10");
}

// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
let number1 = prompt("Please enter a number 1");
for (let n = 0; n <= Number(number1); n++){
    if(Number(number1) < 100){
        console.log(n ** 2);
    } else break;
}

// Задание 5
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». 
// Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
for (let i = 1; i < 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    } else if (i%5 == 0){
        console.log("Buzz");
    } else if (i%3 == 0){
        console.log("Fizz");
    } 
}


// Задание 6
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }
let i = 0;
while (i < 3){
    alert(`number ${i}!`);
    i++;
}


// Задание 7
// Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).
let firstNum = prompt("Please enter the first number");
let secondNum = prompt("Please enter the second number");
firstNum = Number(firstNum);
secondNum = Number(secondNum);
console.log(squareOfNum(firstNum, secondNum));

function squareOfNum(a, b) {
    for (let n = a; n <= b; n++){
        if(b < 100){
            console.log(n ** 2);
        } else break;
    }
}


// Задание 8
// Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"
function getRandomRGB(){
    let a = getRandomInteger(0, 255);
    let b = getRandomInteger(0, 255);
    let c = getRandomInteger(0, 255);
    console.log(`rgb(${a}, ${b}, ${c})`);
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
getRandomRGB();

// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию


// Задание 9
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

function integerDecimal(n){
    for (let i = 1; i <= n;){
        if (i%1 !== 0){
            console.log(`${i} decimal`);
        } else {
            console.log(`${i} integer`);
        }
        i += 0.5;
    }
}
integerDecimal(10);


// Задание 7
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.
let examGrade1 = prompt("Введите Ваш балл за экзамен (от 0 до 100)");
let projectNum1 = prompt("Введите количество выполненных Вами проектов (от 0 и больше)");
gradeOverall(Number(examGrade1), Number(projectNum1));

function gradeOverall(examGrade, projectNum){
    let gpa;
    if (examGrade > 90 || projectNum > 10){
        gpa = 100;
    } else if (examGrade > 75 && projectNum >= 5){
        gpa = 90;
    } else if (examGrade > 50 && projectNum >= 2){
        gpa = 75;
    } else {
        gpa = 0;
    }
    alert("Ваш общий выпускной балл: " + gpa);
}

// Задание 8
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.
let daysNum = prompt("Введите Количество дней, на которые нужно арендовать авто");
let rentPerDay = 40;
autoRent(daysNum, rentPerDay);

function autoRent(daysNum1, rentPerDay){
    let sale;
    let daysNumber = Number(daysNum1);
    if (daysNumber >= 7){
        sale = 50;
    } else if (daysNumber >= 3){
        sale = 20;
    } else {
        sale = 0;
    } 
    let price = rentPerDay * daysNumber - sale;
    alert("Стоимость аренды автомобиля составит: " + "$" + price);
}


// // УРОК 1

// // Задание №1

// let Tc = prompt('Введите температут по Цельсию');
// let Tf = (9 / 5) * Tc + 32;
// alert(Tf);

// // Задание №2

// let userName = 'Василий';
// let admin = userName;
// console.log(admin);

// // Задание №3

// /*
// 1. К числу 1000 мы "прибавляем" (конкатенируем) строку 108
// 2. Получаем результат 1000108
// */
// let sum = 1000 + '108'
// console.log(sum);

// // Задание №4

// /*
// async
// Атрибут async не тормазит загрузку html пока браузер читает все теги <script>, загрузка идёт параллельно. 
// Тормажение загрузки html идёт в момент пока браузер выполняет все скрипты.

// defer
// Атрибут defer не тормазит загрузку html, пока браузер читает теги <script>, загрузка идёт параллельно.
// Выполнение скриптов идёт после того как весь html был загружен.
// */

// // ------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------------------

// // УРОК 2

// // В данном кейсе мы приравниваем переменную "c" к переменной "a". Изначально перменная "a" равно 1 и в момент приравнивания прибавляем к "a" 1 и "a" равняется 2.
// // Увеличение на 1 идёт сразу, т.к. унарный плюс стоит спереди
// let a = 1,
//     b = 1,
//     c,
//     d;
// c = ++a;
// alert(c); //ответ: 2

// // В этом кейсе мы также прибавляем к переменной 1, но уже не моментально, т.к. ++ стоят сзади
// // d равен 1, т.к. на момент присваивания "d" к "b", "b" равна 1
// d = b++;
// alert(d); //ответ: 1


// // В рамках этого кейса мы ранее уже прибавляли 2 к a и теперь ещё раз прибавляем к a 1 и получается, что a = 3
// // и после этого мы в с складываем 2 + 3 и получаем 5
// c = 2 + ++a;
// alert(c); //ответ: 5


// // В рамках этого кейсе мы ранее уже прибавляли 1 к b и теперь b равна 2
// // и теперь к 2 мы прибаляем 2 которые в b
// d = 2 + b++;
// alert(d); //ответ: 4


// // изначаль a была равна 1. Затем мы дважды прибавили к a 1. Теперь a равна 3
// alert(a); //3

// // изначаль b была равна 1. Замем мы дважды прибавили к b 1. Теперь b равна 3
// alert(b); //3


// // Задание №2

// // Так как ранее мы уже использовали переменную a, я заменил её на y
// // Объявляем переменную y и присваиваем ей знайчение 2
// // Объявляем переменную x
// // В переменную x записываем выражение при котором к 1 мы прибавляем 4 и получаем 5
// // В скобках происходит умножение переменной "y" (которая равна 2) на 2 и одновременно эту же переменную мы умножаем на 2
// // в результате y = 4; x = 5

// let y = 2;
// let x = 1 + (y *= 2);
// console.log(y, x);


// // Задание №3

// let num1 = parseInt(prompt('Введите первое число'));
// let num2 = parseInt(prompt('Введите второе число'));
// let result = 0;
// if (num1 >= 0 && num2 >= 0) {
//     result = num1 - num2;
//     alert('Разница чисел составляет: ' + result);
// }

// if (num1 < 0 && num2 < 0) {
//     result = num1 * num2;
//     alert('Произведение чисел составляет: ' + result);
// }

// if ((num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0)) {
//     result = num1 + num2;
//     alert('Сумма чисел составляет: ' + result);
// }

// // Задание №4

// let i = getRandomInt(0, 15);
// console.log(i);

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1));
// }


// // Задание №5

// // Сложение
// function getSum(q, w) {
//     return q + w;
// }

// getSum(2, 8);

// // Вычитание
// function getSub(q, w) {
//     return q - w;
// }

// getSub(8, 2);

// // Умножение
// function getMult(q, w) {
//     return q * w;
// }

// getMult(4, 4);

// // Деление
// function getSplit(q, w) {
//     return q / w;;
// }

// getSplit(10, 2);


// // Задание №6

// function mathOperation(q, w, operation) {
//     switch (operation) {
//         case "sum":
//             return getSum(q, w,);
//         case "sub":
//             return getSub(q, w,);
//         case "split":
//             return getSplit(q, w,);
//         case "mult":
//             return getMult(q, w,);
//         default:
//             throw new Error("Операция " + operation + " не предусмотрена");
//     }
// }

// let calculation = mathOperation(2, 8, 'sum');
// alert(calculation);

// calculation = mathOperation(8, 2, 'sub');
// alert(calculation);

// calculation = mathOperation(4, 4, 'mult');
// alert(calculation);

// calculation = mathOperation(10, 2, 'split');
// alert(calculation);


// // ----------------------------------------------------------------------
// // ----------------------------------------------------------------------

// // УРОК 3

// // Задание №1

// function primeNumbers() {
//     let setNumbers = 100; 
//     let i = 2;
//     let primeArr = [ ];
//     while (i <= setNumbers) { 
//         if (i==2 || i==3 || i==5 || i==7) { 
//             primeArr.push(" " + i);
//             i++
//             continue;
//     } 
//     else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
//     i++;
//     continue;
//     }
//     primeArr.push(" " + i++);
//     }
//     console.log(primeArr);
//     };

//     primeNumbers();

// // Задание № 2

// function countBasketPrice() {
//     let basket = [
//     {
//     name: 'Product-1',
//     price: 100,
//     count: 1
//     },
//     {
//     name: 'Product-2',
//     price: 200,
//     count: 1
//     },
//     {
//     name: 'Product-3',
//     price: 300,
//     count: 1
//     },
//     ];
    
//     let sum = 0;
//     let quantity = 0;
//     let productName = 'В корзине находится товар следующих наименований: ';
//     for (let item of basket) {
//     sum += (item.price * item.count);
//     quantity += item.count;
//     productName += '(' + item.name + ') ';
//     }
//     var q = basket.length;
//     document.getElementById('basket').innerHTML = productName + '.' +
//     'Общее количество выбранных позиций товаров составляет, шт.: ' + quantity + '.' +
//     'Стоимость всех выбранных товаров в корзине составляет, руб.: ' + sum + '.';
//     };

//     countBasketPrice();

// // Задание № 3

// for (let i = 0; i <= 9; console.log(i++)) { }


// // Задание № 4

// for (let i = 'x'; i.length <= 20; i += 'x') {
//     console.log(i);
// }

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// УРОК 4

// Задание №1

let number;
let object = {};
function splitNumber(number) {
    number = prompt('Введите любое число от 0 до 999', '000');
    if (number > 999) {
        document.getElementById('question').innerHTML = 'Число не может превышать значения 999!';
        console.log(object);
    }
    else {
    object = number.split();
    object.hundred = number[0];
    object.dozen = number[1];
    object.unit = number[2];
    alert('Число ' + object + ' включает в себя: сотни: ' + object.hundred + '; десятки: ' + object.dozen + '; единицы: ' + object.unit + ';')
    console.log(object);
}}
splitNumber(number);
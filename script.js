var checker = true;

while(checker){
    var task = parseInt(prompt("Введите номер задания от 1 до 8. Прервать цикл можно после проверки 8го задания."));
    if (task<1 || task >8){
        alert("Неверный номер, введите от 1 до 8");
        continue;
    } else if(task==1){
        parametr = prompt("Введите число, куб которого необходимо вычислить: ");
        alert(pow3(parametr));
    } else if(task==2){
        parametr2 = prompt("Введите число, квадрат которого необходимо вычислить: ");
        alert(pow2(parametr2));
    } else if(task==3){
        alert("Сделайте функцию, которая возвращает сумму двух чисел.");
        num1 = parseInt(prompt("Введите первое число: "));
        num2 = parseInt(prompt("Введите второе число: "));
        alert(summTwoNumbers(num1, num2));
    } else if(task==4){
        alert("Сделайте функцию, которая отнимает от первого числа второе и делит на третье.");
        num1 = parseInt(prompt("Введите первое число: "));
        num2 = parseInt(prompt("Введите второе число: "));
        num3 = parseInt(prompt("Введите третье число: "));
        alert(funcTaskFour(num1, num2, num3));
    } else if(task==5){
        alert("Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.");
        num = parseInt(prompt("Введите число от 1 до 7: "));
        checkDay(num);
    } else if (task==6){
        alert("Написать функцию, которая принимает на вход два аргумента.\n Если аргументы больше нуля, возвращаем их сумму.\n Если оба меньше - разность. Если знаки разные - возвращаем 0")
        num1=parseInt(prompt("Введите первое число: "));
        num2=parseInt(prompt("Введите второе число: "));
        alert(checkTwoNumbers(num1, num2));
    } else if(task==7){
        alert("Написать функцию,\n которая принимает 3 аргумента - числа, найти среди них два максимальных, \n вывести в консоль");
        num1=parseInt(prompt("Введите первое число: "));
        num2=parseInt(prompt("Введите второе число: "));
        num3=parseInt(prompt("Введите третье число: "));
        findMaxNumbers(num1, num2, num3);
    } else if(task==8){
        alert("Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.");
        num1=parseInt(prompt("Введите первое число: "));
        num2=parseInt(prompt("Введите второе число: "));
        findMinNum(num1, num2);
        alert("Это было последнее задание!");
        checker = false;
    }

}

//todo Задание 1. Сделайте функцию, которая возвращает куб числа. Число передается параметром.

function pow3(parametr){
    var result = parametr*parametr*parametr;
    return(result);
}

/*parametr = prompt("Введите число, куб которого необходимо вычислить: ");


alert(pow3(parametr));*/

//todo Задание 2. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function pow2(parametr2){
    var result = parametr2*parametr2;
    return(result);
}

/*parametr2 = prompt("Введите число, квадрат которого необходимо вычислить: ");


alert(pow2(parametr2));*/

// todo Задание 3. Сделайте функцию, которая возвращает сумму двух чисел.

function summTwoNumbers(num1, num2){
    var result = num1+num2;
    return(result);
}

/*
alert("Сделайте функцию, которая возвращает сумму двух чисел.");
num1 = parseInt(prompt("Введите первое число: "));
num2 = parseInt(prompt("Введите второе число: "));


alert(summTwoNumbers(num1, num2));*/

// todo Задание 4. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function funcTaskFour(num1, num2, num3){
    var result = (num1-num2)/num3;
    return(result);
}

/*alert("Сделайте функцию, которая отнимает от первого числа второе и делит на третье.");
num1 = parseInt(prompt("Введите первое число: "));
num2 = parseInt(prompt("Введите второе число: "));
num3 = parseInt(prompt("Введите третье число: "));


alert(funcTaskFour(num1, num2, num3));*/

//todo Задание 5. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function checkDay(num){
    if(num==1){alert("Понедельник")}
        else if(num==2){alert("Вторник")}
            else if(num==3){alert("Среда")}
                else if(num==4){alert("Четверг")}
                    else if(num==5){alert("Пятница")}
                        else if(num==6){alert("Суббота")}
                            else if(num==7){alert("Воскресенье")}
                                else {alert("Неверный номер.")}
}

/*
alert("Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.");
num = parseInt(prompt("Введите число от 1 до 7: "));

checkDay(num);*/

//todo Задание 6. Написать функцию, которая принимает на вход два аргумента.
// Если аргументы больше нуля, возвращаем их сумму.
// Если оба меньше - разность. Если знаки разные - возвращаем 0

function checkTwoNumbers(num1, num2){
    var result;
    if(num1>0 && num2>0){
       result = num1 + num2;
       return(result);
    } else if(num1<0 && num2<0){
        result = num1 - num2;
        return(result);
    }   else {return(0)}

}

/*
alert("Написать функцию, которая принимает на вход два аргумента.\n Если аргументы больше нуля, возвращаем их сумму.\n Если оба меньше - разность. Если знаки разные - возвращаем 0")
num1=parseInt(prompt("Enter first number: "));
num2=parseInt(prompt("Enter second number: "));

alert(checkTwoNumbers(num1, num2));*/

//todo Задание 7. Написать функцию,
// которая принимает 3 аргумента - числа, найти среди них два максимальных,
// вывести в консоль

function findMaxNumbers(num1, num2, num3){
    var max1, max2;
    /*for(i=1; i<4; i++){
        if(num1>num2){}
    }*/
    if(num1>num2 && num1>num3 && num2>num3){
        max1=num1;
        max2=num2;
        console.log(max1);
        console.log(max2);
    } else if(num1>num2 && num1>num3 && num3>num2){
        max1=num1;
        max2=num3;
        console.log(max1);
        console.log(max2);
    } else if (num1>num2 && num2<num3){
        max1 = num1;
        max2 = num3;
        console.log(max1);
        console.log(max2);
    } else {
        max1=num2;
        max2=num3;
        console.log(max1);
        console.log(max2);
        }
}

/*alert("Написать функцию,\n которая принимает 3 аргумента - числа, найти среди них два максимальных, \n вывести в консоль");
num1=parseInt(prompt("Введите первое число: "));
num2=parseInt(prompt("Введите второе число: "));
num3=parseInt(prompt("Введите третье число: "));

findMaxNumbers(num1, num2, num3);*/

//todo Задание 8. Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function findMinNum(num1, num2) {
    var min;
    if(num1<=num2)
    {min=num1;
    alert(min)}
    else{
        min=num2;
        alert(min)}
}

/*
alert("Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.");
num1=parseInt(prompt("Enter first num: "));
num2=parseInt(prompt("Enter second num: "));
findMinNum(num1, num2);*/








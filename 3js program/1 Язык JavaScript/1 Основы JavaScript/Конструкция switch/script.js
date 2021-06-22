'use strict'
// Конструкция switch заменяет собой сразу несколько if.

// Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
let a
btn.onclick=function(){
    a = +prompt('Введите значение');
    switchKey(a)
}

function switchKey(a){
    switch (a) {
        case 3:
            console.log('Маловато');
            break;
        case 4:
            console.log('В точку!');
            break;
        case 5:
            console.log('Перебор');
            break;
        default:
            console.log('Нет таких значений')

    };
}
let browser ='Chrome';

if(browser == "Safari"){
    console.log("You've got the Edge!")
}
else if(browser == 'Chrome'||'Firefox'||'Safari'||'Opera'){
    console.log('Okay we support these browsers too')
}
else{
    console.log('We hope that this page looks ok!' )
};

let number = 0;
switch(+number){
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
}
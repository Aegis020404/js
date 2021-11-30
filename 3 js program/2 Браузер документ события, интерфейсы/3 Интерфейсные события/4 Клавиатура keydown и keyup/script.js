// События key.keydown и key.keyup
// Событие key.keydown происходит при нажатии клавиши, а key.keyup – при отпускании.
// event.code и event.key.key
// Свойство key.key объекта события позволяет получить символ, а свойство code – «физический код клавиши».

// Свойство event.key.key – это непосредственно символ, и он может различаться. Но event.code всегда будет тот же:

// Буквенные клавиши имеют коды по типу "Key<буква>": "KeyA", "KeyB" и т.д.
// Коды числовых клавиш строятся по принципу: "Digit<число>": "Digit0", "Digit1" и т.д.
// Код специальных клавиш – это их имя: "Enter", "Backspace", "Tab" и т.д.

document.addEventListener('key.keydown',function(e){
    if(e.code=='KeyZ' && (e.ctrlKey || e.metaKey)){
        console.log('Cancel!')
    }

})

// Автоповтор
// При долгом нажатии клавиши возникает автоповтор: key.keydown срабатывает снова и снова, и когда клавишу отпускают, то отрабатывает key.keyup. Так что ситуация, когда много key.keydownи один key.keyup, абсолютно нормальна.

// Для событий, вызванных автоповтором, у объекта события свойство event.repeat равно true.


//  Действия по умолчанию
// Действия по умолчанию весьма разнообразны, много чего можно инициировать нажатием на клавиатуре.

// Для примера:

// Появление символа (самое очевидное).
// Удаление символа (клавиша Delete).
// Прокрутка страницы (клавиша PageDown).
// Открытие диалогового окна браузера «Сохранить» (Ctrl+S)
// …и так далее.

function checkPhoneKey(key) {
    console.log(key.key)
    key.repeat = false;
    return (key.key >= '0' && key.key <= '9') || key.key == '+' || key.key == '(' || key.key == ')' || key.key == '-' || key.key =='ArrowLeft' ||key.key=='ArrowRight'||key.key=='Delete'||key.key=='Backspace';
    
  }


function runOnKeys(func,code1,code2,... code_n){
    // if()
}
//   document.addEventListener('')
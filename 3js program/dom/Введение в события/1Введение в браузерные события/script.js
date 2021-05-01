// События мыши:
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.

// События на элементах управления:
    // submit - пользователь отправил форму <form>.
    // focus - пользователь фокусируется на элементе ,например нажимает на <input>.

// Клавиатурные события:
    // keydown и keyup - когда пользователь нажимает/отпускает клавишу.

// События документа:
    // DOMContentloaded - когда HTML загружен и обработан,DOM документа полностью построен и доступен

// CSS events:
    // transitioned - когда CSS-анимация завершена



// Использование атрибута HTML
    let i
    function countRabbits() {
        if(i==10) console.log("STOP PLEASE")
        if(i==undefined) i=0
        console.log(++i)
    }


// Использование свойства DOM-объекта

doNotClick.onclick = function(){
    doNotClick.innerHTML ="fuck"
    setTimeout(()=>doNotClick.innerHTML="JUST DON'T CLICK",1000)
}
//Убрать обработчик можно назначением elem.onclick = null.

//Доступ к элементу через this 'better'



// addEventListener / removeEventListener
let firsctClick = ()=>console.log("First click");
let secondClick = ()=>console.log("Second click");
input.onclick = firsctClick
// ...
input.onclick = secondClick // заменит предыдущий обработчик


// element.addEventListener(event, handler[, options]);
// element.removeEventListener(event, handler[, options]);
// event - Имя события, например "click".
// handler - Ссылка на функцию-обработчик.
// options -Дополнительный объект со свойствами:

// once: если true, тогда обработчик будет автоматически удалён после выполнения.
// capture: фаза, на которой должен сработать обработчик, подробнее об этом будет рассказано в главе Всплытие и погружение. Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.
// passive: если true, то указывает, что обработчик никогда не вызовет preventDefault(), подробнее об этом будет рассказано в главе Действия браузера по умолчанию.
input2.addEventListener('click',firsctClick)
input2.addEventListener('click',secondClick)//сработают 2 события

//DOMContentLoaded - срабатывает , когда завершена загрузка и построение DOM документа. НЕЛЬЗЯ НАЗНАЧИТЬ ЧЕРЕЗ DOM-СВОЙСТВА ,но можно через addEventListener

document.onDOMcontentLoaded = function() {
    console.log('DOM построен'); //не будет работать
}
document.addEventListener('DOMContentLoaded',function(){
    console.log('DOM построен')
});



//Объект события


coordinates.onclick=function(event) {
    console.log(event.type+' на '+ event.currentTarget);
    console.log('Координаты: '+ event.clientX+':'+event.clientY)//получение координат мыши из объекта события
}



//Объект-обработчик: handleEvent



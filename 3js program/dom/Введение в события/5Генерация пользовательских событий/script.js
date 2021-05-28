//Конструктор Event

// let event = new Event(type[, options]);
// Где:
// type – тип события, строка, например "click" или же любой придуманный нами – "my-event".
// options – объект с тремя необязательными свойствами:
// bubbles: true/false – если true, тогда событие всплывает.
// cancelable: true/false – если true, тогда можно отменить действие по умолчанию. Позже мы разберём, что это значит для пользовательских событий.
// composed: true/false – если true, тогда событие будет всплывать наружу за пределы Shadow DOM. Позже мы разберём это в разделе Веб-компоненты.
// По умолчанию все три свойства установлены в false


// Метод dispatchEvent

// После того, как объект события создан, мы должны запустить его на элементе, вызвав метод elem.dispatchEvent(event).
let event = new Event('click');
elem.dispatchEvent(event);


//  Пример всплытия

//  ловим на документ
document.addEventListener('hello',function(event){
    console.log(`Привет от ${event.target.tagName}`);
});

// ...запуск событий на элементе!
let eventh1 = new Event('hello',{bubbles:true});
h1.dispatchEvent(eventh1);



//  MouseEvent, KeyBoartEvent и другие
// Для некоторых конкретных типов событий есть свои специфические конструкторы. Вот небольшой список конструкторов для различных событий пользовательского интерфейса, которые можно найти в спецификации UI Event:
// UIEvent
// FocusEvent
// MouseEvent
// WheelEvent
// KeyboardEvent
// …
// Стоит использовать их вместо new Event, если мы хотим создавать такие события. К примеру, new MouseEvent("click").

let mouseEvents = new MouseEvent('click',{
    bubbles:true,
    cancelable:true,
    clientX:100,
    clientY:100,
});
console.log(mouseEvents.clientX);



// Пользовательские события
// Для генерации событий совершенно новых типов, таких как "hello", следует использовать конструктор new CustomEvent. Технически CustomEvent абсолютно идентичен Event за исключением одной небольшой детали.
// У второго аргумента-объекта есть дополнительное свойство detail, в котором можно указывать информацию для передачи в событие.

custom.addEventListener('Vasya',function(event) {
    console.log(event.detail.name);
});
custom.dispatchEvent(new CustomEvent('Vasya',{
    detail:{name:'Вася'}
}))




// event.preventDefault();
// hide() будет вызван автоматически через 2 секунды
function hide() {
    let event = new CustomEvent("hide", {
      cancelable: true // без этого флага preventDefault не сработает
    });
    if (!rabbit.dispatchEvent(event)) {
      alert('Действие отменено обработчиком');
    } else {
      rabbit.hidden = true;
    }
  }

  rabbit.addEventListener('hide', function(event) {
    if (confirm("Вызвать preventDefault?")) {
      event.preventDefault();
    }
  });




//   Вложенные события обрабатываются синхронно
// Обычно события обрабатываются асинхронно. То есть, если браузер обрабатывает onclick и в процессе этого произойдёт новое событие, то оно ждёт, пока закончится обработка onclick.

// Исключением является ситуация, когда событие инициировано из обработчика другого события.

// Тогда управление сначала переходит в обработчик вложенного события и уже после этого возвращается назад.

// В примере ниже событие menu-open обрабатывается синхронно во время обработки onclick:

menu.onclick = function() {
    alert(1);

    // alert("вложенное событие")
    menu.dispatchEvent(new CustomEvent("menu-open", {
      bubbles: true
    }));

    alert(2);
  };

  document.addEventListener('menu-open', () => alert('вложенное событие'))
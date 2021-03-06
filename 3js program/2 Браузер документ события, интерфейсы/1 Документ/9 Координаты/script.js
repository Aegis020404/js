// Относительно окна браузера – как position:fixed, отсчёт идёт от верхнего левого угла окна.
// мы будем обозначать эти координаты как clientX/clientY, причина выбора таких имён будет ясна позже, когда мы изучим свойства событий.
// Относительно документа – как position:absolute на уровне документа, отсчёт идёт от верхнего левого угла документа.
// мы будем обозначать эти координаты как pageX/pageY.

// При прокрутке документа:
// pageY – координата точки относительно документа осталась без изменений, так как отсчёт по-прежнему ведётся от верхней границы документа (сейчас она прокручена наверх).
// clientY – координата точки относительно окна изменилась (стрелка на рисунке стала короче), так как точка стала ближе к верхней границе окна.


// Координаты относительно окна: getBoundingClientRect


// Метод elem.getBoundingClientRect() возвращает координаты в контексте окна для минимального по размеру прямоугольника, который заключает в себе элемент elem, в виде объекта встроенного класса DOMRect.

// Основные свойства объекта типа DOMRect:

// x/y – X/Y-координаты начала прямоугольника относительно окна,
// width/height – ширина/высота прямоугольника (могут быть отрицательными).
// Дополнительные, «зависимые», свойства:

// top/bottom – Y-координата верхней/нижней границы прямоугольника,
// left/right – X-координата левой/правой границы прямоугольника.

console.log(hello.getBoundingClientRect())

// elementFromPoint(x, y)
// Вызов document.elementFromPoint(x, y) возвращает самый глубоко вложенный элемент в окне, находящийся по координатам (x, y).
let element =document.elementFromPoint(0,0);
console.log(element)
element.style.background="red"



// Любая точка на странице имеет координаты:

// Относительно окна браузера – elem.getBoundingClientRect().
// Относительно документа – elem.getBoundingClientRect() плюс текущая прокрутка страницы.
// Координаты в контексте окна подходят для использования с position:fixed, а координаты относительно документа – для использования с position:absolute.

// Каждая из систем координат имеет свои преимущества и недостатки. Иногда будет лучше применить одну, а иногда – другую, как это и происходит с позиционированием в CSS, где мы выбираем между absolute и fixed.

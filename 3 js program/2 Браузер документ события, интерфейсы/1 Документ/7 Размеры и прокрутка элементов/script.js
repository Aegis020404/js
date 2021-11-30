// offsetParent , offsetLeft/Top

// В свойстве offsetParent находится предок элемента, который используется внутри браузера для вычисления координат при рендеринге.

// То есть, ближайший предок, который удовлетворяет следующим условиям:

// Является CSS-позиционированным (CSS-свойство position равно absolute, relative, fixed или sticky),
// или <td>, <th>, <table>,
// или <body>.
// Свойства offsetLeft/offsetTop содержат координаты x/y относительно верхнего левого угла offsetParent.

console.log(example.offsetParent.id)//'main'qwerty называет id родителя с тоже абсолютной позицией
console.log(example.offsetLeft)//180 число ,а не строка
console.log(example.offsetTop)//180



// offsetWidth/Height
// Эти два свойства – самые простые. Они содержат «внешнюю» ширину/высоту элемента, то есть его полный размер, включая рамки.

function isHidden(elem) {
    return !elem.offsetWidth && !elem.offsetHeight;
}
console.log(isHidden(qwerty))


//  clientTop/Left
// Пойдём дальше. Внутри элемента у нас рамки (border).
// Для них есть свойства-метрики clientTop и clientLeft.


// clientWidth/Height
// Эти свойства – размер области внутри рамок элемента.
// Они включают в себя ширину области содержимого вместе с внутренними отступами padding, но без прокрутки:

// scrollWidth/Height
// Эти свойства – как clientWidth/clientHeight, но также включают в себя прокрученную (которую не видно) часть элемента.

// scrollLeft/scrollTop
// Свойства scrollLeft/scrollTop – ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.

console.log(getComputedStyle(example).width)//300px


// Итого
// У элементов есть следующие геометрические свойства (метрики):

// offsetParent – ближайший CSS-позиционированный родитель или ближайший td, th, table, body.
// offsetLeft/offsetTop – позиция в пикселях верхнего левого угла относительно offsetParent.
// offsetWidth/offsetHeight – «внешняя» ширина/высота элемента, включая рамки.
// clientLeft/clientTop – расстояние от верхнего левого внешнего угла до внутренного. Для операционных систем с ориентацией слева-направо эти свойства равны ширинам левой/верхней рамки. Если язык ОС таков, что ориентация справа налево, так что вертикальная полоса прокрутки находится не справа, а слева, то clientLeft включает в своё значение её ширину.
// clientWidth/clientHeight – ширина/высота содержимого вместе с внутренними отступами padding, но без полосы прокрутки.
// scrollWidth/scrollHeight – ширины/высота содержимого, аналогично clientWidth/Height, но учитывают прокрученную, невидимую область элемента.
// scrollLeft/scrollTop – ширина/высота прокрученной сверху части элемента, считается от верхнего левого угла.
// Все свойства доступны только для чтения, кроме scrollLeft/scrollTop, изменение которых заставляет браузер прокручивать элемент.


let i=0
let randomHEX 
setInterval(()=>{
    p.append(example.scrollTop+ ' ');
    randomHEX = Math.round(Math.random()*1000000)
    p.style.color='#'+randomHEX
    p.style.background='#'+Math.round(Math.random()*1000000)
},1000)


example.scrollTop = 1

console.log(example.scrollTop)
function topScroll(){
    if(i==130) return botScroll()
    example.scrollTop =i++;
    example.style.color="#FF2400"
    setTimeout(topScroll,10)
}
function botScroll(){
    if(i==0) return topScroll()
    example.scrollTop =--i;
    example.style.color="#78DBE2"
    setTimeout(botScroll,10)
    
} 

// topScroll();


function scrollBottom(elem) {
    console.log(elem.scrollBar)
    return elem.scrollHeight - elem.scrollTop - elem.clientHeight
}
function scrollBar(elem) {
    return elem.offsetWidth - elem.clientWidth - elem.clientLeft
}


console.log(scrollBottom(example))
console.log(scrollBar(example))
// Создать класс в CSS и использовать его: <div class="...">
// Писать стили непосредственно в атрибуте style: <div style="..."></div>

// Использование style является приемлемым ,если мы вычисляем координаты элемента динамически и хотим усановить их из Js


// "className": elem.className соответствует атрибуту "class".

console.log(document.body.firstElementChild.className)//main


// Если мы присваиваем что-то elem.className, то это заменяет всю строку с классами. Иногда это то, что нам нужно, но часто мы хотим добавить/удалить один класс.
// elem.classList – это специальный объект с методами для добавления/удаления одного класса.

// Методы classList:

// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.

//добавление класса
document.body.classList.add('article');
document.body.classList.add('art');//добавление второго класса
console.log(document.body.className)

for(let name of document.body.classList) {
    console.log(name);//article затем art
};


// Element style

// Свойство elem.style – это объект, который соответствует тому, что написано в атрибуте "style". Установка стиля elem.style.width="100px" работает так же, как наличие в атрибуте style строки width:100px.

// Для свойства из нескольких слов используется camelCase:
// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth

// document.body.style.backgroundColor = prompt('background color?',"green2")//Пользователь может задать цвет фона


// Сброс стилей
//  чтобы скрыть элемент, мы можем задать elem.style.display = "none".
//затем мы можем удалить свойство style.display, чтобы вернуться к первоначальному состоянию. Вместо delete elem.style.display мы должны присвоить ему пустую строку: elem.style.display = "".

light.style.display="none";
setInterval(()=>{
    light.style.display!==""?light.style.display="" :light.style.display="none"

},1000)//мерцающий блок ,который то появляется ,то исчезает


// Для задания нескольких стилей в одной строке используется специальное свойство style.cssText:
light.style.cssText =`color:red;
    background-color:yellow;
    width:100px;
    text-align:center;`
    // Это свойство редко используется, потому что такое присваивание удаляет все существующие стили: оно не добавляет, а заменяет их. Можно ненароком удалить что-то нужное. Но его можно использовать, к примеру, для новых элементов, когда мы точно знаем, что не удалим существующий стиль.

// То же самое можно сделать установкой атрибута: div.setAttribute('style', 'color: red...').


// Следите за единицами измерения
// Не забудьте добавить к значениям единицы измерения.
// Свойство style оперирует только значением атрибута "style", без учёта CSS-каскада.

document.body.style.marginTop="10px"
// Вычисленные стили : getComputedStyle
console.log(document.body.style.color);//пусто
console.log(document.body.style.marginTop);//10px


// getComputedStyle(element, [pseudo])
// element
// Элемент, значения для которого нужно получить
// pseudo
// Указывается, если нужен стиль псевдоэлемента, например ::before. Пустая строка или отсутствие аргумента означают сам элемент.
let computedStyle = getComputedStyle(document.body)
console.log(computedStyle.color);//rgb(0, 0, 255)

// Вычисленное (computed) и окончательное (resolved) значения
// Есть две концепции в CSS:
// Вычисленное (computed) значение – это то, которое получено после применения всех CSS-правил и CSS-наследования. Например, height:1em или font-size:125%.
// Окончательное (resolved) значение – непосредственно применяемое к элементу. Значения 1em или 125% являются относительными. Браузер берёт вычисленное значение и делает все единицы измерения фиксированными и абсолютными, например, height:20px или font-size:16px. Для геометрических свойств разрешённые значения могут иметь плавающую точку, например, width:50.5px.
// Давным-давно getComputedStyle был создан для получения вычисленных значений, но оказалось, что окончательные значения гораздо удобнее, и стандарт изменился.
// Так что, в настоящее время getComputedStyle фактически возвращает окончательное значение свойства, для геометрии оно обычно в пикселях.
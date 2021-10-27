// DOM-узлы – это обычные объекты JavaScript. Мы можем их изменять.

document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
};
console.log(document.body.myData.title)//Imperator

//Мы можем добавить и метод

document.body.sayTagName = function() {
    console.log(this.tagName);
}

document.body.sayTagName();//BODY

//Так же можно изменять встроеные прототипы , такие как Element.prototype и добавлять новые методы ко всем элементам:

Element.prototype.sayHi = function() {
    console.log(`Hello, I'm ${this.tagName}`);
};
document.documentElement.sayHi();//Hello, I'm HTML
document.body.sayHi();//Hello, I'm BODY


// Итак, DOM-свойства и методы ведут себя так же, как и обычные объекты JavaScript:
// Им можно присвоить любое значение.
// Они регистрозависимы (нужно писать elem.nodeType, не elem.NoDeTyPe).


// HTML-атрибуты

// когда у элемента есть id или другой стандартный атрибут, создаётся соответствующее свойство. Но этого не происходит, если атрибут нестандартный.

console.log(document.body.firstElementChild.id)//firstP
console.log(document.body.firstElementChild.something)//undefined атрибут яв-ся не стандартным для этого элемента

console.log(input1.type); // text
console.log(firstP.type); // undefined: DOM-свойство не создалось, потому что оно нестандартное


console.log(firstP.getAttribute('something'));//non-standart

// Все атрибуты доступны с помощью следующих методов:

// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.

// У HTML-атрибутов есть следующие особенности:
// Их имена регистронезависимы (id то же самое, что и ID).
// Их значения всегда являются строками.


//Расширенная демонстрация работы с атрибутами
console.log(elem.getAttribute('About'))//Elephanet чтение
elem.setAttribute('test',123)//запись
console.log(elem.outerHTML)//Посмотреть есть ли атрибут в HTML(Yes)

console.log(elem.attributes)
for(let attr of elem.attributes) {
    console.log(`${attr.name} = ${attr.value}`);
}//перебор методов и их значений


//Синхронизация между атрибутами и свойствами

let input2 = document.getElementById('input2');
let button = document.getElementsByTagName('button');
// атрибут => свойство
input2.setAttribute('id','idInput');
console.log(button.value)//undefined

// свойство => атрибут 

input2.value = "newValue";
console.log(input2.getAttribute('value'));//newValue



// DOM - свойства типизированы
// DOM-свойства не всегда являются строками. Например, свойство input.checked (для чекбоксов) имеет логический тип:
console.log(inputCheckbox.getAttribute('checked'))//значение атрибута пустая строка
console.log(inputCheckbox.checked);//хначение свойтсва: true


//атрибут style :строка ,но свойство - объект

//строка
console.log(document.body.firstElementChild.getAttribute('style'))//color:red;

//объект
console.log(document.body.firstElementChild.style)//выведет объект CSSStyleDeclaration 
console.log(document.body.firstElementChild.style.color);//red


// DOM-свойство href всегда содержит полный URL, даже если атрибут содержит относительный URL или просто #hash.

//атрибут
console.log(a.getAttribute('href'))//#hello

//свойство
console.log(a.href)//полный url http://127.0.0.1:5500/3js%20program/dom/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82/4%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B%20%D0%B8%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0/#hello



//Нестандартные атрибуты , dataset
let user = {
    name:"Рete",
    age:25,
};

for (let div of document.querySelectorAll('[show-info]')) {
    //Вставить соответствующую информацию в поле
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]//сначала Рeye в name , потом 25 в age
}

// Также они могут быть использованы, чтобы стилизовать элементы. (Всё в css док)


// Все атрибуты, начинающиеся с префикса «data-», зарезервированы для использования программистами. Они доступны в свойстве dataset.

console.log(document.body.dataset.about)//Elephants

// Атрибуты, состоящие из нескольких слов, к примеру data-order-state, становятся свойствами, записанными с помощью верблюжьей нотации: dataset.orderState.

// Атрибуты – это то, что написано в HTML.
// Свойства – это то, что находится в DOM-объектах.






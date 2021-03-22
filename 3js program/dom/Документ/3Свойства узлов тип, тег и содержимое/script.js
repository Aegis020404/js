// EventTarget – это корневой «абстрактный» класс. Объекты этого класса никогда не создаются. Он служит основой, благодаря которой все DOM-узлы поддерживают так называемые «события», о которых мы поговорим позже.

// Node – также является «абстрактным» классом, и служит основой для DOM-узлов. Он обеспечивает базовую функциональность: parentNode, nextSibling, childNodes и т.д. (это геттеры). Объекты класса Node никогда не создаются. Но есть определённые классы узлов, которые наследуют от него: Text – для текстовых узлов, Element – для узлов-элементов и более экзотический Comment – для узлов-комментариев.

// HTMLInputElement – этот класс предоставляет специфичные для элементов формы свойства,
// HTMLElement – предоставляет общие для HTML-элементов методы (и геттеры/сеттеры),
// Element – предоставляет типовые методы элемента,
// Node – предоставляет общие свойства DOM-узлов,
// EventTarget – обеспечивает поддержку событий (поговорим о них дальше),
// …и, наконец, он наследует от Object, поэтому доступны также методы «обычного объекта», такие как hasOwnProperty.

console.log(document.body.constructor.name);// HTMLBodyElement
console.log(document.body)//выводит элемент в виде DOM-дерева.
console.dir(document.body)// выводит элемент в виде DOM-объекта, что удобно для анализа его свойств.
console.dir('Работает как console.log() ,не считая случаев с DOM');

// Свойство nodeType предоставляет ещё один, «старомодный» способ узнать «тип» DOM-узла.
// elem.nodeType == 1 для узлов-элементов,
// elem.nodeType == 3 для текстовых узлов,
// elem.nodeType == 9 для объектов документа,
let elem = document.body
console.log(elem.nodeType)// 1 => элемент
console.log(elem.firstChild.nodeType)// 3 => текст
console.log(document.nodeType)// 9 =>для объекта документ


//Тег: nodeName и tagName
// Получив DOM-узел, мы можем узнать имя его тега из свойств nodeName и tagName:

console.log(document.body.nodeName) //BODY
console.log(document.body.tagName) //BODY

console.log(document.body.firstChild.tagName)//undefined
console.log(document.body.firstChild.nodeName)//#comment

console.log(document.tagName);//undefined
console.log(document.nodeName);//#document



// Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.

console.log(document.body.innerHTML);//читаем текущее содержимое
document.body.innerHTML = ("New Body "+
"<p>I Hate myself</p>")//заменяем содержимое

document.body.innerHTML += "Как дела?"//+= чтобы не было перезаписи


// Свойство outerHTML содержит HTML элемента целиком. Это как innerHTML плюс сам элемент.

console.log(elem.outerHTML)
//БЛЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯТЬ 
//БЛЯТЬ СУКА
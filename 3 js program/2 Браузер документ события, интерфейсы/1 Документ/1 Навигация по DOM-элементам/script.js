//  <html> - document.documentElement
//  <body> - document.body
//  <head> - document.head

// Дети: childNodes , firstCild , lastChild
    // Дочерние узлы(или дети) - элемент ,которые являются непосредственными детьми узла. Другими словами , элементы которые лежат непосредственно внутри данного . Например <head> и <body> являются детьми элемента <html>
// Потомки - все элементы ,которые лежат внутри данного ,включая детей, их детей и т.д.


//Коллекция childNodes содержит список всех детей, включая текстовые узлы

for (let i = 0; i < document.body.childNodes.length;i++ ) {
    console.log(document.body.childNodes[i])
}


// Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему дочернему элементу

// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild


//Для childNodes мы можем использовать цикл for of так как это не массив ,а коллекция
for(let node of document.body.childNodes) {
    console.log(node)
}

console.log(document.body.childNodes.filter)//undefined методы массива не работают на коллекцию
let childNodesArray =Array.from(document.body.childNodes).sort()//но мы можем её прообразовать в коллекцию
console.log( childNodesArray);


// соседи - это узлы , у которых один и тот же родитель
//nextSimbling , priviousSimbling
// Родитель доступен через parentNode.
console.log(document.body.parentNode === document.documentElement)//true html===html

//после <head> идёт <body>
console.log( document.head.nextSibling)//#text
console.log( document.head.nextSibling.nextSibling)// HTMLBodyElement
// Перед body находится head
console.log( document.body.previousSibling)//#text
console.log( document.body.previousSibling.previousSibling) // HTMLHeadElement

//Навигация только по элементам без тесктовых узлов и узлов комментарий
console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
console.log(document.body.previousElementSibling)
console.log(document.body.parentElement)
console.log(document.documentElement.parentNode)//#document
console.log(document.documentElement.parentElement)//null


// Есть два основных набора ссылок:
// Для всех узлов: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
// Только для узлов-элементов: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
// Некоторые виды DOM-элементов, например таблицы, предоставляют дополнительные ссылки и коллекции для доступа к своему содержимому.



console.clear()

// // 1
//     console.log(document.body.firstElementChild)
//     console.log(document.body.firstElementChild.nextElementSibling)
//     console.log(document.body.firstElementChild.nextElementSibling.lastElementChild)







// let table = document.body.firstElementChild;
//     for(let i = 0; table.rows.length > i;i++) {
//       table.rows[i].cells[i].style.background = 'red';
//     }











































// //task 1 
// console.log(document.body.lastElementChild.previousElementSibling);//div
// console.log(document.body.firstElementChild)//ul
// console.log(document.body.firstElementChild.lastElementChild)//li пит












let range = new Range();
range.setStart(p, 0);
// range.setEnd(p, 2);
range.setEnd(p.querySelector('b').firstChild,3);

console.log(range+'')

document.getSelection().addRange(range);


// Методы Range 
    // Установить начало диапазона:

    // setStart(node, offset) установить начальную границу в позицию offset в node
    // setStartBefore(node) установить начальную границу прямо перед node
    // setStartAfter(node) установить начальную границу прямо после node
    // Установить конец диапазона (похожи на предыдущие методы):

    // setEnd(node, offset) установить конечную границу в позицию offset в node
    // setEndBefore(node) установить конечную границу прямо перед node
    // setEndAfter(node) установить конечную границу прямо после node

    //     Чтобы манипулировать содержимым в пределах диапазона:

    // deleteContents() – удалить содержимое диапазона из документа
    // extractContents() – удалить содержимое диапазона из документа и вернуть как DocumentFragment
    // cloneContents() – склонировать содержимое диапазона и вернуть как DocumentFragment
    // insertNode(node) – вставить node в документ в начале диапазона
    // surroundContents(node) – обернуть node вокруг содержимого диапазона. Чтобы этот метод сработал, диапазон должен содержать как открывающие, так и закрывающие теги для всех элементов внутри себя: не допускаются частичные диапазоны по типу <i>abc.


// Selection
let w = document.getSelection()


// События при выделении
p.onselectstart = function() {
    console.log(22)
}
p.ondragstart = function() {
    return false
}
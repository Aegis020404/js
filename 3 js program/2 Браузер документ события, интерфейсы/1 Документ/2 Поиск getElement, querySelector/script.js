let elem = document.getElementById('elem');//get element
elem.style.background = "red";//paint the element to red
elem.style.background = "gray";
// внутри id="elem-content" есть дефис, так что такой id не может служить именем переменной
// ...но мы можем обратиться к нему через квадратные скобки: window['elem-content']
window['elem-content'].style.display = "inline-block"
window['elem-content'].style.background ="red"
window['elem-content'].style.padding = "1vh"
// Также есть глобальная переменная с именем, указанным в id:
// …Но это только если мы не объявили в JavaScript переменную с таким же именем, иначе она будет иметь приоритет:

let elements = document.querySelectorAll('ul > li:last-child')//Псевдоклассы тоже поддерживаются
for (let elem of elements) {
    console.log(elem.innerHTML);
};

 // может быть любая коллекция вместо document.body.children
 for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      console.log("Ссылка на архив: " + elem.href );
    }//elem.matches проверяет перебирая элементы
  }


//   Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.
  let FindFull = document.querySelector('.full');
    console.log(FindFull.closest('li'))
    console.log(FindFull.closest('ul'))


    // elemA.contains(elemB) вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.
    let li = document.getElementById('li')
    let ul = document.getElementById('ul')
    let contains = li.contains(ul)
    console.log(contains)
    3
(function() {

  var elems = document.getElementsByTagName('p'),//чтобы получить все элементы с тегом 'p'
      classElems = document.getElementsByClassName('paragraph'),
      idElems = document.getElementById('four'),
      elemSelector = document.querySelector('p'),//более новый способ
      elemsSelectorAll = document.querySelectorAll('p');//но старый метод работает быстрее
      elemsInDiv = document.querySelectorAll('div p')//плюс этого метода
      idElemSelector = document.querySelector('#four')


  console.log( elems,'\n1')//nodeList
  console.log( classElems,'\n2')//nodeList
  console.log( idElems,'\n3')//nodeList
  console.log( elemSelector)//nodeList
  console.log( elemsSelectorAll)//nodeList
  console.log( elemsInDiv)//nodeList
  console.log( idElemSelector)//nodeList
//обычно используют способ getElement так как он более быстрый







  for (let i = 0,len = elems.length;i<len;i++) {
    // console.log( elems[i].tagName);//P
    // console.log( elems[i].parentNode);//body || div
    // console.log( elems[i].previousSibling);//показывает пробельные узлы
    // console.log( elems[i].nextSibling);//показывает пробельные узлы
    console.log( elems[i].nodeName);//показывает 
    
  }
}) ();

  // document.body.style.background = 'grey';
  // setTimeout(() => document.body.style.background = "",3000) - пример способностей дом
  
 
console.log(location)
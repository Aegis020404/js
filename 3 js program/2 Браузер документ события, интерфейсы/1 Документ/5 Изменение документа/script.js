//Cоздание документа

//DOM-узел можно создать двумя способами

// document.createElement(tag) - cоздаёт новый элемент с заданным тегом
let div = document.createElement('div');

//document.CreateTextNado(text)-создаёт новый текстовой узел с заданным текстом

let textNide = document.createTextNode('А вот и я')


div.className = "alert"; // для того чтобы дать класс
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//Мы создали жлемент ,но пока он только в переменной . Мы не можем видеть его на странице ,поскольку он не является частью документа.


// Чтобы наш div появился, нам нужно вставить его где-нибудь в document. Например, в document.body.
// Для этого есть метод append, в нашем случае: document.body.append(div).

document.body.prepend(div);//Вставит alert ('перед всем остальным')


// Вот методы для различных вариантов вставки:

// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.


ol.before('before');//Вставит строку 'before' перед 'ol'
ol.after('after');//Встваит строку 'after' полсе 'ol'

let liFirst = document.createElement('li');
liFirst.innerHTML="prepend";
ol.prepend(liFirst);// вставить liFirst в начало <ol>

let liLast = document.createElement('li');
liLast.innerHTML = "append"
ol.append(liLast);// вставсить liLast в конец <ol>


div.before('<p>Привет</p>',document.createElement('hr'));//Весь текст вставляется как текст.



// insertAdjacentHTML/Text/element
  //elem.insertAdjacentHtml(where,html).

  // Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно быть одним из следующих:

  // "beforebegin" – вставить html непосредственно перед elem,
  // "afterbegin" – вставить html в начало elem,
  // "beforeend" – вставить html в конец elem,
  // "afterend" – вставить html непосредственно после elem.

  // Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».


  div1.insertAdjacentHTML('afterend','<p>By</p>');
  div1.insertAdjacentHTML('beforebegin','<p>Hello</p>');
  // …Приведёт к:
// {/* <p>Привет</p>
// <div id="div"></div>
// <p>Пока</p */}

// У метода есть два брата:

// elem.insertAdjacentText(where, text) – такой же синтаксис, но строка text вставляется «как текст», вместо HTML,
// elem.insertAdjacentElement(where, elem) – такой же синтаксис, но вставляет элемент elem.


// Улаление узлов
  
  setTimeout(()=> div.remove(),1000)//Чтобы удалить сообщение через секунду появления

    second.after(first)//берет #second и после него вставляет #first


//Клонирование узлов cloneNode
// Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами. Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.

let divClone = div.cloneNode(true);//клонировать сообщение
divClone.querySelector('strong').innerHTML="Всем пока!";//изменить клонированный элемент

div.after(divClone);//показать клоннированный элемент после существующего div

//DocumentFragment
// DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов.

function getListContent() {
  let fragment = new DocumentFragment();

  for (let i=1;i<=3;i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(i);
  }
  return fragment;
}

function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent());

// DocumentFragment редко используется. Зачем добавлять элементы в специальный вид узла, если вместо этого мы можем вернуть массив узлов? Переписанный пример:


function getListContent1() {
  let result = [];

  for(let i = 1; i <=3;i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  };
  return result
};
ul1.append(...getListContent1());



// Несколько слов о <<document.write>>

document.write('<h4>document.write</h4>')//неиспользуется уже так как если вызвать его позже, то существующее содержимое документа затрётся.


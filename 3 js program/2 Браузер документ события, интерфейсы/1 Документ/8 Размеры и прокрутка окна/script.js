
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
//  Ширина/высота окна
console.log(document.documentElement.clientWidth);//щирина окна
console.log(document.documentElement.clientHeight);//высота окна

// Если есть полоса прокрутки, и она занимает какое-то место, то свойства clientWidth/clientHeight указывают на ширину/высоту документа без неё (за её вычетом). Иными словами, они возвращают высоту/ширину видимой части документа, доступной для содержимого.
// А window.innerWidth/innerHeight включают в себя полосу прокрутки.
console.log(window.innerWidth);//щирина окна считая прокрутку страницы
console.log(window.innerHeight);//высота окна считая прокрутку страницы


// текущую прокрутку можно прочитать из свойств window.pageXOffset/pageYOffset: так как при scrollLeft/top safari ругается
console.log('Текущая прокрутка сверху: ' + window.pageYOffset);
console.log('Текущая прокрутка слева: ' + window.pageXOffset);



//  Прокрутка: scrollTo , scrollBy , scrollIntoView
// Для прокрутки страницы из JavaScript её DOM должен быть полностью построен.

// Например, если мы попытаемся прокрутить страницу из скрипта в <head>, это не сработает.

// window.scrollTo(0,0);
// Метод scrollBy(x,y) прокручивает страницу относительно её текущего положения. Например, scrollBy(0,10) прокручивает страницу на 10px вниз
// setInterval(()=>{
//     window.scrollBy(0,1);

// },10);


// Метод scrollTo(pageX,pageY) прокручивает страницу на абсолютные координаты (pageX,pageY). То есть, чтобы левый-верхний угол видимой части страницы имел данные координаты относительно левого верхнего угла документа. Это всё равно, что поставить scrollLeft/scrollTop. Для прокрутки в самое начало мы можем использовать scrollTo(0,0)


// scrollIntoView
// Для полноты картины давайте рассмотрим ещё один метод: elem.scrollIntoView(top).

// Вызов elem.scrollIntoView(top) прокручивает страницу, чтобы elem оказался вверху. У него есть один аргумент:

// если top=true (по умолчанию), то страница будет прокручена, чтобы elem появился в верхней части окна. Верхний край элемента совмещён с верхней частью окна.
// если top=false, то страница будет прокручена, чтобы elem появился внизу. Нижний край элемента будет совмещён с нижним краем окна.
document.body.style.overflow="hidden"//делает элемент не прокручиваемым
setTimeout(()=>{
document.body.style.overflow ="";//делает элемент обратно прокручиваемым
},1000);



// window.scrollTo(pageX,pageY) – абсолютные координаты,
// window.scrollBy(x,y) – прокрутка относительно текущего места,
// elem.scrollIntoView(top) – прокрутить страницу так, чтобы сделать elem видимым (выровнять относительно верхней/нижней части окна).
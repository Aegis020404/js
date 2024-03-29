// У жизненного цикла HTML-страницы есть три важных события:
// DOMContentLoaded – браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены.
// load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).
// beforeunload/unload – пользователь покидает страницу.

// Каждое из этих событий может быть полезно:

// Событие DOMContentLoaded – DOM готов, так что обработчик может искать DOM-узлы и инициализировать интерфейс.
// Событие load – внешние ресурсы были загружены, стили применены, размеры картинок известны и т.д.
// Событие beforeunload – пользователь покидает страницу. Мы можем проверить, сохранил ли он изменения и спросить, на самом ли деле он хочет уйти.
// unload – пользователь почти ушёл, но мы всё ещё можем запустить некоторые операции, например, отправить статистику.

console.log(getComputedStyle(document.body).color);
function ready() {
    console.log('DOM готов');

    // изображение ещё не загружено (если не было закешировано), так что размер будет 0x0
    
    console.log(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight} в DOMContentLoaded`);
  }

  document.addEventListener("DOMContentLoaded", ready);
  window.onload = function() {
    console.log('Страница загружена');
    // к этому моменту страница загружена
    console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
  if(document.readySate=='complete'){
    console.log("DOM and styles complete")
  }
img.ondragstart=function() {
  return false
}






//   В этом примере обработчик DOMContentLoaded запустится, когда документ загрузится, так что он увидит все элементы, включая расположенный ниже <img>.
// Но он не дожидается, пока загрузится изображение. Поэтому alert покажет нулевой размер.
// На первый взгляд событие DOMContentLoaded очень простое. DOM-дерево готово – получаем событие. Хотя тут есть несколько особенностей.
// Когда браузер обрабатывает HTML-документ и встречает тег <script>, он должен выполнить его перед тем, как продолжить строить DOM. Это делается на случай, если скрипт захочет изменить DOM или даже дописать в него (document.write), так что DOMContentLoaded должен подождать.
// Поэтому DOMContentLoaded определённо случится после таких скриптов

let analyticsData = { name:"Slava" };

window.addEventListener('unload',function() {
    navigator.sendBeacon('./analitics',JSON.stringify(analyticsData));
})

// window.onbeforeunload = function() {
//     return false;
// }//Спросит Мы уверены ли ,что хотим обновить эту страницу или закрыть




// readyState

// Что произойдёт, если мы установим обработчик DOMContentLoaded после того, как документ загрузился?

// Естественно, он никогда не запустится.

// Есть случаи, когда мы не уверены, готов документ или нет. Мы бы хотели, чтобы наша функция исполнилась, когда DOM загрузился, будь то сейчас или позже.

// Свойство document.readyState показывает нам текущее состояние загрузки.

// Есть три возможных значения:

// "loading" – документ загружается.
// "interactive" – документ был полностью прочитан.
// "complete" – документ был полностью прочитан и все ресурсы (такие как изображения) были тоже загружены.

function work() { 
    console.log('DOM loading')
 }

if (document.readyState == 'loading') {
  // ещё загружается, ждём события
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM готов!
  work();
}
// document.readyState станет interactive прямо перед DOMContentLoaded. Эти две вещи, на самом деле, обозначают одно и то же.
// document.readyState станет complete, когда все ресурсы (iframe и img) загрузятся. Здесь мы видим, что это произойдёт примерно в одно время с img.onload (img последний ресурс) и window.onload. Переключение на состояние complete означает то же самое, что и window.onload. Разница заключается в том, что window.onload всегда срабатывает после всех load других обработчиков.


let eventCtrl = new KeyboardEvent("keydown", {
  code: 'ControlLeft'
});
let eventW = new KeyboardEvent("keydown", {
  code: 'KeyW'
});
window.addEventListener('keydown',function(e) {
  console.log(e.code)
  document.body.innerHTML +=  ` ${e.code}`
})
window.dispatchEvent(eventCtrl)
window.dispatchEvent(eventW)
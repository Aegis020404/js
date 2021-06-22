// load - успешная загрузка
// error - во время загрузки произошла ошибка

let script = document.createElement('script');
script.src="my.js";
document.head.append(script);
// Загрузка скриптов
script.onload=function() {
    console.log('Complete loading'+this.src)
}
script.onerror = function() {
    console.log('Error loading'+this.src);
}
console.log('Сначала должен загрузится этот скрипт потом my.js');

// Другие ресурсы
// События load и error также срабатывают и для других ресурсов, а вообще, для любых ресурсов, у которых есть внешний src.

let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif";
img.onload = function() {
    console.log(`Изображение загружено, размеры ${img.width}x${img.height}`);
    document.body.append(img)
};
img.onerror = function() {
    console.log('Ошибка во время загрузки изображения');
}
// Для <iframe> событие load срабатывает по окончании загрузки как в случае успеха, так и в случае ошибки.


// Ошибка в скрипте с другого источника

// Есть правило: скрипты с одного сайта не могут получить доступ к содержимому другого сайта. Например, скрипт с https://facebook.com не может прочитать почту пользователя на https://gmail.com.



window.onerror = function(message, url, line, col, errorObj) {
    console.log(`${message}\n${url}, ${line}:${col}`);
  };
//   Чтобы разрешить кросс-доменный доступ, нам нужно поставить тегу <script> атрибут crossorigin, и, кроме того, удалённый сервер должен поставить специальные заголовки.


// Атрибут crossorigin отсутствует – доступ запрещён.
// crossorigin="anonymous" – доступ разрешён, если сервер отвечает с заголовком Access-Control-Allow-Origin со значениями * или наш домен. Браузер не отправляет авторизационную информацию и куки на удалённый сервер.
// crossorigin="use-credentials" – доступ разрешён, если сервер отвечает с заголовками Access-Control-Allow-Origin со значением наш домен и Access-Control-Allow-Credentials: true. Браузер отправляет авторизационную информацию и куки на удалённый сервер.








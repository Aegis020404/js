// parcing  преобразование кода в дерево объекта
 // Dom - промежуточное звено между кодом JS и нативным кодом браузера
 var el = document.createElement('p');
 console.log(el);
 console.log(el.constructor.prototype);//какие методы нам доступны

//Смотрить картинку прототипов DOM >>Node
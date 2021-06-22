//  Отмена действий браузера
menu.onclick = function(event) {
    if (event.target.nodeName != 'A') return;

    let href = event.target.getAttribute('href');
    console.log(href);// может быть подгрузка с сервера, генерация интерфейса и т.п.
    return false;// отменить действие браузера (переход по ссылке)

};

//  Опция <<pasive>> для обработчика
// Необязательная опция passive: true для addEventListener сигнализирует браузеру, что обработчик не собирается выполнять preventDefault().




//event.defaultPrevented
// По умолчанию браузер при событии contextmenu (клик правой кнопкой мыши) показывает контекстное меню со стандартными опциями.
document.addEventListener('contextmenu',function(event){
    if(event.defaultPrevented) return
    event.preventDefault();//Чтобы забыл дефолтную функцию
    // event.stopPropagation(); -лучше не использовать т.к.Мы навсегда запретили доступ к информации о правых кликах для любого внешнего кода, включая счётчики, которые могли бы собирать статистику, и т.п. Это слегка неразумно.
    
    alert('Контекстное меню кнопки');
})
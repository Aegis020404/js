let socket = new WebSocket('ws://127.0.0.1:5500/3%20js%20program/3%20Тематические%20разделы/3%20Сетевые%20запросы/11%20WebSocket/index.html');


// Как только объект WebSocket создан, мы должны слушать его события. Их всего 4:

// open – соединение установлено,
// message – получены данные,
// error – ошибка,
// close – соединение закрыто.


socket.onopen = function(e) {
    console.log(`[open] Соединение установлено`);
    console.log(`Отправка данных на сервер`);
    socket.send('Меня зовут Джон');
};

socket.onmessage = function(e) {
    console.log(`[message] данные получены с сервера ${e.data}`);
};

socket.onclose = function(e) {
    if(e.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
    } else {
        // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    console.log('[close] Соединение прервано');
    }
};

socket.onerror = function(err) {
    console.log(`[error] ${err.message}`);
};


// Основы

    // 1 Создаём новый XMLHttpRequesr-объект
    let xhr = new XMLHttpRequest();

    // 2. Настраиваем его: GET-запрос по URL /article/.../load
    xhr.open('GET','https://catfact.ninja/fact');

    // 3 Отсылаем запрос
    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        } else {
            console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
        }
    }

    xhr.onprogress = function(e) {
        if (e.lengthComputable) {
            console.log(`Получено ${e.loaded} из ${e.total} байт`)
        } else {
            console.log(`Получено ${e.loaded} байт`)
        }
    };

    xhr.onerror = function() {
        console.log(`Запрос не удался`);
    }

// Тип ответа

    
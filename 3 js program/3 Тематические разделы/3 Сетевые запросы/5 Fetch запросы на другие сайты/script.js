try {
    // await fetch('http://example.com');
  } catch(err) {
    console.log(`error`); // Failed to fetch
  }


//   Простые запросы
    // Есть два вида запросов на другой источник:
    // Простые.
    // Все остальные.


    //     Простой запрос – это запрос, удовлетворяющий следующим условиям:
    // Простой метод: GET, POST или HEAD
    // Простые заголовки – разрешены только:
    // Accept,
    // Accept-Language,
    // Content-Language,
    // Content-Type со значением application/x-www-form-urlencoded, multipart/form-data или text/plain.


// CORS для простых запросов
    // Вот пример ответа сервера, который разрешает доступ:
    // 200 OK
    // Content-Type:text/html; charset=UTF-8
    // Access-Control-Allow-Origin: https://javascript.info


// Заголовки ответа
    // По умолчанию при запросе к другому источнику JavaScript может получить доступ только к так называемым «простым» заголовкам ответа:

    // Cache-Control
    // Content-Language
    // Content-Type
    // Expires
    // Last-Modified
    // Pragma

    //     Чтобы разрешить JavaScript доступ к любому другому заголовку ответа, сервер должен указать заголовок Access-Control-Expose-Headers. Он содержит список, через запятую, заголовков, которые не являются простыми, но доступ к которым разрешён.

    // Например:

    // 200 OK
    // Content-Type:text/html; charset=UTF-8
    // Content-Length: 12345
    // API-Key: 2c9de507f2c54aa1
    // Access-Control-Allow-Origin: https://javascript.info
    // Access-Control-Expose-Headers: Content-Length,API-Key
    // При таком заголовке Access-Control-Expose-Headers, скрипту разрешено получить заголовки Content-Length и API-Key ответа.


// Непростые запросы
    // Предварительный запрос использует метод OPTIONS, у него нет тела, но есть два заголовка:

    // Access-Control-Request-Method содержит HTTP-метод «непростого» запроса.
    // Access-Control-Request-Headers предоставляет разделённый запятыми список его «непростых» HTTP-заголовков.

    // Если сервер согласен принимать такие запросы, то он должен ответить без тела, со статусом 200 и с заголовками:

    // Access-Control-Allow-Methods должен содержать разрешённые методы.
    // Access-Control-Allow-Headers должен содержать список разрешённых заголовков.
    // Кроме того, заголовок Access-Control-Max-Age может указывать количество секунд, на которое нужно кешировать разрешения. Так что браузеру не придётся посылать предзапрос для последующих запросов, удовлетворяющих данным разрешениям.



    let response = await fetch('https://api.publicapis.org/entries',{
        
    }).then(e => e.json()).then(e => console.log(e))



    
    // let response1 = await fetch('https://api.publicapis.org/entries').then(e => e.json()).then(e => console.log(e))





    // let response = await fetch('https://site.com/service.json',{
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'API-Key': 'secret'
    //     }
    // })

// // Открыть базу данных

//         let openRequest = indexedDB.open('fsirst',2);
//         // let deleteRequest = indexedDB.deleteDatabase('fsirst')


//         // success: база данных готова к работе, готов «объект базы данных» openRequest.result, его следует использовать для дальнейших вызовов.
//         // error: не удалось открыть базу данных.
//         // upgradeneeded: база открыта, но её схема устарела (см. ниже).

//         openRequest.onerror = function(e) {
//             console.log('onerror');
//         };

//         openRequest.onupgradeneeded = function(e) {
//             console.log('upgradeneeded');
//         };

//         openRequest.onsuccess = function(e) {
//             console.log('success');

//             let db = openRequest.result;
//             console.log(db)
            
//             db.onversionchange = function() {
//                 db.close();
//                 console.log(`База данных устарела, пожалуйста, перезагрузите страницу.`);
//             }
            
//             // db.createObjectStore('books', {keyPath: 'id'});
//         };
        
//         openRequest.onblocked = function() {
//             // есть другое соединение к той же базе
//             // и оно не было закрыто после срабатывания на нём db.onversionchange
//         }
        

// Хранилище объектов

    // Синтаксис для создания хранилища объектов:
    // db.createObjectStore(name[, keyOptions]);


    let openRequest = indexedDB.open('db',2);
    let db
    // создаём хранилище объектов для books, если ещё не существует
    openRequest.onupgradeneeded = function() {
         db = openRequest.result;
         console.log('start')
        if(!db.objectStoreNames.contains('books')) { // если хранилище 'books' не существует
        db.createObjectStore('books', {keyPath:'id'}); // создаём хранилище
        }
    };
    openRequest.onsuccess = indexed
    // Чтобы удалить хранилище объектов:
    // db.deleteObjectStore('books')


// транзакции
    // db.transaction(store[, type]);
    // store – это название хранилища, к которому транзакция получит доступ, например, "books". Может быть массивом названий, если нам нужно предоставить доступ к нескольким хранилищам.
    // type – тип транзакции, один из:
    // readonly – только чтение, по умолчанию.
    // readwrite – только чтение и запись данных, создание/удаление самих хранилищ объектов недоступно.

    // let transaction = db.transaction("books", "readwrite"); // (1)

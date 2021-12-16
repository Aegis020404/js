// Создание URL
    let url = new URL('https://javascript.info/profile/admin');
    let urlB = new URL('/profile/admin', 'https://javascript.info');

    console.log(url); // https://javascript.info/profile/admin
    console.log(urlB); // https://javascript.info/profile/admin

    let newUrl = new URL('tester',url);

    console.log(newUrl.href); // https://javascript.info/profile/tester


    let nowUrl = new URL('http://127.0.0.1:5500/3%20js%20program/3%20Тематические%20разделы/3%20Сетевые%20запросы/7%20Объекты%20URL/index.html');
    console.log(nowUrl);

    let vkUrl = new URL('https://vk.com/aegis020404');
    console.log(vkUrl);


// SearchParams «?…»
    // append(name, value) – добавить параметр по имени,
    // delete(name) – удалить параметр по имени,
    // get(name) – получить параметр по имени,
    // getAll(name) – получить все параметры с одинаковым именем name (такое возможно, например: ?user=John&user=Pete),
    // has(name) – проверить наличие параметра по имени,
    // set(name, value) – задать/заменить параметр,
    // sort() – отсортировать параметры по имени, используется редко,
    // …и является перебираемым, аналогично Map.

    let url2 = new URL('https://google.com/search');
    console.group()
    console.log(url2); // https://google.com/search

    url2.searchParams.set('q','test me!'); // добавим параметр, содержащий пробел и 
    console.log(url2); // https://google.com/search?q=test+me%21

    url2.searchParams.set('tbs', 'qdr:y'); // параметр в двоеточием :
    console.log(url2.href); // ?q=test+me%21&tbs=qdr%3Ay

    for(let [name, value] of url2.searchParams) {
        console.log(`${name} = ${value}`); // q=test me!, далее tbs=qdr:y
    }


// Кодирование
    // encodeURI – кодирует URL-адрес целиком.
    // decodeURI – декодирует URL-адрес целиком.
    // encodeURIComponent – кодирует компонент URL, например, параметр, хеш, имя пути и т.п.
    // decodeURIComponent – декодирует компонент URL.

//     encodeURI кодирует только символы, полностью запрещённые в URL.
    // encodeURIComponent кодирует эти же символы плюс, в дополнение к ним, символы #, $, &, +, ,, /, :, ;, =, ? и @.
// Цепочка промисов
    new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1),1000);
    }).then(function(result) {
        console.log(result); // 1
        return result * 2;
    }).then(function(result) {
        console.log(result); // 2
        return result * 2;
    }).then(function(result) {
        console.log(result); // 4
        return result * 2;
    })


// Возвращаем промисы
    new Promise(function(resolve, reject) {
        
        setTimeout(() => resolve(1), 1000)
    }).then(function(result) {

        console.log(result); // 1

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000)
         });
    }).then(function(result) {
        console.log(result); // 2

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });
    }).then(function(result) {
        console.log(result); // 4
    });


// Пример: loadScript

    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

            document.head.append(script);
        })
    }

    loadScript('script1.js')
        .then(function(script) {
            return loadScript('script2.js');
        })
        

// Более сложный пример: fetch
{
    // let promise = fetch(url)

    fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
    // .then в коде ниже выполняется, когда удалённый сервер отвечает
    .then(function(response) {
        // response.text() возвращает новый промис,
        // который выполняется и возвращает полный ответ сервера,
        // когда он загрузится
        return response.text();
    })
    .then(function(text) {
        // ...и здесь содержимое полученного файла
        console.log(text); // {"name": "iliakan", isAdmin: true}
    })

    fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
        .then(response => response.json())
        .then(user => console.log(user)) // вызовет объект который был запарсит в fetch
}
{
    // дилаем запрос в gitHub
    fetch(`https://api.github.com/users/leerob`)
    .then(response => response.json())
    .then(githubUser => new Promise(function(resolve, reject){
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .then(githubuser => console.log(`Закончили показ ${githubuser.name}`))
}
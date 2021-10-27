// Потребители: then, catch, finally
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=> resolve('done'),10);
        reject(new Error);
    });

    // resolve запустит первую функцию, переданную в .then
        // promise.then(
            // result => console.log(result),
            // error => console.log(error)
        // );

    // для нахождения ошибки можно использовать catch
        promise.catch(console.log)

    // finаlly работает так же как и в случае try..catch

    .finally(()=> console.log('Промис завершён '))


// Пример: loadScript
    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = ()  => resolve(script);
            script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`))

            document.head.append(script);
        });
    }

    // promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

    // promise.then(
    //     script => console.log(`${script.src} загружен`),
    //     error => console.log(`Error ${error.message}`)
    // )

    // promise.then(script => console.log(`Типо ещё один обработчик...`))


// Задержка на промисах

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    delay(1000).then((a) => console.log(`Выролнится через секунду`))



// Анимация круга с помощью промиса
    function showCircle(cx, cy, radius) {
        return new Promise(function(resolve) {

        
        let div = document.createElement('div');
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + 'px';
        div.style.top = cy + 'px';
        div.className = 'circle';
        document.body.append(div);

        setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            resolve(div);
        })
        }, 0);
    })
    }




    function go() {
        showCircle(150, 150, 100).then(div => {
            div.classList.add('message-ball');
            div.append("Hello, world!");
          });
    }
// Блокировка попапов
    window.open('https://javascript.info/');// не сработает

    onMus.onclick = function(e) {
        window.open('https://music.youtube.com/watch?v=DauNkoppwTk&list=RDTMAK5uy_k5UUl0lmrrfrjMpsT0CoMpdcBz1ruAO1k', this.name,);
        console.log('qwe')
    }

    let autoclick = new MouseEvent('click');
    onMus.dispatchEvent(autoclick) // попап даже так не сработает

    document.addEventListener('mouseover',function(e) {
        console.log('1');
        window.open('https://learn.javascript.ru/introduction-browser-events')
    }) 

// Полный синтаксис window.open
    // Синтаксис открытия нового окна: window.open(url, name, params):


// Закрытие попапа
    // Чтобы закрыть окно: win.close()
    
    // Для проверки, закрыто ли окно: win.closed.
    
    // Технически метод close() доступен для любого окна, но window.close() будет игнорироваться большинством браузеров, если window не было создано с помощью window.open(). Так что он сработает только для попапов.
    
    // Если окно закрыто, то его свойство closed имеет значение true. Таким образом можно легко проверить, закрыт ли попап (или главное окно) или все ещё открыт. Пользователь может закрыть его в любой момент, и наш код должен учитывать эту возможность.
    
    // Этот код откроет и затем закроет окно:
        // let newWindow = open('/', 'example', 'width=300,height=300');
        
        // newWindow.onload = function() {
        //   newWindow.close();
        //   alert(newWindow.closed); // true
        // };


// Прокрутка окна
    // Мы уже говорили о прокрутке окна в главе Размеры и прокрутка окна.

    // win.scrollBy(x,y)
    // Прокрутить окно на x пикселей вправо и y пикселей вниз относительно текущей прокрутки. Допустимы отрицательные значения.
    // win.scrollTo(x,y)
    // Прокрутить окно до заданных координат (x,y).
    // elem.scrollIntoView(top = true)
    // Прокрутить окно так, чтобы elem для elem.scrollIntoView(false) появился вверху (по умолчанию) или внизу.
    // Также существует событие window.onscroll.

    
    document.body.addEventListener('click',function(e) {
        let newWindow = open('about:blank', 'example', 'width=300,height=300')
    newWindow.opener.test = 123;
    newWindow.addEventListener('DOMContentLoaded', function() {
    this.document.write('<script>alert(window.opener.test);<\/script>');
    });
    setTimeout(() => newWindow.close(), 1000);
    });
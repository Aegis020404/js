// Использование setInterval
    train.onclick = function() {
        let start = Date.now();

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;

            train.style.left = timePassed / 5 + 'px';

            if (timePassed > 2000) clearInterval(timer);
        },20);
    }



// Использование requestAnimationFrame
    // let requestId = requestAnimationFrame(callback)
    // Такой вызов планирует запуск функции callback на ближайшее время, когда браузер сочтёт возможным осуществить анимацию.

    // отмена запланированного запуска callback
    // cancelAnimationFrame(requestId);

    let prev = performance.now();
    let times = 0;

    requestAnimationFrame(function measure(time) {
        document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
        prev = time;

        if (times++ < 10) requestAnimationFrame(measure)
    })


// Структура анимации
    function animate ({timing, draw, duration}) {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);

            draw(progress); //отрисовать её

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }

    
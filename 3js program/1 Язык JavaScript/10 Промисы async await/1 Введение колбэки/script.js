    function loadScript(src) {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
    }

    // Загрузит и выполнит скрипт
        // loadScript('script1.js');
    // код, написанный после вызова функций loadshift,
    // не будет дожидаться полной загрузки скрипта


    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);

        document.head.append(script);
    }

    // loadScript('script1.js',()=> console.log(i))
    // console.log(i) выведет ошибку так как не успела загрузится паременная

    // Такое написание называют асинхронным программированием с использованием колбэков. В функции, которые выполняют какие-либо асинхронные операции, передаётся аргумент callback — функция, которая будет вызвана по завершению асинхронного действия.

    // Мы поступили похожим образом в loadScript, но это, конечно, распространённый подход.


// Колбэк в колбэке
    // Это возможно делать но желательно не боле 2-3


// Перехват ошибок
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => callback(null, script);
        script.onerror = () => callback(new Error(`Не удалось загрузить скрип ${src}`));

        document.head.append(script);
    };

    // loadScript('/my/script1.js', function(error,script) {
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         console.log('script1 loaded')
    //     }
    // })
    

// Адская пирамида вызовов

    // loadScript('1.js', function(error, script) {

    //     if (error) {
    //     handleError(error);
    //     } else {
    //     // ...
    //     loadScript('2.js', function(error, script) {
    //         if (error) {
    //         handleError(error);
    //         } else {
    //         // ...
    //         loadScript('3.js', function(error, script) {
    //             if (error) {
    //             handleError(error);
    //             } else {
    //             // ...и так далее, пока все скрипты не будут загружены (*)
    //             }
    //         });
    
    //         }
    //     })
    //     }
    // });
    
        // loadScript('1.js', step1);

        // function step1(error, script) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         // ...
        //         loadScript('2.js', step2);
        //     }
        // }

        // function step2(error, script) {
        //     if (error) {
        //       handleError(error);
        //     } else {
        //       // ...
        //       loadScript('3.js', step3);
        //     }
        //   }
        
        //   function step3(error, script) {
        //     if (error) {
        //       handleError(error);
        //     } else {
        //       // ...и так далее, пока все скрипты не будут загружены (*)
        //     }
        // }
    // Такой способ будет более удобным, но всё равно лучше исользовать промисы



// Анимация круга с помощью колбэка
    
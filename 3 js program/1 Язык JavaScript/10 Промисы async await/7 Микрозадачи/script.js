// Очередь микрозадач
    let promise = Promise.resolve(new Date);

    promise.then((date) => console.log(`Промис был выполнен ${date}`));

    console.log('сработает быстрее, чем then');


// Необработанные ошибки
    promise = Promise.reject(new Error("Ошибка в промисе!"));

    setTimeout(() => promise.catch(err => console.log('поймана')), 1000);

    // Ошибка в промисе!
    window.addEventListener('unhandledrejection', event => console.log(event.reason));
    console.log('git reverst');
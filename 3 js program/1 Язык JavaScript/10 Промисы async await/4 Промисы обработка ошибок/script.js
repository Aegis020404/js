// Промисы: обработка ошибок
    fetch('https://no-such-server.blabla') // ошибка
    .then(response => response.json())
    .catch(err => console.log(err)) // TypeError: Failed to fetch


// Неявный try…catch
    new Promise((resolve, reject) => {
        throw new Error('Ошибка');
    }).catch(console.log)

    new Promise((resolve, reject) => {
        resolve('ок');
    }).then((result) => {
        throw new Error('Ошибка!'); //генерирует ошибку
    }).catch(console.log);
    // Финальный .catch перехватывает как промисы, в которых вызван reject, так и случайные ошибки в обработчиках.


// Пробрасываeмые ошибки
    new Promise((resolve, reject) => {

        throw new Error('Ошибка!');

    }).catch(function(error) {
        console.log('Ошибка обработана, продолжить работу');

    }).then(() => console.log('Управление перейдёт в следующий then'))

{
    new Promise((resolve, reject) => {

        throw new Error('Error!');

    }).catch((error)=> {

        if(error instanceof URIError) {
            // обрабатываем ошибку
        } else {
            console.log('Не могу обработать ошибку');

            throw error;
        }
    }).then(() =>{
        // не выполнится
    }).catch(error => {
        console.log(`Не известная ошибка: ${error}`);
        // ничего не возвращаем выполнение продолжается в нормальном режиме
    })
}


// Необработанные ошибки
{
    window.addEventListener('unhandledrejection', function(event) {
        // Объект события имеет два специальных свойства:
        console.log(event.promise); // [object Promise] - промис, который сгенерировал ошибку
        console.log(event.reason); // Error:ошибка! - объект ошибки, которая не была обработана
    });

    new Promise(function() {
        throw new Error('Ошибка!')
    }); // нет обработчка ошибок
}
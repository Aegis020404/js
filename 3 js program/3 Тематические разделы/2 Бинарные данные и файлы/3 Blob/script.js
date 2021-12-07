// new Blob(blobParts, options)

// создаём blob из строки типизированного массива
let blob = new Blob(['<html>...</html>'], {type:'text/html'})
// первый аргумент должен быть массивом

{
    // Создаём Blob из типизированного массива и строк
    let hello = new Uint8Array([72, 101, 108, 108, 111]); // hello
    let blob = new Blob([hello,' ','world'], {type:'text/plain'})
    console.log(blob);
}


// Blob как URL
{
    let blob = new Blob(["hello, world"], {type:'text/plain'});

    link.href = URL.createObjectURL(blob)
}

{
    let link = document.createElement('a');
    link.download = 'hello.txt';

    let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

    link.href = URL.createObjectURL(blob);

    link.innerHTML = '<br>Через Script'
    document.body.append(link)
}


// Blob to base64
{
    // Альтернатива URL.createObjectURL – конвертация Blob-объекта в строку с кодировкой base64.

    let link = document.createElement('a');
    link.download = 'hello.txt';

    let blob = new Blob(['Hello, world'], {type: 'text/plain'});

    let reader = new FileReader();
    reader.readAsDataURL(blob); // конвертирует Blob в base64 и вызывает onload
}


// Изображение в Blob
{
    //     Для отрисовки изображения (или его части) на холсте (canvas) используется canvas.drawImage.
    //     Вызов canvas-метода .toBlob(callback, format, quality) создаёт Blob и вызывает функцию callback при завершении.
    
    // берём изображение для примера
    let img = document.querySelector('img');

    // создаём <canvas> того же изображения
    let canvas = document.createElement('canvas');
    canvas.width = img.clientWidth; 
    canvas.height = img.clientHeight; 

    let context = canvas.getContext('2d');

    // копируем изображение в canvas(метод позволяет вырезать часть изображения)
    context.drawImage(img, 0,0);
    // мы можем вращать изображение при помощи context.rotate()  и делать множество других преобразований
    document.body.append(canvas)

    // toBlob являетсся ассинхронной операцией, для которой callback-функция вызывается при завершении
    canvas.toBlob(function(blob) {
        // после того, как Blob создан, загружаем его
        let link = document.createElement('a');
        link.download = 'examplesqQWER.png';
        link.innerHTML='<br>Загрузить фото'
        document.body.append(link)
        link.href = URL.createObjectURL(blob);
        // link.click();
      
        // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
        URL.revokeObjectURL(link.href);
      }, 'image/png');
}


// Из Blob в ArrayBuffer
    // Конструктор Blob позволяет создать Blob-объект практически из чего угодно, включая BufferSource.
    // Но если нам нужна производительная низкоуровневая обработка, мы можем использовать ArrayBuffer из FileReader:

{
    // получаем arrayBuffer из Blob
    let fileReader = new FileReader();

    fileReader.readAsArrayBuffer(blob);
    console.log(fileReader)

    fileReader.onload = function(event) {
        let arrayBuffer = fileReader.result;
        console.log(arrayBuffer)
    }

}
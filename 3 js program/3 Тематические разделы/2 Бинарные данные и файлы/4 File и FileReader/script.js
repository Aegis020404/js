function showFile(input) {
    let file = input.files[0];

    console.log(`File name: ${file.name}`); // имя файла
    console.log(`Last modified: ${file.lastModified}`) // последние изменения
    console.log(new Date(file.lastModified));
}


// FileReader
    // FileReader объект, цель которого читать данные из Blob (и, следовательно, из File тоже).

    // Данные передаются при помощи событий, так как чтение с диска может занять время.

    // Конструктор:

    // let reader = new FileReader(); // без аргументов
    // Основные методы:

    // readAsArrayBuffer(blob) – считать данные как ArrayBuffer
    // readAsText(blob, [encoding]) – считать данные как строку (кодировка по умолчанию: utf-8)
    // readAsDataURL(blob) – считать данные как base64-кодированный URL.
    // abort() – отменить операцию.
    //     Выбор метода для чтения зависит от того, какой формат мы предпочитаем, как мы хотим далее использовать данные.

    // readAsArrayBuffer – для бинарных файлов, для низкоуровневой побайтовой работы с бинарными данными. Для высокоуровневых операций у File есть свои методы, унаследованные от Blob, например, slice, мы можем вызвать их напрямую.
    // readAsText – для текстовых файлов, когда мы хотим получить строку.
    // readAsDataURL – когда мы хотим использовать данные в src для img или другого тега. Есть альтернатива – можно не читать файл, а вызвать URL.createObjectURL(file), детали в главе Blob.
    // В процессе чтения происходят следующие события:

    // loadstart – чтение начато.
    // progress – срабатывает во время чтения данных.
    // load – нет ошибок, чтение окончено.
    // abort – вызван abort().
    // error – произошла ошибка.
    // loadend – чтение завершено (успешно или нет).
    // Когда чтение закончено, мы сможем получить доступ к его результату следующим образом:

    // reader.result результат чтения (если оно успешно)
    // reader.error объект ошибки (при неудаче).
    // Наиболее часто используемые события – это, конечно же, load и error.


    function readFile(input) {
        let file = input.files[0];

        // let reader = new FileReader();
        let reader = new readAsDataURL;

        reader.readAsText(file);

        reader.onload = function() {
            console.log(reader.result);
        };

        reader.onerror = function() {
            console.log(reader.error);
        };

    }
// let decder = new TextDecoder([label], [options])

// input – бинарный буфер (BufferSource) для декодирования.
// options – объект с дополнительными настройками:
// stream – true для декодирования потока данных, при этом decoder вызывается вновь и вновь для каждого следующего фрагмента данных. В этом случае многобайтовый символ может иногда быть разделён и попасть в разные фрагменты данных. Это опция указывает TextDecoder запомнить символ, на котором остановился процесс, и декодировать его со следующим фрагментом.

let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

console.log( new TextDecoder().decode(uint8Array)); // Hello


// TextEncoder
    // TextEncoder поступает наоборот – кодирует строку в бинарный массив.
    {
    let encoder = new TextEncoder();
    let uint8Array = encoder.encode("Hello");
    console.log(uint8Array)

}
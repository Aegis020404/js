    let buffer = new ArrayBuffer(16); // создаёт буфер длиной 16 байт
        console.log(buffer)
        console.log(buffer.byteLength); // 16

    let view = new Uint32Array(buffer);
        console.log(view)
        console.log(view.BYTES_PER_ELEMENT); //4 байта на каждое целое число

        // запишем какое-нибудь значение
        view[0] = 123456;

        // теперь пройдём по всем значением 
        for(let num of view) {
            document.body.innerHTML += `${num} </br>`; // 123456, потом 0, 0, 0(всего 4 значения)
        }


// TypedArray
    // Есть 5 вариантов создания типизированных массивов:
        // new TypedArray(buffer, [byteOffset], [length]);
        // new TypedArray(object);
        // new TypedArray(typedArray);
        // new TypedArray(length);
        // new TypedArray();
{
    let arr = new Uint8Array([0, 1, 2, 3]);
    console.log(arr.length); // 4
    console.log(arr[1]); // 1
}
{
    let arr16 = new Uint16Array([1,1000]);
    let arr8 = new Uint8Array(arr16);
    console.log(arr8[0]); // 1
    console.log(arr8[1]); // 232 потому что 1000 не помещается в 8 бит
    console.log(arr8)
}
{
    let arr = new Uint16Array(4); // создаёт типизированный массив для 4 целых 16-битных чисел без знака
    console.log( Uint16Array.BYTES_PER_ELEMENT); // 2 байта на число
    console.log( arr.byteLength); // 8 (размер массивов в байтах)
}
{
    // Для доступа к ArrayBuffer в TypedArray есть следующие свойства:
        // buffer – ссылка на объект ArrayBuffer.
        // byteLength – размер содержимого ArrayBuffer в байтах.
    let arr8 = new Uint8Array([0,1,2,3]);

    // другое представление на тех же данных
    let arr16 = new Uint16Array(arr8.buffer);
    console.log(arr8)
    console.log(arr16)
}


// DataView
{
    let buffer = new Uint8Array([255, 255, 255, 255]).buffer;
    console.log(buffer);
    let dataView = new DataView(buffer);

    //  получим 8-битное число на позиции 0
    console.log(dataView.getUint8(0)); // 255
    console.log(dataView.getUint8(0).toString(2)); // 255
    console.log(dataView.getUint16(0)); // 65535
    console.log(dataView.getUint16(0).toString(2)); // 65535
    console.log(dataView.getUint32(0)); // 4294967295
    console.log(dataView.getUint32(0).toString(2)); // 4294967295
    dataView.setUint32(0,0)
    console.log(dataView.getUint32(0));// 0

}

console.clear()
// задача

function concat(arrays) {
    arrays =  arrays.map(arr => Array.from(arr))
    .join(',')
    .split(',')
    .map(item => +item)
  

    return new Uint8Array(arrays)
}
  
  let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8])
  ];
  


console.log(concat(chunks))

  console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8
  
  console.log(concat(chunks).constructor.name); // Uint8Array

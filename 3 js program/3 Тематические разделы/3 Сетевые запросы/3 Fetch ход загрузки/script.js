
// Шаг 1: начинаем загрузку fetch, получаем поток для чтения
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

const reader = response.body.getReader();

// Шаг 2: получаем длину содержимого ответа
const contentLength = +response.headers.get('Content-Length');


// Шаг 3: считываем данные:
let receivedLength = 0; // колличество байт, полученных на данный момент
let chunks = []; // массив полученных двоичных фрагментов(составляющих тело ответа)
while(true) {
    const {done, value} = await reader.read();
    // console.log(`${done} _____ ${value}`)  
    if (done) break;
    chunks.push(value);
    receivedLength +=value.length;

    console.log(`Получено ${receivedLength} из ${contentLength}`)
}

// Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array 
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;
for(let chunk of chunks) {
    chunksAll.set(chunk, position);
    position +=chunk.length;
}

// Шаг 5: декодируем Uint8Array обработано в строку
let result = new TextDecoder('utf-8').decode(chunksAll);

// Готово!
let commits = JSON.parse(result);
console.log(commits[0].author.login)
console.log(commits)
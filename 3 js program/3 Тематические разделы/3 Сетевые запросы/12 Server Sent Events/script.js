    // let eventSource = new EventSource('./server.js');

    // eventSource.onmessage = function(e) {
    //     console.log(`Новое сообщение: ${e}`)
    // };

    // eventSource.onerror = (e) => console.log('error: ' + e);


// Кросс-доменные запросы
let source = new EventSource("server.js", {
    withCredentials: true
  });
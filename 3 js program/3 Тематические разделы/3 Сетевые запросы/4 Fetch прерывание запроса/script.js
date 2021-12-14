// let controller = new AbortController();
// console.log(controller);

// let signal = controller.signal;
// console.log(signal);


// controller.abort(); // отмена!
// console.log(signal.aborted);


// let controller = new AbortController();
// fetch('https://api.publicapis.org/entries', {
    //     signal: controller.signal
    // });
    
    // controller.abort(); // прерванно
    
    
    
    // let urls = [...]; // список URL для параллельных fetch
    
    // let controller = new AbortController();
    
    // let fetchJobs = urls.map(url => fetch(url, {
        //   signal: controller.signal
        // }));
        
        // let results = await Promise.all(fetchJobs);
        
        // если откуда-то вызвать controller.abort(),
        // то это прервёт все вызовы fetch
        
        
        let urls = ['https://api.publicapis.org/entries','https://catfact.ninja/fact',];
let controller = new AbortController();
controller.signal.addEventListener('abort', () => console.log('Отмена!'));

let ourJob = new Promise((resolve, reject) => { // наша задача
  
    controller.signal.addEventListener('abort', reject);
});

let fetchJobs = urls.map(url => fetch(url, { // запросы fetch
    signal: controller.signal
}));

// ожидать выполнения нашей задачи и всех запросов
controller.abort();
let results = await Promise.all([...fetchJobs, ourJob]);
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки ${src}`));

    document.head.append(script);
}

let loadScriptPromsie = function(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err)
            else resolve(script)
        });
    })
}
// использование:
// loadScriptPromise('.../script.js').then(...)


// function promisify(f) {
//     return function(...args) { // возвращает функцию обёртку
//         return new Promise((resolve, reject) => {
//             function callback(err, result) {
//                 if (err) {
//                     return reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             }

//             args.push(callback);
//             f.call(this, ...args);
//         });
//     };
// };

// использование:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise('script1.js').then(()=>{
    console.log(i); // переменная загрузилась
})


// улучшенная версия promisify
    function promisify(f, manyArgs = false) {
        return function(...args) {
            return new Promise((resolve,reject) => {
                function callback(err, ...results) {
                    if(err) {
                        return reject(err);
                    }else {
                    // делаем resolve для всех results колбэка, если задано manyArgs
                    resolve(manyArgs ? results : results[0]);
                    }
                }

                args.push(callback);

                f.call(this, ...args);
            });
        };
    };

    // использование
let loadScriptMany = promisify(loadScript, true);
loadScriptMany('script2.js')

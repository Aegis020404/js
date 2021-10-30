// Promise.all
    // let promise = Promise.all([...промисы...])

    Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1),3000)),
        new Promise(resolve => setTimeout(() => resolve(2),2000)),
        new Promise(resolve => setTimeout(() => resolve(3),1000))
    ]).then(console.log);


    let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://api.github.com/users/jeresig'
      ];

    // преобразуем каждый URL в промис, возвращаемый fetch
    let request = urls.map(url => fetch(url));
    console.log(request);

    // Promise.all будет ожидать выполнение всех промисов
    Promise.all(request)
      .then(responses => responses.forEach(
          response => console.log(`${response.url}: ${response.status}`)
      ))


      let names = ['iliakan', 'remy', 'jeresig',];

      request = names.map(name => fetch(`https://api.github.com/users/${name}`));

      Promise.all(request)
        .then(responses => {
            for(let response of responses) {
                console.log(`${response.url}: ${response.status}`);
            }

            return responses;
        })
        // преобразовать массив ответов response в response.json(),
        // чтобы прочитать содержимое каждого
        .then(responses => Promise.all(responses.map(r => r.json())))
         // все JSON-ответы обработаны, users - массив с результатами
        .then(users => users.forEach(user => console.log(user.name)));


// Promise.all(iterable) разрешает передавать не-промисы в iterable (перебираемом объекте)
        Promise.all([
            new Promise((resolve,reject) => {
                setTimeout(() => {
                  resolve(1 + 'Promise')  
                });
            }),
            2,
            3,
        ]).then(console.log)


// Promise.allSettled

    urls = [ 
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://no-such-url'

    ];

    Promise.allSettled(urls.map(url => fetch(url)))
        .then(results => {
            results.forEach((result, num) => {
                if (result.status == 'fulfilled') {
                    console.log(`${urls[num]}: ${result.value.status}`);
                }
                if( result.status == 'rejected') {
                    console.log(`${urls[num]}: ${result.reason}`);
                }
            });
        });


// Полифил
    // Если браузер не поддерживает Promise.allSettled, для него легко сделать полифил:

    if(!Promise.allSettled) {
        Promise.allSettled = function(promises) {
            return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
                status: fulfilled,
                value: value
            }), error => ({
                status: 'rejected',
                reason: error
            }))));
        };
    }


// Promise.race
    // Метод очень похож на Promise.all, но ждёт только первый промис, из которого берёт результат (или ошибку).
    Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 100)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 30))
      ]).then(console.log); // 3


// Promise.resolve/reject

      let cache = new Map();

      function loadCached(url) {
          if(cache.has(url)) {
              return Promise.resolve(cache.get(url));
          }

          return fetch(url)
            .then(response => response.text())
            .then(text => {
                cache.set(url, text);
                return text
            })
      }

      loadCached('https://api.github.com/users/remy')
      .then(()=>{
        console.log(cache.has('https://api.github.com/users/remy'));
        console.log(cache.get('https://api.github.com/users/remy'))
      })

    //   Promise.reject
    //     Promise.reject(error) создаёт промис, завершённый с ошибкой error.
    // То же самое, что:
    
    //     let promise = new Promise((resolve, reject) => reject(error));
    // На
    
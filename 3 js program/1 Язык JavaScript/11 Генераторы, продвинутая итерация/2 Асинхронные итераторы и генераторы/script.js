// Асинхронные итераторы

    // let range = {
    //     from: 1,
    //     to:5,

    //     // for await..of вызывает этот метод один раз в самом начале
    //     [Symbol.asyncIterator]() {
    //         // ...возвращает объект итератор
    //         // далее for await..of работает только с этим объектом,
    //         // запрашивая у него следующие значения вызовом next()
    //         return {
    //             current: this.from,
    //             last: this.to,

    //             // next() вызывается на каждой итерации цикла for await..of
    //             async next() {
    //                 // должен возвращать значение как объект{done:..., value:...}
    //                 // (автоматически оборачивается в промис с помощью async)

    //                 // можно использовать await внутри для асинхронности:
    //                 await new Promise(resolve => setTimeout(resolve,1000));

    //                 if (this.current <= this.last) {
    //                     return { done: false, value: this.current++};
    //                 } else {
    //                     return { done: true};
    //                 }
    //             }
    //         };
    //     }
    // };

    // (async () => {
    //     for await(let item of range) {
    //         console.log(`${item} $1`);
    //     }
    // })()


// Асинхронные генераторы
    async function* generateSequence(start,end) {
        for(let i = start; i<= end; i++) {

            // можно использовать await!
            await new Promise(resolve => setTimeout(resolve,1000));

            yield i;
        }

    }

    (async () => {

        let generator = generateSequence(1,5);
        for await (let value of generator) {
            console.log(`${value} $2`)
        }
    })()


// Пример из реальной практики
    async function* fetchCommits(repo) {
        let url = `https://api.github.com/repos/${repo}/commits`;

        while (url) {
            const response = await fetch(url, {
                headers:{'User-Agent': 'Our script'}, // GitHub требует заголовок user-agent
            })
            const body = await response.json(); // (2) ответ в формате JSON (массив коммитов)
                
            // (3) Ссылка на следующую страницу находится в заголовках, извлекаем её
            let nextPage = response.headers.get('link').match(/<(.*?)>; rel="next"/);

            nextPage = nextPage && nextPage[1];

            url = nextPage;

            for (let commit of body) {
                yield commit;
            }
        }
    }
    (async () => {

        let count = 0;
      
        for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
      
          console.log(commit.author.login);
      
          if (++count == 100) { // остановимся на 100 коммитах
            break;
          }
        }
      
      })();
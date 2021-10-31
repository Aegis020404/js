// Асинхронные функции
    async function f() {
        return 1;
    }
    f().then(console.log); // выводит функцию как промис
    
    function f1() {
        return Promise.resolve(2);
    }
    f1().then(console.log);


// Await

    async function f2() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Готово!'), 1000);
        });

        let result = await promise

        console.log(result); // 'Готово!'
    }

    f2()


    async function showAvatar() {

        // запрашиваем JSON с данными пользователя
        let response = await fetch('https://learn.javascript.ru/article/promise-chaining/user.json');
        let user = await response.json();
      
        // запрашиваем информацию об этом пользователе из github
        let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
        let githubUser = await githubResponse.json();
      
        // отображаем аватар пользователя
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
      
        // ждём 3 секунды и затем скрываем аватар
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
      
        img.remove();
      
        return githubUser;
      }
      
      showAvatar();


      class Thenable {
          constructor(num) {
              this.num = num;
          }
          then(resolve, reject) {
              console.log(resolve);
            // выполнить resolve со значением this.num * 2 через 1000 мс
            setTimeout(() => resolve(this.num * 2), 1000);
          }
      };

      async function fo() {
        //  код будет ждать 1 секунду 
        // после чего значение result станет равным 2
        let result = await new Thenable(1);
        console.log(result);
      }

      fo();
    
      class Waiter {
          async wait() {
              return await Promise.resolve('waitFunc');
          }
      }

      new Waiter()
        .wait()
        .then(console.log)



// Перепишите, используя async/await
{
    async function loadJson(url) {
        let response = await fetch(url)

        if(response.status == 200) {
            let json = await response.json();
            return json
        }
        
        throw new Error(response.status)
    }

    // loadJson('no-such-user.json')
        // .catch(console.log); // Error: 404
}


// Перепишите, используя async/await
{
    class HttpError extends Error {
        constructor(response) {
            super(`${response.status} for ${response.url}`);
            this.name = 'HttpError';
            this.response = response;
        }
    }

    async function loadJson(url) {
        let response = await fetch(url)
            
               if (response.status == 200) {
                    return response.json();
                }

                throw new HttpError(response);
            
    }

// Запрашивать логин, пока github не вернёт существующего пользователя .
    async function demoGithubUser() {
        let name = prompt('Введите логин?', 'iliakan');
        try {
        let user = await loadJson(`https://api.github.com/users/${name}`)
        console.log(`Полное имя: ${user.name}`)
        return user
    } catch(err) {
        if(err instanceof HttpError && err.response.status === 404) {
            console.log(`Такого пользователя нет, пожалуйста, повторите ввод.`);
            return demoGithubUser();
            } else {
                throw err;
            }
        }
    }


    // demoGithubUser()
}


// Вызовите async–функцию из "обычной"
{
    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));
      
        return 10;
      }
      
      function f() {
        wait().then(console.log)
      }

      f()
}

    // Статистические свойства и методы
    class User {
        static staticMethod() {
            console.log( this == User);
        }
    }
    
    User.staticMethod(); // true
    
    {
    class User{}
    User.staticMethod = function() {
        console.log( this == User)
    }
    User.staticMethod()
    }
    
    
    class Article {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }
    
        static compare(articleA, articleB) {
            return articleA.date - articleB.date;
        }
    }
    
    //  использование
    let articles = [
        new Article('HTML', new Date(2019, 1, 1)),
        new Article('CSS', new Date(2019, 0, 1)),
        new Article('JavaScript', new Date(2019, 11 , 1)),
    ];
    
    articles.sort(Article.compare)
    console.log(articles)
    
    
{
    class Article {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }

        static createTodays() {
            // помним что this === Article
            return new this('Сегоднешний дайджест', new Date());
        }
    }

    let article = Article.createTodays();

    console.log(article.title); // сегоднешний дайджест
}


// Статические свойства
{
    class Article {
        static publisher = 'Илья Кантор';
    }
    // Эта возможность была добавлена в язык недавно. Примеры работают в последнем Chrome.но
    console.log(Article.publisher); // Илья Кантор
}


// Наследование статических свойств и методов
{
    class Animal {
        
        constructor(name, speed) {
            this.speed = speed;
            this.name = name;
        }

        run(speed = 0) {
            this.speed += speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}`);
        }
        static compare(animalA, animalB) {
            return animalA.speed - animalB.speed;
        }

    }

    // Наследует от Animal
    class Rabbit extends Animal {
        hide() {
            console.log(`${this.name} прячется!`);
        }
    }
    let rabbits = [
        new Rabbit('Белый кролик',10),
        new Rabbit('Чёрный кролик',5),
    ];

    rabbits.sort(Rabbit.compare);
    console.log(rabbits)
    
}


// Задача
{
    class Rabbit extends Object {
        constructor(name) {
            super(name);
          this.name = name;
        }
      }
      
      let rabbit = new Rabbit("Кроль");
      
      console.log( rabbit.hasOwnProperty('name') ); // Ошибка
}
// [[prototype]]
    let animal = {
        eats: true,
    };
    let rabbit = {
        jumps: true,
    };

    rabbit.__proto__ = animal;
    console.log(rabbit.eats);
    console.log(rabbit.jumps);


// Операция записи не использует прототип

    animal = {
        eats: true,
        walk() {
            console.log( 'этот метод не будет использоваться в rabbit');
        }
    };

    rabbit = {
        __proto__: animal
    };

    rabbit.walk = function() {
        console.log('Rabbit! Bounce-Bounce');
    };

    animal.walk();
    rabbit.walk();


    let user = {
        name: 'John',
        surname: 'Smith',

        set fullName(value) {
            [this.name, this.surname] = value.split(' ');
        },
        
        get fullName() {
            return `${this.name} ${this.surname}`;
        }
    };

    let admin = {
        __proto__: user,
        idAdmin: true,
    };

    console.log(admin.fullNam);
    admin.fullName = 'Alice Cooper';
    console.log(admin.name)
    console.log(admin.surname)
    console.log(user.surname)


// Значение «this»
    {
        let animal = {
            walk() {
                if(!this.isSleeping) {
                    console.log(`I walk`)
                }else{
                    console.log(`I am sleeping`)
                };
            },
            sleep() {
                this.isSleeping = true;
            }
        };

        let rabbit = {
            name: 'White Rabbit',
            __proto__:animal
        };

        // модифицирует rabbit.isSleeping
        rabbit.sleep();

        console.log(rabbit.isSleeping);
        console.log(animal.isSleeping);
    }


// Цикл for...in
{
    let animal = {
        eats:true
    };

    let rabbit = {
        jumps:true,
        __proto__: animal
    };

    console.log(Object.keys(rabbit));
    
    for( let prop in rabbit) console.log(prop);


    for(let prop in rabbit) {
        let isOwn = rabbit.hasOwnProperty(prop);

        if(isOwn) {
            console.log(`Our: ${prop}`);
        } else {
            console.log(`Inherited: ${prop}`);
        }
    }
};


// Алгоритм поиска
{
    let head = {
        glasses: 1
      };
      
      let table = {
        pen: 3
      };
      
      let bed = {
        sheet: 1,
        pillow: 2
      };
      
      let pockets = {
        money: 2000
      };

      pockets.__proto__ = bed;
      bed.__proto__ = table;
      table.__proto__ = head;
      
}


{
    let hamster = {
        stomach: [],
      
        eat(food) {
          this.stomach.push(food) 
        }

      };
      
      let speedy = {
        __proto__: hamster,
        stomach: []
      };
      
      let lazy = {
        __proto__: hamster,
        stomach: []
      };
      
      // Этот хомяк нашёл еду
      speedy.eat("apple");
      console.log( speedy.stomach ); // apple
      
      // У этого хомяка тоже есть еда. Почему? Исправьте
      console.log( lazy.stomach ); // apple
      console.log(speedy)
}
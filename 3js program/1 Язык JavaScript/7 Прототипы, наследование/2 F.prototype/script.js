//  F.prototype по умолчанию, свойство constructor
    let animal = {
        eats: true,
    };

    function Rabbit(name) {
        this.name = name;
        console.log( name );
    }

    Rabbit.prototype = animal;

    let rabbit = new Rabbit('White Rabbit');

    console.log( rabbit.eats );


    function Rabbit1() {
        // по умолчанию
        // Rabbit1.prototype = { constructor: Rabbit1 }
    }

    console.log( Rabbit1.prototype.constructor === Rabbit1); //true

    let rabbit1 = new Rabbit1(); // наследует от {constructor: Rabbit1}

    console.log( rabbit1.constructor === Rabbit1); // true (свойство по умолчанию из прототипа)
    
    let rabbit2 = new rabbit.constructor("Black Rabbit");
    console.log(rabbit);
    console.log(rabbit2);    
    console.log(rabbit2.constructor()); // false ( есть прототип )
    console.log(rabbit2.constructor === Rabbit); // false ( есть прототип )
    {
        function Rabbit(name) {
            this.name = name;
            console.log(name);
          }
          
          let rabbit = new Rabbit("White Rabbit");
          
          let rabbit2 = new rabbit.constructor("Black Rabbit");
          console.log(rabbit);
          console.log(rabbit2);
    }





{
// Изменяем "prototype"
    function Rabbit() {}
    Rabbit.prototype = {
        eats: true,       
    };
    
    let rabbit = new Rabbit();
    console.log( rabbit.eats );
}
{
    function Rabbit() {}
    Rabbit.prototype = {
    eats: true
    };

let rabbit = new Rabbit();
console.log( rabbit );
delete Rabbit.prototype.eats

console.log( rabbit); // ?
}
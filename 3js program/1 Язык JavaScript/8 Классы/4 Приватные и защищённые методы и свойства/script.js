// Внутренние и внешние интерфейсы
    // Внутренний интерфейс – методы и свойства, доступные из других методов класса, но не снаружи класса.
    // Внешний интерфейс – методы и свойства, доступные снаружи класса.

    // Внутренний интерфейс – методы и свойства, доступные из других методов класса, но не снаружи класса.
    // Внешний интерфейс – методы и свойства, доступные снаружи класса.


// Защищённое свойство «waterAmount»
    class CoffeeMachine {
         waterAmount = 0; // колличество воды внутри

        constructor(power) {
            this.power = power;
            console.log(`Создана кофеварка, мощность: ${power}`);
        }

    }

    // создаём кофеварку
    let coffeeMachine = new CoffeeMachine(100);

    console.log(coffeeMachine.waterAmount)
    coffeeMachine.waterAmount = 200;
    console.log(coffeeMachine.waterAmount)
    console.log(coffeeMachine)

    // Защищённые свойства обычно начинаются с префикса _.
    // Это не синтаксис языка: есть хорошо известное соглашение между программистами, что такие свойства и методы не должны быть доступны извне. Большинство программистов следуют этому соглашению.

{
    class CoffeeMachine {
        _waterAmount = 0;

        set waterAmount(value) {
            if(value < 0) throw new Error('Отрицательное колличество воды');
            this._waterAmount = value;
        }

        get waterAmount() {
            return this._waterAmount;
        }

        constructor(power) {
            this._power = power;
        }

        // так же создаём кофеварку
    }
    let coffeeMachine = new CoffeeMachine(100);

    // coffeeMachine.waterAmount = -10 // Error: отрицательное колличество воды
}


// Свойство только для чтения "power"
{
    class CoffeeMachine {
        constructor(power) {
            this._power = power
        }
        get power() {
            return this._power
        }

    }

    // Создаём кофеварку
    let coffeeMachine = new CoffeeMachine(100);
    console.log(coffeeMachine.power)
    coffeeMachine.power = 200
    console.log(coffeeMachine.power) // 100 так как нет сеттера
}


// Приватное свойство «#waterLimit»
    // !Новая возможность!!!!!!!!!!!!!!!!!!!
{
    class CoffeeMachine {
        #waterLimit = 200;

        #checkWater(value) {
            if(value < 0 ) throw new Error('Отрицательный уровень воды');
            if(value > this.#waterLimit) throw new Error('Слишком много воды');
        }
    }

    let coffeeMachine = new CoffeeMachine();

    // Снаружи нет доступа к приватным методом класса
    // coffeeMachine.#checkWater(); // error
    // coffeeMachine.#waterLimit = 1000; //error

}


// Итого
    // В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляция.
    // 
    // Это даёт следующие выгоды:
    // 
    // Защита для пользователей, чтобы они не выстрелили себе в ногу
        // // Представьте себе, что есть команда разработчиков, использующая кофеварку. Она была изготовлена компанией «Лучшие Кофеварки» и работает нормально, но защитный кожух был снят. Внутренний интерфейс стал доступен извне.
    // 
        // // Все разработчики культурны – они используют кофеварку по назначению. Но один из них, Джон, решил, что он самый умный, и сделал некоторые изменения во внутренностях кофеварки. После чего кофеварка вышла из строя через два дня.
    // 
    // Это, конечно, не вина Джона, а скорее человека, который снял защитный кожух и позволил Джону делать свои манипуляции.
    // 
    // То же самое в программировании. Если пользователь класса изменит вещи, не предназначенные для изменения извне – последствия непредсказуемы.
    // 
    // Поддерживаемость
        // // Ситуация в программировании сложнее, чем с реальной кофеваркой, потому что мы не просто покупаем её один раз. Код постоянно подвергается разработке и улучшению.
    // 
        // // Если мы чётко отделим внутренний интерфейс, то разработчик класса сможет свободно менять его внутренние свойства и методы, даже не информируя пользователей…
    // 
        // // Если вы разработчик такого класса, то приятно знать, что приватные методы можно безопасно переименовывать, их параметры можно изменять и даже удалять, потому что от них не зависит никакой внешний код.
    // 
    // В новой версии вы можете полностью всё переписать, но пользователю будет легко обновиться, если внешний интерфейс остался такой же.
    // 
    // Сокрытие сложности
    // Люди обожают использовать простые вещи. По крайней мере, снаружи. Что внутри – это другое дело.
    // 
    // Программисты не являются исключением.
    // 
    // Всегда удобно, когда детали реализации скрыты, и доступен простой, хорошо документированный внешний интерфейс.
    // 
    // Для сокрытия внутреннего интерфейса мы используем защищённые или приватные свойства:
    // 
        // // Защищённые поля имеют префикс _. Это хорошо известное соглашение, не поддерживаемое на уровне языка. Программисты должны обращаться к полю, начинающемуся с _, только из его класса и классов, унаследованных от него.
    // Приватные поля имеют префикс #. JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса.
    // В настоящее время приватные поля не очень хорошо поддерживаются в браузерах, но можно использовать полифил.
    // 
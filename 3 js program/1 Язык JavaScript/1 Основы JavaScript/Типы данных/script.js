// js динамически типизированный ЯП
// Всего есть 8 типов данных

    //число
        let n =123;
        n=12.345;
        let infiPlus =Infinity;
        let infiMinus =-Infinity;
        console.log(1/0)//Infinity
        let not_a_number = NaN;


    //BigInt
        // В JavaScript тип «number» не может содержать числа больше, чем (253-1) (т. е. 9007199254740991), или меньше, чем -(253-1) для отрицательных чисел. Это техническое ограничение вызвано их внутренним представлением.

        // Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:

        let bigInt = 1234567890123456789012345678901234567890n;
        let numBer =1234567890123456789012345678901234567890;
        console.log(bigInt);
        console.log(typeof bigInt);
        console.log(numBer);

    
    //Строки
        let strIng = "string"+'string'+`string`;

    
    //Булевый(логический) тип

        let nameFieldChecked = true;
        let surNameFieldChecked = false;
        let isGreater = 4 > 1;//true


    //Значение «null»
        //   В приведённом выше коде указано, что значение переменной age неизвестно.
         let age = null;
        console.log(typeof age);//object
        console.log(null===null);//true и странное поведение
        console.log(null===undefined);//false
        console.log(null+'Aegis');//nullAegis
        console.log(null+1);//1


    //Значение undefined
        // Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:
        let name;
        console.log(typeof name);
        
            
    //Объекты и символы
        // Тип object (объект) – особенный.

        // Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.

        // Тип symbol (символ) используется для создания уникальных идентификаторов в объектах. Мы упоминаем здесь о нём для полноты картины, изучим этот тип после объектов.

        

// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)















    
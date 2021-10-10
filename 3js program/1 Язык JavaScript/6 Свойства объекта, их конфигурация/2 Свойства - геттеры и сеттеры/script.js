// Геттеры и сеттеры
    let user = {
        name: 'John',
        surname: 'Smith',

        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        set fullName(value) {
            [this.name, this.surname] = value.split(' ');
        }
    };

    console.log( user.fullName);
    user.fullName = 'qewrty ytrewq ';
    console.log( user.fullName); // ничего не изменилось так как мы не имеем settera или изменилось после его добавления
    console.log(user.name) // qwerty

    
// Дескрипторы свойств доступа
    // get – функция без аргументов, которая сработает при чтении свойства,
    // set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
    // enumerable – то же самое, что и для свойств-данных,
    // configurable – то же самое, что и для свойств-данных

    user = {
        name: 'John',
        surname: 'Smith',
    };

    Object.defineProperty(user, 'fullName', {
        get() {
            return `${this.name} ${this.surname}`;
        },
        set(value) {
            return [this.name, this.surname] = value.split(' ');
        },
    });

    console.log(user.fullName);


// Умные геттеры и сеттеры
    user = {
        get name() {
            return this._name;
        },

        set name(value) {
            if (value.length < 4) {
                console.log('The name is too short it shoul be bigger than four symbols')
                return;
            }
            this._name = value;
        }
    };

    user.name = 'Pete';
    console.log( user.name );
    user.name = ''

    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;

        // возраст рассчитывается из текущей даты и дня рождения
        Object.defineProperty(this, 'age', {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        });
    }

    let john = new User('John', new Date(1992,7,1));
    
    console.log( john.birthday)
    console.log( john.age);

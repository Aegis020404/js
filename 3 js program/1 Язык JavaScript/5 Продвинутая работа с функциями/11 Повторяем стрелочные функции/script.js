// У стрелочных функций нет «this»
let group = {
    title: 'Our Group',
    students: [ 'John', 'Pete', 'Alice' ],

    showList() {
        this.students.forEach(
            student=> console.log(this.title + ': ' + student)
        );
    },

    showList1() {
        this.students.forEach(function(student) {
          
          console.log(this.title + ': ' + student)
        });
    }
};

group.showList()
group.showList1()


// Стрелочные функции не имеют «arguments»

function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 1000);
sayHiDeferred('John')